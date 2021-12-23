<?php
require_once("./config/database.php");
require_once("./models/auth.php");
require_once("./models/post.php");
require_once("./models/get.php");

$db = new Connection();
$pdo = $db->connect();

$auth = new Auth($pdo);
$post = new Post($pdo);
$get = new Get($pdo);

    $req = [];
    if (isset($_REQUEST['request'])){
        $req = explode('/', rtrim($_REQUEST['request'], '/'));
    }else {
        $req = array("errorcatcher");
    }

    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            switch ($req[0]){
                case 'register':
                    $d = json_decode(file_get_contents("php://input")); 
					echo json_encode($auth->registration($d));
                break;

                case 'login':
                    $d = json_decode(file_get_contents("php://input")); 
					echo json_encode($auth->login($d));
                break;

                case 'updateaccount':
                    $d = json_decode(file_get_contents("php://input")); 
					echo json_encode($post->update_account($d));
                break;

                case 'updatepassword':
                    $d = json_decode(file_get_contents("php://input")); 
					echo json_encode($post->update_password($d));
                break;

                case 'deactivate':
                    $d = json_decode(file_get_contents("php://input")); 
					echo json_encode($post->delete_account($d));
                break;

                case 'inserttodo':
                    $d = json_decode(file_get_contents("php://input")); 
					echo json_encode($post->insert_todo($d));
                break;

                case 'updatetodo':
                    $d = json_decode(file_get_contents("php://input")); 
					echo json_encode($post->update_todo($d));
                break;

                case 'deletetodo':
                    $d = json_decode(file_get_contents("php://input")); 
					echo json_encode($post->delete_todo($d));
                break;

                #get class
                case 'getall':
                    $d = json_decode(file_get_contents("php://input")); 
					echo json_encode($get->get_all($d));
                break;
            
            default: 
                echo "no endpoint";
            break;
        }
        break;

        default: 
            echo "prohibited";
        break;
}
?>