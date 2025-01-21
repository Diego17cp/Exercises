<?php 
require_once 'DB/database.php';
class Student {
    // variable to store the connection
    private $conn;
    // variable to store the table name
    private $table = "alumnos";

    // constructor to initialize the connection
    public function __construct(){
        // instance an Database object
        $db = new Database();
        // store the connection method in the variable
        $this->conn = $db->connect();
    }

    // method to register a new student
    // recieve an array with the data to insert as parameter
    public function create($data){
        // query to insert the data
        // the values are binded to avoid SQL injection
        $sql = "INSERT INTO $this->table (id, nombres, apellidos, edad, correo, grado)
                VALUES (:id, :nombres, :apellidos, :edad, :correo, :grado)";
        // prepare the query
        $stmt = $this->conn->prepare($sql);
        // bind the values
        $stmt->bindParam(':id', $data['id']);
        $stmt->bindParam(':nombres', $data['nombres']);
        $stmt->bindParam(':apellidos', $data['apellidos']);
        $stmt->bindParam(':edad', $data['edad']);
        $stmt->bindParam(':correo', $data['correo']);
        $stmt->bindParam(':grado', $data['grado']);
        // return the exectution of the query
        return $stmt->execute();
    }
    public function readAll(){
        $sql = "SELECT * FROM $this->table";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        // return the result of the query as an associative array
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function readById($id){
        $sql = "SELECT * FROM $this->table WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function update($id, $data){
        $sql = "UPDATE $this->table SET nombres = :nombres, apellidos = :apellidos, edad = :edad, correo = :correo, grado = :grado WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(":id", $id);
        $stmt->bindParam(":nombres", $data["nombres"]);
        $stmt->bindParam(":apellidos", $data["apellidos"]);
        $stmt->bindParam(":edad", $data["edad"]);
        $stmt->bindParam(":correo", $data["correo"]);
        $stmt->bindParam(":grado", $data["grado"]);
        return $stmt->execute();
    }

    public function delete($id){
        $sql = "DELETE FROM $this->table WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(":id", $id);
        return $stmt->execute();
    }

}

?>