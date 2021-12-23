<?php
    class Post{
        protected $pdo;

        public function __construct(\PDO $pdo){
            $this->pdo = $pdo;
        }

        #Update Query
        public function update_account($d){
            // print_r($d);

            #Query telling the machine to update a record
            $sql = "UPDATE accounts SET username = '$d->username', email = '$d->email', birthdate = '$d->birthdate' WHERE account_id = '$d->account_id'";

            
            $sql = $this->pdo->prepare($sql);

            #execute the query
			$sql->execute([]);

            #count affected rows
            $count = $sql->rowCount();

            if($count){
                return array("data"=>"Successfully Updated $count row(s)");
            }
            else{
                return array("error"=>"No Record updated");
            }
        }

        public function update_password($d){
            #Query telling the machine to update a record
            $sql = "UPDATE accounts SET account_password = '$d->account_password' WHERE account_id = '$d->account_id'";

            
            $sql = $this->pdo->prepare($sql);

            #execute the query
			$sql->execute([]);

            #count affected rows
            $count = $sql->rowCount();

            if($count){
                return array("data"=>"Successfully Updated $count row(s)");
            }
            else{
                return array("error"=>"No Record updated");
            }
        }

        #Delete Query
        public function delete_account($d){
            // print_r($d);

            #Query telling the machine to update a record
            $sql = "DELETE FROM  accounts WHERE account_id = '$d->account_id'";

            
            $sql = $this->pdo->prepare($sql);

            #execute the query
			$sql->execute();

            #count affected rows
            $count = $sql->rowCount();

            if($count){
                return array("data"=>"Successfully Deleted $count row(s)");
            }
            else{
                return array("error"=>"No Record deleted)");
            }
        }

        public function insert_todo($d){

            $sql = "INSERT INTO myworkouts (account_id, workout_title, workout_date, workout_reps) VALUES (?, ?, ?, ?)";
            $sql = $this->pdo->prepare($sql);

            $sql->execute([
                $d->account_id,
                $d->workout_title,
                $d->workout_date,
                $d->workout_reps
            ]);
            #count affected rows
            $count = $sql->rowCount();

            if($count){
                return array("data"=>"Successfully Insert $count record(s)");
            }
            else{
                return array("error"=>"No Record inserted");
            }
        }

    #Update Query
    public function update_todo($d){
        // print_r($d);

        #Query telling the machine to update a record
        $sql = "UPDATE myworkouts SET workout_title = '$d->workout_title', workout_date = '$d->workout_date', workout_reps = '$d->workout_reps'  WHERE workout_id = '$d->workout_id'";

        
        $sql = $this->pdo->prepare($sql);

        #execute the query
        $sql->execute([]);

        #count affected rows
        $count = $sql->rowCount();

        if($count){
            return array("data"=>"Successfully Updated $count row(s)");
        }
        else{
            return array("error"=>"No Record updated");
        }
    }

    #Delete Query
    public function delete_todo($d){
        // print_r($d);

        #Query telling the machine to update a record
        $sql = "DELETE FROM  myworkouts WHERE workout_id = '$d->workout_id'";

        
        $sql = $this->pdo->prepare($sql);

        #execute the query
        $sql->execute();

        #count affected rows
        $count = $sql->rowCount();

        if($count){
            return array("data"=>"Successfully Deleted $count row(s)");
        }
        else{
            return array("error"=>"No Record deleted)");
        }
    }
    }

?>