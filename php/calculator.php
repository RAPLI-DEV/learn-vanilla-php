<?php
header("Access-Control-Allow-Origin: *");
ini_set('display_errors', 1);
error_reporting(E_ALL);

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (!empty(file_get_contents('php://input'))) {
            $math = file_get_contents('php://input');
            $formatted_math = str_replace(['÷', '×', '%'], ['/', '*', '/100'], $math);
            eval('$result = ' . $formatted_math . ';');
            http_response_code(200);
            echo $result;
        } else {
            echo 'NaN';
        }
    } else {
        echo '';
    }
?>