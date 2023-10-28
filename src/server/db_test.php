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
$username = 'root';
$password = '';
$db = 'campus-flow';

// Create connection to the database
$conn = mysqli_connect($host, $username, $password, $db);

// Check the database connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // Set the content type for JSON response
    header('Content-Type: application/json');

    // Get the request body content
    $json = file_get_contents('php://input');

    // Decode the JSON data
    $data = json_decode($json, true);

    // Log the data received (optional)
    error_log("Data received: " . print_r($data, true));

    // Prepare the response array
    $response = array();

    // Accessing the fields from the request data
    $first_name = mysqli_real_escape_string($conn, $data["first_name"]);
    $last_name = mysqli_real_escape_string($conn, $data["last_name"]);
    $email = mysqli_real_escape_string($conn, $data["email"]);
    $password = mysqli_real_escape_string($conn, $data["password"]);
    $user = mysqli_real_escape_string($conn, $data["user"]);

    // Insert query using prepared statement
    $stmt = mysqli_prepare($conn, "INSERT INTO signup (first_name, last_name, email, password, user) VALUES (?, ?, ?, ?, ?)");

    // Bind parameters
    mysqli_stmt_bind_param($stmt, "sssss", $first_name, $last_name, $email, $password, $user);

    if (mysqli_stmt_execute($stmt)) {
        // Success response
        http_response_code(201);
        $result['status'] = 'success';
        $result['message'] = 'Records inserted successfully.';
        echo json_encode($result);
    } else {
        // Error response
        http_response_code(422);
        $result['status'] = 'error';
        $result['message'] = 'ERROR: Could not execute query.';
        echo json_encode($result);
    }

    // Set the success message
    $response['message'] = 'Data received successfully';

    // Send the response back
    http_response_code(200);
    echo json_encode($response);
}

// Check if request is for retrieving data via GET request
if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    // Query database
    $sql = "SELECT * FROM signup";
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
