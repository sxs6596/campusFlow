<?php
// Essential CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");

// Additional security-related headers
header('X-API-Version: 1.0.0');
header('X-Frame-Options: SAMEORIGIN');
// Uncomment the following lines if you want to use these headers
// header('X-XSS-Protection: 1; mode=block');
// header('Cache-Control: no-cache, must-revalidate');
// header('X-Content-Type-Options: nosniff');
// header('Referrer-Policy: no-referrer-when-downgrade');

// Database connection parameters
$host = 'localhost';
$username = 'sxs6596_root';
$password = 'Harsha6596$';
$db = 'sxs6596_campus_test';

// Create connection to the database
$conn = mysqli_connect($host, $username, $password, $db);

// Check the database connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Handle POST request to create a new exam
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Set the content type for JSON response
    header('Content-Type: application/json');

    // Get the request body content
    $json = file_get_contents('php://input');

    // Decode the JSON data
    $data = json_decode($json, true);

    // Accessing the fields from the request data
    $examName = mysqli_real_escape_string($conn, $data["examName"]);
    $examDate = mysqli_real_escape_string($conn, $data["examDate"]);

    // Insert exam data query using prepared statement
    $stmt = mysqli_prepare($conn, "INSERT INTO exams (examName, examDate) VALUES (?, ?)");

    // Bind parameters
    mysqli_stmt_bind_param($stmt, "ss", $examName, $examDate);

    if (mysqli_stmt_execute($stmt)) {
        // Success response
        http_response_code(201);
        $result['status'] = 'success';
        $result['message'] = 'Exam created successfully.';
        echo json_encode($result);
    } else {
        // Error response
        http_response_code(422);
        $result['status'] = 'error';
        $result['message'] = 'ERROR: Could not execute query to create exam.';
        echo json_encode($result);
    }
}

// Handle GET request to retrieve exam data
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Query database to retrieve exam data
    $sql = "SELECT * FROM exams";
    $result = mysqli_query($conn, $sql);

    if (!$result) {
        // Handle the database query error
        $error_message = "Database query failed: " . mysqli_error($conn);
        $response = [
            "status" => "error",
            "message" => $error_message
        ];
        http_response_code(500);
        echo json_encode($response);
    } else {
        // Check if any rows found
        if (mysqli_num_rows($result) > 0) {
            // Fetch exam data
            $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
            // Success response
            http_response_code(200);
            $response = [
                "status" => "success",
                "data" => $data
            ];
        } else {
            // No exam data found
            http_response_code(404);
            $response = [
                "status" => "success",
                "message" => "No exam data found",
                "data" => []
            ];
        }
        // Return JSON response
        echo json_encode($response);
    }
}

// Close the database connection
mysqli_close($conn);
?>
