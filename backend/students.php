<?php

//Header
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

try {

    //Connect To Database
    $pdo = new PDO("mysql:host=" . getenv('DB_HOST') . ";dbname=" . getenv('DB_NAME'), getenv('DB_USER'), getenv('DB_PASS'));

    //Query Students
    $stmt = $pdo->query("SELECT * FROM students");

    $students = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($students);

} catch(Exception $e) {
    echo json_encode(["status" => "error"]);
}

