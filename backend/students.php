<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

try {

    $pdo = new PDO("mysql:host=mysql;dbname=college", "___", "____");

    $stmt = $pdo->query("SELECT * FROM students");

    $students = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($students);

} catch(Exception $e) {
    echo json_encode(["status" => "error"]);
}

