<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<?php 
    function studentId(){
        $prefix = "ST";
        $date = date("ymd");
        $random = rand(0, 9);
        $id = $prefix . $date . $random;
        return substr($id, 0, 8);
    }
?>
<body>
    <form action="?action=create" method="post">
        <label for="nombres">Name</label>
        <input type="text" name="nombres" id="nombres">
        <label for="apellidos">Last Name</label>
        <input type="text" name="apellidos" id="apellidos">
        <label for="edad">Age</label>
        <input type="number" name="edad" id="edad">
        <label for="correo">Email</label>
        <input type="email" name="correo" id="correo">
        <label for="grado">Grade:</label>
        <input type="text" name="grado" id="grado">
        <input type="hidden" name="id" value="<?php echo studentId(); ?>">
        <input type="submit" value="Create">
    </form>
</body>
</html>