<?php
// class for the connection
class Database {
    // variables for params in the PDO connection
    private $host = 'localhost';
    private $db = 'simplecrudapp';
    private $user = 'root';
    private $pass = '';
    // Create variable to store the connection
    public $conn;

    // function to connect to the database
    public function connect() {
        // initialize the connection to null 
        $this->conn = null;
        // try connect with the db with the params above and catch any error
        try{
            $this->conn = new PDO("mysql:host=$this->host;dbname=$this->db", $this->user, $this->pass);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // echo "Connected successfully";
        }catch(PDOException $e){
            echo "Error: " . $e->getMessage() ;
        }
        return $this->conn;
    }
}

?>