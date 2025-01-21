<?php 
require_once "Controllers/StudentController.php";
//* instance the controller
$controller = new StudentController();

//* if the request is a POST request, then call the method to create, update or delete a student
if($_SERVER["REQUEST_METHOD"] == "POST"){
    if($_GET["action"] == "create"){
        $controller->create();
    } elseif ($_GET["action"] == "update"){
        $controller->update($_GET["id"]);
    } 
} 
//* if the request is a GET request, then call the method to show the view to create, update or delete a student
else{
    if(!isset($_GET["action"])){
        $controller->index();
    } elseif ($_GET["action"] == "createForm"){
        $controller->createForm();
    } elseif ($_GET["action"] == "updateForm"){
        $controller->updateForm($_GET["id"]);
    } elseif ($_GET["action"] == "read"){
        $controller->read();
    } elseif ($_GET["action"] == "delete"){
        $controller->delete($_GET["id"]);
    }
}
?>