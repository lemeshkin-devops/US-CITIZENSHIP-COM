<?php
session_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$host = "localhost";
$dbname = 'dba23u1vgf2je4';
$username = 'ulyag0urc2wft';
$password = 'Userulya2025$';

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    // Store the actual password as entered by the user, but hash it
    $password = password_hash($_POST['password'] ?? '', PASSWORD_DEFAULT);

    // Check if email already exists
    $check_email = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $check_email->bind_param("s", $email);
    $check_email->execute();
    $result = $check_email->get_result();
    
    if ($result->num_rows > 0) {
        echo "Email already registered. Please <a href='login.php'>login</a> instead.";
        exit();
    }
    $check_email->close();
    
    // Insert new user
    $stmt = $conn->prepare("INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)");
    if (!$stmt) {
        die("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param("ssss", $name, $email, $password, $phone);
    if ($stmt->execute()) {
        $_SESSION['user_id'] = $conn->insert_id;
        $_SESSION['name'] = $name;
        $_SESSION['logged_in'] = true;
        
        // Redirect to course page
        header("Location: course-page.php");
        exit();
    } else {
        echo "Registration failed: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>