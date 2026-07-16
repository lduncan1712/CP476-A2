<?php

//Control Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

//Body Fields (Must Be Included)
$firstName = trim($_POST['firstName'] ?? '');
$lastName  = trim($_POST['lastName']  ?? '');
$email     = trim($_POST['email']     ?? '');
$program   = trim($_POST['program']   ?? '');

if (!($firstName && $lastName && $email && $program)){
    echo json_encode(["status" => "error"]);
    exit;
}

//Execute Database Query
try{
    $pdo = new PDO("mysql:host=____;dbname=college;", "____", "____");

    $stmt = $pdo->prepare("
        INSERT INTO students(firstName, lastName, email, program)
        VALUES (?, ?, ?, ?)
    ");
    $stmt->execute([$firstName, $lastName, $email, $program]);

    echo json_encode(["status" => "success"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error"]);
}

