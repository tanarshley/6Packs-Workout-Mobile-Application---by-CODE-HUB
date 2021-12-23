<?php
    class Auth{
        protected $pdo;

        public function __construct(\PDO $pdo){
            $this->pdo = $pdo;
        }

        public function login($d){
            $userName = $d->username;
            $userPass = $d->password;

            $sql = "SELECT * FROM accounts WHERE username ='$userName' AND account_password ='$userPass' LIMIT 1";

            if($res = $this->pdo->query($sql)->fetchAll()) {
    
                return array("data"=>array("account_id"=>$res[0]['account_id'], "fullname"=>$res[0]['fullname'], "username"=>$res[0]['username'], "email"=>$res[0]['email'], "birthdate"=>$res[0]['birthdate'], "account_password"=>$res[0]['account_password']));
                  
                } else {

                return array("error"=>"Incorrect username or password");
            }
        }

        public function registration($d){   
            // print_r($d);
            $sql = "SELECT * FROM accounts WHERE username ='$d->username' OR email ='$d->email' LIMIT 1";

            if ($result = $this->pdo->query($sql)->fetchall()){
                return array("error"=>"Failed Registered. Username or Email is already used.");

            }else {

                $sql = "INSERT INTO accounts (fullname, username, email, birthdate, account_password) VALUES (?, ?, ?, ?, ?)";
                $sql = $this->pdo->prepare($sql);

                $sql->execute([
                    $d->fullname,
                    $d->username,
                    $d->email,
                    $d->birthdate,
                    $d->account_password
                ]);
                return array("data"=>"Successfully Registered");
            }
        }
    }
?>