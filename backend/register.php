<?php

//Control Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

//Body Fields (Must Be Included)
$data = json_decode(file_get_contents('php://input'), true) ?? [];

$firstName = trim($data['firstName'] ?? '');
$lastName  = trim($data['lastName']  ?? '');
$email     = trim($data['email']     ?? '');
$program   = trim($data['program']   ?? '');

if (!($firstName && $lastName && $email && $program)){
    echo json_encode(["status" => "error"]);
    exit;
}

//TODO: Add Email @ Symbol Check

//Execute Database Query
try{
    $pdo = new PDO("mysql:host=" . getenv('DB_HOST') . ";dbname=" . getenv('DB_NAME'), getenv('DB_USER'), getenv('DB_PASS'));

    $stmt = $pdo->prepare("
        INSERT INTO students(firstName, lastName, email, program)
        VALUES (?, ?, ?, ?)
    ");
    $stmt->execute([$firstName, $lastName, $email, $program]);

    echo json_encode(["status" => "success"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error"]);
}

