<?php
session_start();
header('Content-Type: application/json');

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if user is logged in
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    http_response_code(401);
    echo json_encode(['error' => 'Not logged in']);
    exit();
}

// CHECK: Make sure user_id is in session
if (!isset($_SESSION['user_id'])) {
    echo json_encode(['error' => 'User ID not found in session. Make sure your login system sets $_SESSION[\'user_id\']']);
    exit();
}

// Database connection - UPDATE THESE WITH YOUR ACTUAL DATABASE CREDENTIALS
$servername = "localhost";
$username = "ulyag0urc2wft";    // CHANGE THIS
$password = "Userulya2025$";    // CHANGE THIS  
$dbname = "dba23u1vgf2je4";    // CHANGE THIS

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    error_log("Database connection failed: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
    exit();
}

$action = $_POST['action'] ?? $_GET['action'] ?? '';
$user_id = $_SESSION['user_id'];

// Debug logging
error_log("Progress API called - Action: $action, User ID: $user_id");

switch ($action) {
    case 'get_progress':
        $section_id = $_GET['section_id'] ?? 0;
        
        try {
            if ($section_id) {
                // Get progress for specific section
                $stmt = $pdo->prepare("SELECT * FROM user_progress WHERE user_id = ? AND section_id = ?");
                $stmt->execute([$user_id, $section_id]);
                $progress = $stmt->fetch(PDO::FETCH_ASSOC);
                
                if (!$progress) {
                    // Create new progress record
                    $stmt = $pdo->prepare("INSERT INTO user_progress (user_id, section_id, current_question, correct_answers, wrong_answers) VALUES (?, ?, 1, 0, 0)");
                    $stmt->execute([$user_id, $section_id]);
                    
                    $progress = [
                        'user_id' => $user_id,
                        'section_id' => $section_id,
                        'current_question' => 1,
                        'correct_answers' => 0,
                        'wrong_answers' => 0,
                        'completed' => false
                    ];
                }
            } else {
                // Get progress for all sections
                $stmt = $pdo->prepare("SELECT * FROM user_progress WHERE user_id = ?");
                $stmt->execute([$user_id]);
                $progress = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            
            echo json_encode(['success' => true, 'progress' => $progress]);
        } catch (Exception $e) {
            error_log("Error in get_progress: " . $e->getMessage());
            echo json_encode(['error' => 'Failed to get progress: ' . $e->getMessage()]);
        }
        break;

    case 'get_detailed_results':
        $section_id = $_GET['section_id'] ?? 0;
        
        if (!$section_id) {
            echo json_encode(['error' => 'Section ID required']);
            break;
        }
        
        try {
            // Get detailed question results for the section
            $stmt = $pdo->prepare("
                SELECT question_number, user_answer, is_correct, attempt_time 
                FROM question_attempts 
                WHERE user_id = ? AND section_id = ? 
                ORDER BY question_number DESC, attempt_time DESC
            ");
            $stmt->execute([$user_id, $section_id]);
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            // Remove duplicates (keep latest attempt for each question)
            $unique_results = [];
            $seen_questions = [];
            
            foreach ($results as $result) {
                if (!in_array($result['question_number'], $seen_questions)) {
                    $unique_results[] = $result;
                    $seen_questions[] = $result['question_number'];
                }
            }
            
            // Sort by question number
            usort($unique_results, function($a, $b) {
                return $a['question_number'] - $b['question_number'];
            });
            
            echo json_encode(['success' => true, 'results' => $unique_results]);
        } catch (Exception $e) {
            error_log("Error in get_detailed_results: " . $e->getMessage());
            echo json_encode(['error' => 'Failed to get detailed results: ' . $e->getMessage()]);
        }
        break;
        
    case 'update_progress':
        $section_id = $_POST['section_id'] ?? 0;
        $current_question = $_POST['current_question'] ?? 1;
        $correct_answers = $_POST['correct_answers'] ?? 0;
        $wrong_answers = $_POST['wrong_answers'] ?? 0;
        $completed = $_POST['completed'] === 'true' ? 1 : 0;
        
        if (!$section_id) {
            echo json_encode(['error' => 'Section ID required']);
            break;
        }
        
        try {
            // Update or insert progress
            $stmt = $pdo->prepare("
                INSERT INTO user_progress (user_id, section_id, current_question, correct_answers, wrong_answers, completed) 
                VALUES (?, ?, ?, ?, ?, ?) 
                ON DUPLICATE KEY UPDATE 
                current_question = VALUES(current_question),
                correct_answers = VALUES(correct_answers),
                wrong_answers = VALUES(wrong_answers),
                completed = VALUES(completed),
                last_updated = CURRENT_TIMESTAMP
            ");
            
            $result = $stmt->execute([$user_id, $section_id, $current_question, $correct_answers, $wrong_answers, $completed]);
            
            error_log("Progress updated - Section: $section_id, Question: $current_question, Correct: $correct_answers, Wrong: $wrong_answers, Completed: $completed");
            
            echo json_encode(['success' => $result]);
        } catch (Exception $e) {
            error_log("Error in update_progress: " . $e->getMessage());
            echo json_encode(['error' => 'Failed to update progress: ' . $e->getMessage()]);
        }
        break;
        
    case 'save_answer':
        $section_id = $_POST['section_id'] ?? 0;
        $question_number = $_POST['question_number'] ?? 0;
        $user_answer = $_POST['user_answer'] ?? '';
        $is_correct = $_POST['is_correct'] === 'true' ? 1 : 0;
        $question_text = $_POST['question_text'] ?? '';
        $correct_answer = $_POST['correct_answer'] ?? '';
        
        if (!$section_id || !$question_number) {
            echo json_encode(['error' => 'Section ID and Question Number required']);
            break;
        }
        
        try {
            // Delete any previous attempts for this question
            $stmt = $pdo->prepare("DELETE FROM question_attempts WHERE user_id = ? AND section_id = ? AND question_number = ?");
            $stmt->execute([$user_id, $section_id, $question_number]);
            
            // Save new attempt with question details
            $stmt = $pdo->prepare("
                INSERT INTO question_attempts (user_id, section_id, question_number, user_answer, is_correct, question_text, correct_answer) 
                VALUES (?, ?, ?, ?, ?, ?, ?)
            ");
            
            $result = $stmt->execute([$user_id, $section_id, $question_number, $user_answer, $is_correct, $question_text, $correct_answer]);
            
            echo json_encode(['success' => $result]);
        } catch (Exception $e) {
            error_log("Error in save_answer: " . $e->getMessage());
            // Don't fail the whole process if answer logging fails
            echo json_encode(['success' => true, 'warning' => 'Answer not logged: ' . $e->getMessage()]);
        }
        break;
        
    case 'reset_section':
        $section_id = $_POST['section_id'] ?? 0;
        
        if (!$section_id) {
            echo json_encode(['error' => 'Section ID required']);
            break;
        }
        
        try {
            // Reset progress for specific section
            $stmt = $pdo->prepare("
                UPDATE user_progress 
                SET current_question = 1, correct_answers = 0, wrong_answers = 0, completed = FALSE 
                WHERE user_id = ? AND section_id = ?
            ");
            $stmt->execute([$user_id, $section_id]);
            
            // Also delete question attempts for this section
            $stmt = $pdo->prepare("DELETE FROM question_attempts WHERE user_id = ? AND section_id = ?");
            $stmt->execute([$user_id, $section_id]);
            
            error_log("Section reset - Section: $section_id");
            
            echo json_encode(['success' => true]);
        } catch (Exception $e) {
            error_log("Error in reset_section: " . $e->getMessage());
            echo json_encode(['error' => 'Failed to reset section: ' . $e->getMessage()]);
        }
        break;
        
    case 'test_connection':
        // Simple test endpoint
        echo json_encode([
            'success' => true, 
            'message' => 'API is working',
            'user_id' => $user_id,
            'session_data' => [
                'logged_in' => $_SESSION['logged_in'] ?? 'not set',
                'name' => $_SESSION['name'] ?? 'not set'
            ]
        ]);
        break;
        
    default:
        echo json_encode(['error' => 'Invalid action: ' . $action]);
        break;
}
?>