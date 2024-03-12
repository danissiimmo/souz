<?php
// Устанавливаем заголовки CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: *");

// Получаем данные из POST-запроса
$name = $_POST['name'];

// Подключение к базе данных
$mysql = new mysqli("localhost", "root", "", "register-bg");

// Проверяем наличие пользователей с указанным именем в базе данных
$result = $mysql->query("SELECT * FROM `users` WHERE `name` LIKE '%$name%'");

// Проверяем, найдены ли пользователи
$users = array();
while ($row = $result->fetch_assoc()) {
    // Добавляем найденных пользователей в список
    $users[] = $row['name'];
}

if (!empty($users)) {
    // Пользователи найдены
    echo json_encode(['status' => 'success', 'users' => $users]);
} else {
    // Пользователи не найдены
    echo json_encode(['status' => 'error', 'message' => 'No users found']);
}

// Закрываем соединение с базой данных
$mysql->close();
?>