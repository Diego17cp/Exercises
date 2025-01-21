<?php
require_once "Models/Student.php";

class StudentController{
    // variable to store the model
    private $userModel;

    public function __construct(){
        // instance the model
        $this->userModel = new Student();
    }

    public function index(){
        require "Views/students/index.php";
    }

    // method to show all the students
    // create a request to the model to get all the students and then show them in its view
    public function read(){
        //* fetch all the students 
        $students = $this->userModel->readAll();
        //* render the view
        require "Views/students/read.php";
    }

    // method to show the view to create a new student
    public function createForm(){
        //* render the view
        require "Views/students/create.php";
    }
    // method to create a new student with the data from the form
    public function create(){
        //* insert a new student
        $this->userModel->create($_POST);
        header('Location: ./index.php');
    }

    // method to show the view to update a student
    // fetch an student by id and show the form with the data
    public function updateForm($id){
        $student = $this->userModel->readById($id);
        require "Views/students/update.php";
    }
    // method to update the student with the data from the form
    public function update($id){
        $this->userModel->update($id, $_POST);
        header('Location: ./index.php');
    }

    // method to delete a student by id
    public function delete($id){
        $this->userModel->delete($id);
        header('Location: ./index.php');
    }
}

?>