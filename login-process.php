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
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    $stmt = $conn->prepare("SELECT id, name, email, password FROM users WHERE email = ?");
    if (!$stmt) {
        die("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            // Login successful
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['name'] = $user['name'];
            $_SESSION['logged_in'] = true;
            
            // Redirect to course page
            header("Location: course-page.php");
            exit();
        } else {
            // Invalid password
            $_SESSION['login_error'] = "Invalid password";
            header("Location: login.php?error=password");
            exit();
        }
    } else {
        // No user found
        $_SESSION['login_error'] = "No account found with this email";
        header("Location: registration.php?error=no_account");
        exit();
    }

    $stmt->close();
}

$conn->close();
?>