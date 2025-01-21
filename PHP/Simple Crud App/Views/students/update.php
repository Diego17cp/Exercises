<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- In the action pass the id by GET method, 'cause the controller and model needs it as parameter -->
    <form action="?action=update&id=<?= htmlspecialchars($student["id"]) ?>" method="post">
        <h1>Update student</h1>
        <?php echo $student["id"] ?>
        <label for="id">ID:</label>
        <input type="text" name="id" value="<?= $student["id"] ?>" readonly>
        <br>
        <label for="nombres">Name:</label>
        <input type="text" name="nombres" value="<?= $student["nombres"] ?>">
        <br>
        <label for="apellidos">Last Name:</label>
        <input type="text" name="apellidos" value="<?= $student["apellidos"] ?>">
        <br>
        <label for="edad">Age:</label>
        <input type="text" name="edad" value="<?= $student["edad"] ?>">
        <br>    
        <label for="correo">Email:</label>
        <input type="text" name="correo" value="<?= $student["correo"] ?>">
        <br>
        <label for="grado">Grade:</label>
        <input type="text" name="grado" value="<?= $student["grado"] ?>">
        <br>
        <input type="submit" value="Update">
    </form>
</body>
</html>