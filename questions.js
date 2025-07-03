<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>U.S. Citizenship Course Test - Fixed Version</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: #4a6fa5;
            min-height: 100vh;
            color: #333;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        /* Header */
        .header {
            background: white;
            padding: 1rem 2rem;
            margin-bottom: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo-section {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .logo {
            width: 40px;
            height: 40px;
            background: #4a6fa5;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 18px;
            font-weight: bold;
        }

        .site-info h1 {
            font-size: 1.4rem;
            font-weight: 600;
            color: #333;
            margin: 0;
        }

        .site-info p {
            font-size: 0.85rem;
            color: #666;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .user-info {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .welcome-message {
            font-size: 1rem;
            color: #333;
            font-weight: 500;
        }

        .logout-btn {
            background: #4a6fa5;
            color: white;
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            font-size: 0.9rem;
            cursor: pointer;
        }

        .logout-btn:hover {
            background: #3d5a8a;
        }

        /* Main Quiz Container */
        .quiz-container {
            background: white;
            border-radius: 8px;
            padding: 2.5rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
        }

        /* Section Selection */
        .section-select {
            text-align: center;
        }

        .main-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #333;
            margin-bottom: 0.5rem;
        }

        .main-subtitle {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 2.5rem;
        }

        /* Progress Overview */
        .progress-overview {
            background: #f8f9fa;
            padding: 2rem;
            border-radius: 8px;
            margin-bottom: 2rem;
            border: 1px solid #e9ecef;
        }

        .progress-overview h3 {
            font-size: 1.3rem;
            color: #333;
            margin-bottom: 1.5rem;
            text-align: center;
            font-weight: 600;
        }

        .overall-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }

        .stat-item {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            border: 1px solid #e9ecef;
            transition: transform 0.2s ease;
        }

        .stat-item:hover {
            transform: translateY(-2px);
        }

        .stat-number {
            font-size: 2rem;
            font-weight: 700;
            color: #4a6fa5;
            margin-bottom: 0.5rem;
        }

        .stat-label {
            font-size: 0.85rem;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 500;
        }

        /* Section Dropdown */
        .section-selector {
            margin: 2rem 0;
        }

        .section-dropdown {
            width: 100%;
            padding: 1rem 1.5rem;
            font-size: 1rem;
            border: 2px solid #e9ecef;
            border-radius: 6px;
            background: white;
            color: #333;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .section-dropdown:focus {
            outline: none;
            border-color: #4a6fa5;
            box-shadow: 0 0 0 3px rgba(74, 111, 165, 0.1);
        }

        /* Section Progress */
        .section-progress {
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 6px;
            margin: 1.5rem 0;
            border: 1px solid #e9ecef;
        }

        .progress-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            font-weight: 600;
            color: #333;
        }

        .progress-bar {
            width: 100%;
            height: 8px;
            background: #e9ecef;
            border-radius: 4px;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            background: #4a6fa5;
            transition: width 0.5s ease;
            border-radius: 4px;
        }

        /* Buttons */
        .button-group {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 2rem;
        }

        .btn {
            padding: 12px 24px;
            border: none;
            border-radius: 6px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
        }

        .btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .start-btn {
            background: #4a6fa5;
            color: white;
            border: 2px solid #4a6fa5;
        }

        .start-btn:hover {
            background: #3d5a8a;
            border-color: #3d5a8a;
        }

        .continue-btn {
            background: white;
            color: #4a6fa5;
            border: 2px solid #4a6fa5;
        }

        .continue-btn:hover {
            background: #4a6fa5;
            color: white;
        }

        .restart-btn {
            background: white;
            color: #fd7e14;
            border: 2px solid #fd7e14;
        }

        .restart-btn:hover {
            background: #fd7e14;
            color: white;
        }

        .review-btn {
            background: white;
            color: #6f42c1;
            border: 2px solid #6f42c1;
        }

        .review-btn:hover {
            background: #6f42c1;
            color: white;
        }

        .menu-btn {
            background: #6c757d;
            color: white;
            border: 2px solid #6c757d;
        }

        .menu-btn:hover {
            background: #5a6268;
            border-color: #5a6268;
        }

        /* Quiz Interface */
        .quiz-interface {
            display: none;
        }

        .section-title {
            font-size: 1.6rem;
            font-weight: 600;
            color: #333;
            text-align: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #e9ecef;
        }

        .question-container {
            background: #f8f9fa;
            padding: 2rem;
            border-radius: 8px;
            margin-bottom: 2rem;
            border-left: 4px solid #4a6fa5;
        }

        .question {
            font-size: 1.2rem;
            font-weight: 600;
            color: #333;
            line-height: 1.5;
        }

        .progress-indicator {
            text-align: center;
            font-size: 1rem;
            color: #666;
            margin-bottom: 1.5rem;
            font-weight: 500;
        }

        /* Options */
        .options {
            display: grid;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .option-btn {
            padding: 1rem 1.5rem;
            background: white;
            border: 2px solid #e9ecef;
            border-radius: 6px;
            text-align: left;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            line-height: 1.4;
        }

        .option-btn:hover:not(:disabled) {
            border-color: #4a6fa5;
            background: #f8f9fa;
        }

        .option-btn:disabled {
            cursor: not-allowed;
        }

        .option-btn.correct {
            background: #d4edda;
            border-color: #28a745;
            color: #155724;
        }

        .option-btn.incorrect {
            background: #f8d7da;
            border-color: #dc3545;
            color: #721c24;
        }

        /* Feedback */
        .feedback {
            background: white;
            padding: 1.5rem;
            border-radius: 6px;
            margin: 1.5rem 0;
            border-left: 4px solid #4a6fa5;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            border: 1px solid #e9ecef;
            display: none;
        }

        .feedback.correct {
            border-left-color: #28a745;
            background: #d4edda;
            color: #155724;
        }

        .feedback.incorrect {
            border-left-color: #dc3545;
            background: #f8d7da;
            color: #721c24;
        }

        /* Navigation */
        .navigation {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 1px solid #e9ecef;
        }

        /* Results */
        .results {
            display: none;
            text-align: center;
        }

        .results-content {
            background: white;
            padding: 2.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .score-summary h3 {
            font-size: 1.8rem;
            color: #333;
            margin-bottom: 1.5rem;
            font-weight: 600;
        }

        .score-details {
            font-size: 1.1rem;
            margin: 1.5rem 0;
            color: #333;
        }

        .score-details p {
            margin: 0.8rem 0;
        }

        .performance-indicator {
            padding: 1rem 2rem;
            border-radius: 6px;
            font-weight: 600;
            margin: 1.5rem 0;
            font-size: 1rem;
        }

        .performance-indicator.good {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .performance-indicator.needs-improvement {
            background: #fff3cd;
            color: #856404;
            border: 1px solid #ffeaa7;
        }

        /* Status Indicators */
        .completed-section {
            color: #28a745;
            font-weight: 700;
        }

        .in-progress-section {
            color: #fd7e14;
            font-weight: 700;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding: 10px;
            }

            .header {
                flex-direction: column;
                gap: 15px;
                text-align: center;
                padding: 1rem;
            }

            .quiz-container {
                padding: 1.5rem;
            }

            .main-title {
                font-size: 2rem;
            }

            .overall-stats {
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            }

            .button-group {
                flex-direction: column;
                align-items: center;
            }

            .btn {
                width: 100%;
                max-width: 300px;
                justify-content: center;
            }

            .navigation {
                flex-direction: column;
                gap: 1rem;
            }

            .question-container {
                padding: 1.5rem;
            }

            .option-btn {
                padding: 0.8rem 1rem;
                font-size: 0.95rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="logo-section">
                <div class="logo">★</div>
                <div class="site-info">
                    <h1>American Civics Institute</h1>
                    <p>Citizenship Education Center</p>
                </div>
            </div>
            <div class="user-info">
                <div class="welcome-message">
                    Welcome, John Doe!
                </div>
                <button class="logout-btn" onclick="alert('Logout functionality would be here')">
                    Logout
                </button>
            </div>
        </div>

        <!-- Main Quiz Container -->
        <div class="quiz-container">
            <!-- Section Selection -->
            <div class="section-select" id="sectionSelect">
                <h2 class="main-title">COURSE TEST</h2>
                <p class="main-subtitle">10 sections, each section contains 10 questions</p>
                
                <!-- Progress Overview -->
                <div class="progress-overview">
                    <h3>Your Progress</h3>
                    <div id="overallStats" class="overall-stats">
                        <div class="stat-item">
                            <div class="stat-number">3</div>
                            <div class="stat-label">Completed Sections</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">24</div>
                            <div class="stat-label">Correct Answers</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">6</div>
                            <div class="stat-label">Wrong Answers</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">80%</div>
                            <div class="stat-label">Accuracy Rate</div>
                        </div>
                    </div>
                </div>
                
                <!-- Section Selector -->
                <div class="section-selector">
                    <select id="sectionDropdown" class="section-dropdown">
                        <option value="1">1: Principles of American Democracy</option>
                        <option value="2">2: System of Government</option>
                        <option value="3">3: Rights and Responsibilities</option>
                        <option value="4">4: Colonial Period and Independence</option>
                        <option value="5">5: 1800s</option>
                        <option value="6">6: Recent American History</option>
                        <option value="7">7: Government Structure</option>
                        <option value="8">8: Federal Holidays and Symbols</option>
                        <option value="9">9: Geography and Economy</option>
                        <option value="10">10: Miscellaneous</option>
                    </select>
                </div>
                
                <!-- Section Progress -->
                <div class="section-progress">
                    <div class="progress-info">
                        <span id="sectionProgressText">
                            <span class="completed-section">✓ Completed</span>
                        </span>
                        <span id="scoreDisplay">Score: 8/10</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" id="progressFill" style="width: 100%;"></div>
                    </div>
                </div>
                
                <!-- Action Buttons -->
                <div class="button-group">
                    <button class="btn start-btn" id="startBtn" style="display: none;">
                        Start Quiz
                    </button>
                    <button class="btn continue-btn" id="continueBtn" style="display: none;">
                        Continue Quiz
                    </button>
                    <button class="btn restart-btn" id="restartBtn">
                        Restart Section
                    </button>
                    <button class="btn review-btn" id="reviewBtn">
                        Review Answers
                    </button>
                </div>
            </div>
            
            <!-- Quiz Interface -->
            <div class="quiz-interface" id="quizInterface">
                <div class="section-title" id="sectionTitle"></div>
                
                <div class="progress-indicator" id="progressIndicator">Question 1/10</div>
                
                <div class="question-container">
                    <div class="question" id="questionText">
                        What is the supreme law of the land?
                    </div>
                </div>
                
                <div class="options" id="optionsContainer">
                    <!-- Options will be populated by JavaScript -->
                </div>
                
                <div class="feedback" id="feedbackContainer">
                    Correct! The Constitution is indeed the supreme law of the land.
                </div>
                
                <div class="navigation">
                    <button class="btn menu-btn" id="backBtn" style="display: none;">
                        ← Back
                    </button>
                    <button class="btn continue-btn" id="nextBtn" style="display: none;">
                        Next →
                    </button>
                    <button class="btn menu-btn" id="menuBtn">
                        Back to Menu
                    </button>
                </div>
            </div>
            
            <!-- Results -->
            <div class="results" id="resultsSection">
                <div class="results-content">
                    <div class="score-summary">
                        <h3>Section Complete!</h3>
                        <div class="score-details" id="scoreDetails">
                            <p><strong>Your Score:</strong> 8 out of 10 (80%)</p>
                            <p><strong>Correct Answers:</strong> 8</p>
                            <p><strong>Wrong Answers:</strong> 2</p>
                            <div class="performance-indicator good">
                                ✓ Great job! You're ready for the real test!
                            </div>
                        </div>
                    </div>
                    
                    <div class="button-group">
                        <button class="btn menu-btn" id="resultsMenuBtn">
                            Back to Menu
                        </button>
                        <button class="btn restart-btn" id="resultsRestartBtn">
                            Restart Section
                        </button>
                        <button class="btn review-btn" id="resultsReviewBtn">
                            Review Answers
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Quiz System - Fixed Version
        console.log('🚀 Loading Fixed Quiz System...');

        // Global variables
        let currentSection = 1;
        let currentQuestionIndex = 0;
        let score = 0;
        let wrongAnswers = 0;
        let questions = [];
        let isReviewMode = false;
        let userAnswers = [];

        // Sample quiz questions
        const allQuestions = {
            1: [
                {
                    question: "What is the supreme law of the land?",
                    options: ["The Constitution", "The Declaration of Independence", "The Bill of Rights", "Federal Law"],
                    correct: 0
                },
                {
                    question: "What does the Constitution do?",
                    options: ["Sets up the government", "Defines the government", "Protects basic rights of Americans", "All of the above"],
                    correct: 3
                },
                {
                    question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
                    options: ["We the People", "We the Citizens", "We the Americans", "We the States"],
                    correct: 0
                },
                {
                    question: "What is an amendment?",
                    options: ["A change to the Constitution", "A new law", "A court decision", "A presidential order"],
                    correct: 0
                },
                {
                    question: "What do we call the first ten amendments to the Constitution?",
                    options: ["The Bill of Rights", "The Declaration of Rights", "The Constitution Rights", "The Basic Rights"],
                    correct: 0
                },
                {
                    question: "What is one right or freedom from the First Amendment?",
                    options: ["Speech", "Religion", "Assembly", "All of the above"],
                    correct: 3
                },
                {
                    question: "How many amendments does the Constitution have?",
                    options: ["25", "26", "27", "28"],
                    correct: 2
                },
                {
                    question: "What did the Declaration of Independence do?",
                    options: ["Announced our independence from Great Britain", "Declared our independence from France", "Created the Constitution", "Established the government"],
                    correct: 0
                },
                {
                    question: "What are two rights in the Declaration of Independence?",
                    options: ["Life and liberty", "Liberty and pursuit of happiness", "Life and pursuit of happiness", "All of the above"],
                    correct: 3
                },
                {
                    question: "What is freedom of religion?",
                    options: ["You can practice any religion", "You can practice no religion", "The government cannot establish a religion", "All of the above"],
                    correct: 3
                }
            ],
            2: [
                {
                    question: "What is the economic system in the United States?",
                    options: ["Socialist economy", "Capitalist economy", "Market economy", "Both capitalist and market economy"],
                    correct: 3
                },
                {
                    question: "What is the 'rule of law'?",
                    options: ["Everyone must follow the law", "Leaders must obey the law", "No one is above the law", "All of the above"],
                    correct: 3
                },
                {
                    question: "Name one branch or part of the government.",
                    options: ["Congress", "Legislative", "Executive", "All of the above"],
                    correct: 3
                },
                {
                    question: "What stops one branch of government from becoming too powerful?",
                    options: ["Checks and balances", "Separation of powers", "The Constitution", "All of the above"],
                    correct: 3
                },
                {
                    question: "Who is in charge of the executive branch?",
                    options: ["The President", "The Vice President", "The Speaker of the House", "The Chief Justice"],
                    correct: 0
                },
                {
                    question: "Who makes federal laws?",
                    options: ["Congress", "The President", "The Supreme Court", "The Senate"],
                    correct: 0
                },
                {
                    question: "What are the two parts of the U.S. Congress?",
                    options: ["The Senate and House of Representatives", "The House and Senate", "The Upper and Lower House", "Both A and B"],
                    correct: 3
                },
                {
                    question: "How many U.S. Senators are there?",
                    options: ["50", "100", "435", "538"],
                    correct: 1
                },
                {
                    question: "We elect a U.S. Senator for how many years?",
                    options: ["2", "4", "6", "8"],
                    correct: 2
                },
                {
                    question: "How many voting members are in the House of Representatives?",
                    options: ["100", "435", "538", "50"],
                    correct: 1
                }
            ]
        };

        // Sample progress data
        const progressData = {
            1: { completed: true, score: 8, total: 10 },
            2: { completed: false, current: 5, total: 10 },
            3: { completed: true, score: 9, total: 10 },
            4: { completed: false, current: 1, total: 10 },
            5: { completed: false, current: 1, total: 10 },
            6: { completed: false, current: 1, total: 10 },
            7: { completed: false, current: 1, total: 10 },
            8: { completed: false, current: 1, total: 10 },
            9: { completed: false, current: 1, total: 10 },
            10: { completed: false, current: 1, total: 10 }
        };

        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', function() {
            console.log('✅ DOM Content Loaded - Initializing quiz...');
            initializeQuiz();
        });

        function initializeQuiz() {
            console.log('🔧 Initializing quiz system...');
            
            setupEventListeners();
            updateSectionProgress();
            
            console.log('✅ Quiz initialization complete');
        }

        function setupEventListeners() {
            console.log('🔘 Setting up event listeners...');
            
            // Section dropdown
            const sectionDropdown = document.getElementById('sectionDropdown');
            if (sectionDropdown) {
                sectionDropdown.addEventListener('change', updateSectionProgress);
            }
            
            // Main buttons
            const startBtn = document.getElementById('startBtn');
            const continueBtn = document.getElementById('continueBtn');
            const restartBtn = document.getElementById('restartBtn');
            const reviewBtn = document.getElementById('reviewBtn');
            
            if (startBtn) startBtn.addEventListener('click', startQuiz);
            if (continueBtn) continueBtn.addEventListener('click', continueQuiz);
            if (restartBtn) restartBtn.addEventListener('click', restartQuiz);
            if (reviewBtn) reviewBtn.addEventListener('click', startReview);
            
            // Navigation buttons
            const backBtn = document.getElementById('backBtn');
            const nextBtn = document.getElementById('nextBtn');
            const menuBtn = document.getElementById('menuBtn');
            
            if (backBtn) backBtn.addEventListener('click', previousQuestion);
            if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
            if (menuBtn) menuBtn.addEventListener('click', returnToMenu);
            
            // Results buttons
            const resultsMenuBtn = document.getElementById('resultsMenuBtn');
            const resultsRestartBtn = document.getElementById('resultsRestartBtn');
            const resultsReviewBtn = document.getElementById('resultsReviewBtn');
            
            if (resultsMenuBtn) resultsMenuBtn.addEventListener('click', returnToMenu);
            if (resultsRestartBtn) resultsRestartBtn.addEventListener('click', restartQuiz);
            if (resultsReviewBtn) resultsReviewBtn.addEventListener('click', startReview);
            
            console.log('✅ Event listeners set up successfully');
        }

        function updateSectionProgress() {
            const sectionDropdown = document.getElementById('sectionDropdown');
            const selectedSection = parseInt(sectionDropdown.value);
            const data = progressData[selectedSection];
            
            const progressText = document.getElementById('sectionProgressText');
            const scoreDisplay = document.getElementById('scoreDisplay');
            const progressFill = document.getElementById('progressFill');
            
            const startBtn = document.getElementById('startBtn');
            const continueBtn = document.getElementById('continueBtn');
            const restartBtn = document.getElementById('restartBtn');
            const reviewBtn = document.getElementById('reviewBtn');
            
            if (data.completed) {
                progressText.innerHTML = '<span class="completed-section">✓ Completed</span>';
                scoreDisplay.textContent = `Score: ${data.score}/${data.total}`;
                progressFill.style.width = '100%';
                
                startBtn.style.display = 'none';
                continueBtn.style.display = 'none';
                restartBtn.style.display = 'inline-flex';
                reviewBtn.style.display = 'inline-flex';
            } else if (data.current > 1) {
                progressText.innerHTML = '<span class="in-progress-section">In Progress</span>';
                scoreDisplay.textContent = `Question ${data.current}/${data.total}`;
                progressFill.style.width = `${(data.current - 1) / data.total * 100}%`;
                
                startBtn.style.display = 'none';
                continueBtn.style.display = 'inline-flex';
                restartBtn.style.display = 'inline-flex';
                reviewBtn.style.display = 'none';
            } else {
                progressText.textContent = 'Ready to start';
                scoreDisplay.textContent = '';
                progressFill.style.width = '0%';
                
                startBtn.style.display = 'inline-flex';
                continueBtn.style.display = 'none';
                restartBtn.style.display = 'none';
                reviewBtn.style.display = 'none';
            }
            
            console.log(`📋 Updated progress for section ${selectedSection}`);
        }

        function startQuiz() {
            console.log('🚀 Starting quiz...');
            
            isReviewMode = false;
            currentSection = parseInt(document.getElementById('sectionDropdown').value);
            
            // Load questions for this section
            questions = allQuestions[currentSection] || allQuestions[1];
            
            // Initialize quiz state
            currentQuestionIndex = 0;
            score = 0;
            wrongAnswers = 0;
            userAnswers = [];
            
            showQuizInterface();
            displayQuestion();
            
            console.log('✅ Quiz started successfully');
        }

        function continueQuiz() {
            console.log('▶️ Continuing quiz...');
            
            isReviewMode = false;
            currentSection = parseInt(document.getElementById('sectionDropdown').value);
            
            // Load questions for this section
            questions = allQuestions[currentSection] || allQuestions[1];
            
            // Set quiz state from saved progress
            const data = progressData[currentSection];
            currentQuestionIndex = (data.current || 1) - 1;
            score = Math.floor(currentQuestionIndex * 0.8); // Estimate previous correct answers
            wrongAnswers = currentQuestionIndex - score;
            
            // Initialize user answers array
            userAnswers = Array(currentQuestionIndex).fill({ selectedIndex: 0, isCorrect: true });
            
            showQuizInterface();
            displayQuestion();
            
            console.log('✅ Quiz continued from question', currentQuestionIndex + 1);
        }

        function restartQuiz() {
            if (confirm('Are you sure you want to restart this section? Your progress will be lost.')) {
                console.log('🔄 Restarting quiz...');
                
                // Reset progress data for this section
                const sectionId = parseInt(document.getElementById('sectionDropdown').value);
                progressData[sectionId] = { completed: false, current: 1, total: 10 };
                
                updateSectionProgress();
                startQuiz();
                
                console.log('✅ Section restarted');
            }
        }

        function startReview() {
            console.log('👁️ Starting review mode...');
            
            isReviewMode = true;
            currentSection = parseInt(document.getElementById('sectionDropdown').value);
            questions = allQuestions[currentSection] || allQuestions[1];
            
            // Create sample answers for demo
            userAnswers = questions.map((question, index) => ({
                selectedIndex: index % 2 === 0 ? question.correct : (question.correct + 1) % question.options.length,
                isCorrect: index % 2 === 0,
                questionIndex: index
            }));
            
            currentQuestionIndex = 0;
            
            showQuizInterface();
            displayReviewQuestion();
            
            console.log('✅ Review started successfully');
        }

        function showQuizInterface() {
            console.log('🖥️ Showing quiz interface...');
            
            const sectionSelect = document.getElementById('sectionSelect');
            const quizInterface = document.getElementById('quizInterface');
            const resultsSection = document.getElementById('resultsSection');
            const sectionTitle = document.getElementById('sectionTitle');
            
            if (sectionSelect) sectionSelect.style.display = 'none';
            if (quizInterface) quizInterface.style.display = 'block';
            if (resultsSection) resultsSection.style.display = 'none';
            
            if (sectionTitle) {
                const sectionDropdown = document.getElementById('sectionDropdown');
                const sectionName = sectionDropdown.options[sectionDropdown.selectedIndex].text.split(': ')[1];
                sectionTitle.textContent = `${isReviewMode ? 'Review ' : ''}Section ${currentSection}: ${sectionName}`;
            }
            
            console.log('✅ Quiz interface shown');
        }

        function displayQuestion() {
            console.log(`❓ Displaying question ${currentQuestionIndex + 1} of ${questions.length}`);
            
            if (currentQuestionIndex >= questions.length) {
                showResults();
                return;
            }
            
            const question = questions[currentQuestionIndex];
            
            // Update question text
            const questionText = document.getElementById('questionText');
            if (questionText) {
                questionText.textContent = question.question;
            }
            
            // Update progress indicator
            const progressIndicator = document.getElementById('progressIndicator');
            if (progressIndicator) {
                progressIndicator.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
            }
            
            // Create option buttons
            const optionsContainer = document.getElementById('optionsContainer');
            if (optionsContainer) {
                optionsContainer.innerHTML = '';
                
                question.options.forEach((option, index) => {
                    const button = document.createElement('button');
                    button.textContent = option;
                    button.className = 'option-btn';
                    button.addEventListener('click', () => selectAnswer(index));
                    optionsContainer.appendChild(button);
                });
            }
            
            // Hide feedback and next button
            const feedbackContainer = document.getElementById('feedbackContainer');
            const nextBtn = document.getElementById('nextBtn');
            const backBtn = document.getElementById('backBtn');
            
            if (feedbackContainer) feedbackContainer.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            if (backBtn) backBtn.style.display = currentQuestionIndex > 0 ? 'inline-flex' : 'none';
            
            console.log('✅ Question displayed');
        }

        function displayReviewQuestion() {
            console.log(`👁️ Displaying review question ${currentQuestionIndex + 1} of ${questions.length}`);
            
            if (currentQuestionIndex >= questions.length) {
                showReviewResults();
                return;
            }
            
            const question = questions[currentQuestionIndex];
            const userAnswer = userAnswers[currentQuestionIndex];
            
            // Update question text
            const questionText = document.getElementById('questionText');
            if (questionText) {
                questionText.textContent = question.question;
            }
            
            // Update progress indicator
            const progressIndicator = document.getElementById('progressIndicator');
            if (progressIndicator) {
                progressIndicator.textContent = `Review ${currentQuestionIndex + 1} of ${questions.length}`;
            }
            
            // Create option buttons with review styling
            const optionsContainer = document.getElementById('optionsContainer');
            if (optionsContainer) {
                optionsContainer.innerHTML = '';
                
                question.options.forEach((option, index) => {
                    const button = document.createElement('button');
                    button.textContent = option;
                    button.className = 'option-btn';
                    button.disabled = true;
                    
                    if (index === question.correct) {
                        button.classList.add('correct');
                    }
                    
                    if (userAnswer && index === userAnswer.selectedIndex && !userAnswer.isCorrect) {
                        button.classList.add('incorrect');
                    }
                    
                    optionsContainer.appendChild(button);
                });
            }
            
            // Show feedback
            const feedbackContainer = document.getElementById('feedbackContainer');
            if (feedbackContainer && userAnswer) {
                feedbackContainer.style.display = 'block';
                const resultText = userAnswer.isCorrect ? 'You answered correctly!' : 'You answered incorrectly.';
                feedbackContainer.innerHTML = `
                    <strong>${resultText}</strong><br>
                    Your answer: ${question.options[userAnswer.selectedIndex]}<br>
                    Correct answer: ${question.options[question.correct]}
                `;
                feedbackContainer.className = `feedback ${userAnswer.isCorrect ? 'correct' : 'incorrect'}`;
            }
            
            // Show navigation buttons
            const nextBtn = document.getElementById('nextBtn');
            const backBtn = document.getElementById('backBtn');
            
            if (nextBtn) nextBtn.style.display = 'inline-flex';
            if (backBtn) backBtn.style.display = currentQuestionIndex > 0 ? 'inline-flex' : 'none';
            
            console.log('✅ Review question displayed');
        }

        function selectAnswer(selectedIndex) {
            if (isReviewMode) return;
            
            console.log(`🎯 Answer selected: option ${selectedIndex}`);
            
            const question = questions[currentQuestionIndex];
            const isCorrect = selectedIndex === question.correct;
            
            // Store user's answer
            userAnswers[currentQuestionIndex] = {
                selectedIndex: selectedIndex,
                isCorrect: isCorrect,
                questionIndex: currentQuestionIndex
            };
            
            // Update scores
            if (isCorrect) {
                score++;
                console.log('✅ Correct answer! Score:', score);
            } else {
                wrongAnswers++;
                console.log('❌ Wrong answer! Wrong count:', wrongAnswers);
            }
            
            // Disable all option buttons and show feedback
            const optionButtons = document.querySelectorAll('.option-btn');
            optionButtons.forEach((btn, index) => {
                btn.disabled = true;
                if (index === question.correct) {
                    btn.classList.add('correct');
                } else if (index === selectedIndex && !isCorrect) {
                    btn.classList.add('incorrect');
                }
            });
            
            // Show feedback
            const feedbackContainer = document.getElementById('feedbackContainer');
            if (feedbackContainer) {
                feedbackContainer.style.display = 'block';
                feedbackContainer.textContent = isCorrect ? 
                    'Correct!' : 
                    `Incorrect. The correct answer is: ${question.options[question.correct]}`;
                feedbackContainer.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
            }
            
            // Show next button
            const nextBtn = document.getElementById('nextBtn');
            if (nextBtn) {
                nextBtn.style.display = 'inline-flex';
            }
            
            console.log('✅ Answer processed');
        }

        function nextQuestion() {
            console.log('➡️ Moving to next question...');
            currentQuestionIndex++;
            
            if (isReviewMode) {
                displayReviewQuestion();
            } else {
                displayQuestion();
            }
        }

        function previousQuestion() {
            console.log('⬅️ Moving to previous question...');
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                
                if (isReviewMode) {
                    displayReviewQuestion();
                } else {
                    displayQuestion();
                }
            }
        }

        function showResults() {
            console.log('🏆 Showing results...');
            
            // Update progress data
            progressData[currentSection] = {
                completed: true,
                score: score,
                total: questions.length
            };
            
            hideQuizElements();
            
            const resultsSection = document.getElementById('resultsSection');
            if (resultsSection) {
                resultsSection.style.display = 'block';
            }
            
            const percentage = Math.round((score / questions.length) * 100);
            
            // Update results content
            const scoreDetails = document.getElementById('scoreDetails');
            if (scoreDetails) {
                scoreDetails.innerHTML = `
                    <p><strong>Your Score:</strong> ${score} out of ${questions.length} (${percentage}%)</p>
                    <p><strong>Correct Answers:</strong> ${score}</p>
                    <p><strong>Wrong Answers:</strong> ${wrongAnswers}</p>
                    <div class="performance-indicator ${percentage >= 70 ? 'good' : 'needs-improvement'}">
                        ${percentage >= 70 ? '✅ Excellent! You\'re ready for the real test!' : '⚠️ Keep studying! You need 70% or higher to pass.'}
                    </div>
                `;
            }
            
            console.log('✅ Results shown');
        }

        function showReviewResults() {
            console.log('👁️ Showing review results...');
            
            hideQuizElements();
            
            const resultsSection = document.getElementById('resultsSection');
            if (resultsSection) {
                resultsSection.style.display = 'block';
            }
            
            const correctCount = userAnswers.filter(answer => answer.isCorrect).length;
            const wrongCount = userAnswers.length - correctCount;
            const percentage = Math.round((correctCount / userAnswers.length) * 100);
            
            const scoreDetails = document.getElementById('scoreDetails');
            if (scoreDetails) {
                scoreDetails.innerHTML = `
                    <p><strong>Review Summary:</strong> ${correctCount} correct, ${wrongCount} incorrect</p>
                    <p><strong>Overall Score:</strong> ${correctCount}/${userAnswers.length} (${percentage}%)</p>
                    <div class="performance-indicator ${percentage >= 70 ? 'good' : 'needs-improvement'}">
                        ${percentage >= 70 ? '✅ Strong performance!' : '⚠️ Consider more practice!'}
                    </div>
                `;
            }
            
            console.log('✅ Review results shown');
        }

        function hideQuizElements() {
            const quizInterface = document.getElementById('quizInterface');
            if (quizInterface) quizInterface.style.display = 'none';
        }

        function returnToMenu() {
            console.log('🏠 Returning to main menu...');
            
            isReviewMode = false;
            
            hideQuizElements();
            
            const sectionSelect = document.getElementById('sectionSelect');
            const resultsSection = document.getElementById('resultsSection');
            
            if (sectionSelect) sectionSelect.style.display = 'block';
            if (resultsSection) resultsSection.style.display = 'none';
            
            updateSectionProgress();
            
            console.log('✅ Returned to main menu');
        }

        console.log('✅ Fixed Quiz System Loaded - All buttons working!');
    </script>
</body>
</html>