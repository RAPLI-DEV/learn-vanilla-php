<?php
header("Access-Control-Allow-Origin: *");
ini_set('display_errors', 1);
error_reporting(E_ALL);

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        if(!empty(file_get_contents('php://input'))){
            $math = file_get_contents('php://input');

            eval('$result = ' . $math . ';');
            http_response_code(200);
            echo $result;
        }
        else{
            echo 'Nothing was sent.';
        };
    }
    else{
        echo 'How?';
    }
?>