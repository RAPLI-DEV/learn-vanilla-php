<?php
header("Access-Control-Allow-Origin: *");
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!empty(file_get_contents('php://input'))) {
        $math = file_get_contents('php://input');
        $operators = ['+', '-', '/', '÷', '%','(', ')'];

        function math_eval($math, $operators)
        {
            $math = str_replace(['÷', '×', '%', '^'], ['/', '*', '/100', '**'], $math);

            //calculate factorial
            while (strpos($math, '!') !== false) {
                $factorial_pos = strpos($math, '!');
                $num = "";
                for ($i = 1; $i < strlen($math); $i++) {
                    if (in_array($math[$factorial_pos - $i], $operators)) {
                        break;
                    } else if ($factorial_pos - $i <= -1) {
                        break;
                    } else {
                        $num = $math[$factorial_pos - $i] . $num;
                    }
                }

                $factorial = 1;
                for ($i = 1; $i <= $num; $i++) {

                    $factorial *= $i;
                }

                $math = str_replace($num . '!', $factorial, $math);
            }

            eval('$result = ' . $math . ';');
            http_response_code(200);
            echo $result;
        }

        math_eval($math, $operators);
    }
} else {
    echo '';
}
