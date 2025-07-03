<?php
session_start();
// No longer redirect if not logged in - everyone can access materials
// Login only provides progress tracking benefits
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Study Materials - American Civics Institute</title>
  <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        margin: 0;
        padding: 0;
        background: #f7fafc;
        line-height: 1.6;
        color: #333;
    }

    .container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .nav-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #f8f9fa;
        padding: 20px;
        margin-bottom: 30px;
        border-bottom: 3px solid #2c5282;
        border-radius: 8px;
    }

    .welcome-message {
        font-size: 1.1rem;
        font-weight: 600;
        color: #2c5282;
    }

    .logout-btn, .login-btn {
        display: inline-block;
        background: #2c5282;
        color: white;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 6px;
        font-weight: 500;
        transition: all 0.3s ease;
    }

    .logout-btn:hover, .login-btn:hover {
        background: #2a4d7a;
        transform: translateY(-1px);
    }

    h1 {
        font-size: 2.5rem;
        color: #1a202c;
        margin-bottom: 1rem;
        text-align: center;
        font-weight: 700;
    }

    .container > p {
        font-size: 1.1rem;
        color: #4a5568;
        text-align: center;
        margin-bottom: 3rem;
        line-height: 1.6;
    }

    .materials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 25px;
        margin: 40px 0;
    }

    .material-card {
        background: white;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        padding: 30px 25px;
        text-align: center;
        transition: all 0.3s ease;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        display: block;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .material-card:hover {
        border-color: #2c5282;
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(44, 82, 130, 0.15);
        text-decoration: none;
        color: inherit;
    }

    .material-icon {
        font-size: 3rem;
        display: block;
        margin-bottom: 15px;
    }

    .material-card h3 {
        font-size: 1.3rem;
        color: #2c5282;
        margin-bottom: 10px;
        font-weight: 600;
    }

    .material-card p {
        color: #4a5568;
        font-size: 1rem;
        margin-bottom: 15px;
    }

    .material-card .download-link {
        display: inline-block;
        background: #2c5282;
        color: white;
        padding: 8px 16px;
        border-radius: 6px;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        margin-top: 10px;
        transition: all 0.3s ease;
    }

    .material-card .download-link:hover {
        background: #2a4d7a;
        transform: translateY(-1px);
    }

    .special-card {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
    }

    .special-card h3 {
        color: white;
    }

    .special-card p {
        color: rgba(255, 255, 255, 0.9);
    }

    .special-card .download-link {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .special-card .download-link:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    .video-section {
        margin-top: 50px;
        text-align: center;
        background: #f8f9fa;
        padding: 40px;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
    }

    .video-section h2 {
        font-size: 1.8rem;
        color: #2c5282;
        margin-bottom: 15px;
        font-weight: 600;
    }

    .video-section p {
        color: #4a5568;
        margin-bottom: 25px;
        font-size: 1.1rem;
    }

    video {
        max-width: 100%;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .login-prompt {
        margin-top: 50px;
        background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
        color: white;
        padding: 40px;
        border-radius: 12px;
        text-align: center;
    }

    .login-prompt h3 {
        font-size: 1.5rem;
        margin-bottom: 15px;
        font-weight: 600;
    }

    .login-prompt p {
        font-size: 1.1rem;
        margin-bottom: 25px;
        opacity: 0.9;
    }

    .prompt-buttons {
        display: flex;
        gap: 15px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .btn-primary {
        background: white;
        color: #3182ce;
        padding: 12px 24px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
    }

    .btn-primary:hover {
        background: #f7fafc;
        transform: translateY(-1px);
    }

    .btn-secondary {
        background: transparent;
        color: white;
        padding: 12px 24px;
        border: 2px solid white;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
    }

    .btn-secondary:hover {
        background: white;
        color: #3182ce;
        transform: translateY(-1px);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .container {
            margin: 10px;
            padding: 15px;
        }

        .nav-bar {
            flex-direction: column;
            gap: 15px;
            text-align: center;
        }

        h1 {
            font-size: 2rem;
        }

        .materials-grid {
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .material-card {
            padding: 25px 20px;
        }

        .video-section, .login-prompt {
            padding: 25px 20px;
        }

        .prompt-buttons {
            flex-direction: column;
            align-items: center;
        }

        .btn-primary, .btn-secondary {
            width: 100%;
            max-width: 250px;
        }
    }
  </style>
</head>
<body>
    <div class="container">
        <div class="nav-bar">
            <?php if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true): ?>
                <div class="welcome-message">Welcome back, <?php echo htmlspecialchars($_SESSION['name'] ?? 'Student'); ?>!</div>
                <div class="logout-container">
                    <a href="logout.php" class="logout-btn">Logout</a>
                </div>
            <?php else: ?>
                <div class="welcome-message">Study Materials - Free Access</div>
                <div class="login-container">
                    <a href="login.php" class="login-btn">Login for Progress Tracking</a>
                </div>
            <?php endif; ?>
        </div>

        <h1>Complete Study Materials</h1>
        <p>Access comprehensive citizenship study materials and practice tests. <?php echo isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true ? 'Your progress is being tracked.' : 'Login to track your progress and save results.'; ?></p>
        
        <div class="materials-grid">
            <a href="#" class="material-card" id="downloadCard1">
                <span class="material-icon">📋</span>
                <h3>100 Practice Questions</h3>
                <p>Official civics test questions with answers</p>
                <span class="download-link">Download PDF</span>
            </a>

            <a href="#" class="material-card" id="downloadCard2">
                <span class="material-icon">📖</span>
                <h3>Pocket Study Guide</h3>
                <p>Comprehensive preparation guide</p>
                <span class="download-link">Download PDF</span>
            </a>

            <a href="#" class="material-card" id="downloadCard3">
                <span class="material-icon">🗂️</span>
                <h3>Civics Flash Cards</h3>
                <p>Quick review materials for studying</p>
                <span class="download-link">Download PDF</span>
            </a>

            <a href="#" class="material-card" id="downloadCard4">
                <span class="material-icon">📄</span>
                <h3>Interview Transcript</h3>
                <p>Sample naturalization interview</p>
                <span class="download-link">Download PDF</span>
            </a>

            <a href="#" class="material-card" id="downloadCard5">
                <span class="material-icon">📝</span>
                <h3>Essential Word List</h3>
                <p>Important vocabulary for the test</p>
                <span class="download-link">Download PDF</span>
            </a>

            <a href="questions.html" class="material-card special-card">
                <span class="material-icon">🎯</span>
                <h3>Take The Civics Test</h3>
                <p>Interactive practice test with 100 questions</p>
                <span class="download-link">Start Test Now</span>
            </a>
        </div>
        

        <?php if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true): ?>
        <div class="login-prompt">
            <h3>Want to Track Your Progress?</h3>
            <p>Create a free account to save your test results, track your learning progress, and get personalized recommendations.</p>
            <div class="prompt-buttons">
                <a href="registration.php" class="btn-primary">Create Free Account</a>
                <a href="login.php" class="btn-secondary">Login</a>
            </div>
        </div>
        <?php endif; ?>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            console.log("Course page loaded successfully");
            
            // Add click handlers for download cards
            const downloadCards = document.querySelectorAll('[id^="downloadCard"]');
            downloadCards.forEach((card, index) => {
                card.addEventListener('click', function(e) {
                    e.preventDefault();
                    const cardTitle = this.querySelector('h3').textContent;
                    console.log("Download card clicked: " + cardTitle);
                    
                    // You can replace this alert with actual download functionality
                    alert("Download would start for: " + cardTitle);
                    
                    // Example of how you might implement actual downloads:
                    // window.open('path/to/your/pdf/file.pdf', '_blank');
                });
            });
            
            // Special handling for the test card (doesn't prevent default since it's a real link)
            const testCard = document.querySelector('a[href="questions.html"]');
            if (testCard) {
                testCard.addEventListener('click', function(e) {
                    console.log("Taking user to civics test...");
                    // This will navigate to questions.html normally
                });
            }
        });
    </script>
</body>
</html>