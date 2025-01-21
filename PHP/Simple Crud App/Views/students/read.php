<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Students list</h1>
    <ul>
    <?php foreach ($students as $student): ?>
        <li>
            Code: <?= $student["id"] ?>, 
            Name: <?= $student["nombres"] ?>,
            Last Name: <?= $student["apellidos"] ?>,
            Age: <?= $student["edad"] ?>,
            Email: <?= $student["correo"] ?>,
            Grade: <?= $student["grado"] ?>
            <div>
                <a href="?action=updateForm&id=<?= htmlspecialchars($student["id"]) ?>">Update</a>
                <a href="?action=delete&id=<?= $student["id"] ?>">Delete</a>
            </div>
        </li> <br>
    <?php endforeach;?>
    </ul>
</body>
</html>