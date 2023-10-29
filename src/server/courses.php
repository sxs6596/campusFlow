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

// // Database connection parameters
// $host = 'localhost';
// $username = 'root';
// $password = '';
// $db = 'campus-flow';

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

// Check if request is for retrieving data via GET request
if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    // Query database
    $sql = "SELECT * FROM courses";
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
            // Fetch data
            $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
            // Success response
            http_response_code(200);
            $response = [
                "status" => "success",
                "data" => $data
            ];
        } else {
            // No data found
            http_response_code(404);
            $response = [
                "status" => "success",
                "message" => "No data found",
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
