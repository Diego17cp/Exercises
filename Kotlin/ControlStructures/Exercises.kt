package ControlStructures

fun main(){
    println("1. Check if a number is positive, negative, or zero using if-else")
    println("Enter a number:")
    val x = readln()
    val formattedX = x.toIntOrNull()
    if (formattedX != null) {
        if (formattedX == 0) println("The number is zero")
        else if(formattedX < 0) println("The number is negative")
        else println("The number is positive")
    } else {
        println("Enter a valid number")
    }

    println("2. Determine if a year is a leap year using conditional logic")
    // TODO: Create a year variable and check leap year conditions (divisible by 4, not by 100 unless also by 400)
    // corrected
    val myYear = 2006
    if (myYear % 4 == 0 && myYear % 100 != 0 || (myYear % 400 == 0)) println("Is leap.")
    else println("Is not leap.")


    println("3. Create a simple calculator using when expression for basic operations")
    // TODO: Create two numbers and an operator variable, use when to perform the operation
    println("Select your operation (+, -, *, /)")
    val operation = readln()
    println("Select your first number")
    val num1 = readln().toInt()
    println("Select your second number")
    val num2 = readln().toInt()
    when (operation) {
        "+" -> println("Your result is: ${num1 + num2}")
        "-" -> println("Your result is: ${num1 - num2}")
        "*" -> println("Your result is: ${num1 * num2}")
        "/" -> println("Your result is: ${num1 / num2}")
        else -> println("Select a correct option.")
    }

    println("4. Check if a person can vote based on age and citizenship using logical operators")
    // TODO: Create age and citizenship variables, use && operator to check both conditions
    // functional but limited for the citizenship
    println("Enter your age for check if you can vote.")
    val age = readln().toIntOrNull()
    println("Now enter your citizenship")
    val citizenship = readln()
    if (age != null) {
        if (age >= 18 && citizenship.lowercase() == "peruvian") println("You can vote.")
        else if (age>=18 && citizenship.lowercase() != "peruvian") println("Your citizenship is not able for vote here.")
        else println("You are not of here or your age is not valid.")
    } else println("Enter a valid number")

    println("5. Classify a student's grade using when expression with ranges")
    // TODO: Create a score variable (0-100) and classify as A(90-100), B(80-89), C(70-79), D(60-69), F(<60)
    println("Enter your grade for calc your classification (0-100)")
    val grade = readln().toIntOrNull()
    if (grade != null) {
        when(grade) {
            in 90..100 -> println("You have a A! Congrats.")
            in 80..89 -> println("You have a B.")
            in 70..79 -> println("You have a C.")
            in 60..69 -> println("You have a D.")
            in 0..59 -> println("You have a F.")
        }
    }

    println("6. Generate the first 10 Fibonacci numbers using a loop")
    // TODO: Use a loop to calculate and print the Fibonacci sequence
    val fibonacci = mutableListOf(0, 1)
    for (i in 2 until 10) {
        fibonacci.add(fibonacci[i-1] + fibonacci[i-2])
    }
    println("The first 10 Fibonacci numbers are: ${fibonacci.joinToString()}")

    println("7. Find all prime numbers between 1 and 30")
    // TODO: Use nested loops to check for prime numbers and collect them in a list
    val primeNumbers = mutableListOf<Int>()
    for (i in 1..30) {
        if (i == 2) primeNumbers.add(i)
        if (i % 2 != 0) {
            if (i % 1 == 0 && i % i == 0) primeNumbers.add(i)
        }
    }
    println("The prime numbers between 1 and 30 are: ${primeNumbers.joinToString()}")

    println("8. Create a multiplication table for numbers 1-5 using nested loops")
    // TODO: Use nested for loops with ranges to generate multiplication tables
    println("Multiplication table from 1 to 5")
    println("---------------------------------")
    for (i in 1..5){
        for (j in 1..12) {
            println("$i * $j = ${i*j}")
            if (j == 12) println("------------------------------")
        }
    }

    println("9. Count down from 10 to 1 using downTo and display each number")
    // TODO: Use the downTo range function in a for loop
    for (i in 10 downTo 1) {
        println(i)
    }
    println("10. Check if numbers exist in multiple ranges using the in operator")
    // TODO: Create a list of numbers and check which ones are in ranges 1..10, 20..30, 40..50
    val myList = listOf(17, 7, 50, 600, 40, 10, 25, 133, 3)
    println("""
        ---------------------------------
        Is in the ranges?
        --------------------------------
    """.trimIndent())
    for (i in myList) {
        println("""
            1..10 ? ${i in 1..10}
            20..30 ? ${i in 20..30}
            40..50 ? ${i in 40..50}
        """.trimIndent())
    }

    // ============================
    // ADVANCED LEVEL - Complex Operations
    // ============================

    println("11. Create a password validator using multiple logical operators")
    // TODO: Check if password has length >= 8, contains uppercase, lowercase, and digit

    val password = readln()
    var isValidCount = 0
    if (password.length >= 8) isValidCount++
    for (i in password) {
        if (i.isDigit() || i.lowercase().equals(i) || i.uppercase().equals(i)) isValidCount++
    }
    println("Your password is ${if (isValidCount > 3) "secure" else "insecure"}")

    println("12. Build a simple guessing game with hints using conditional logic")
    // TODO: Generate random number 1-100, use loops and conditionals to give "higher/lower" hints

    println("13. Process a list of coordinates using destructuring in a loop")
    // TODO: Create a list of Pair<Int, Int> and use destructuring to calculate distances from origin

    println("14. Analyze a list of numbers and return statistics using various operators")
    // TODO: Calculate min, max, average, count of positives/negatives, and sum using appropriate methods
    val myList2 = listOf(17, 2, 33, 66, 0, -1, 2, -100, 4, 120)
    var positives = 0
    var negatives = 0
    for (i in myList2) if (i>0) positives++ else negatives++
    println("""
        Solution:
        Statistics table:
        Min number in my list: ${myList2.min()}
        Max number in my list: ${myList2.max()}
        Average: ${myList2.average()}
        Count of positives: $positives
        Count of negatives: $negatives
        Sum of all my list: ${myList2.fold(0){ acc, i -> acc + i } }
    """.trimIndent())

    println("15. Create a menu system using when expression that handles multiple user options")
    // TODO: Create a menu with options 1-5, use when to handle each option with appropriate messages
    println("""
        ------------------------
        Welcome, check the menu
        ----------------------
        1. Ceviche - $15
        2. Lomo Saltado - $18
        3. Chaufa - $12
        4. Inca Kola 500ml - $4
        5. Pilsen Callao - $7
    """.trimIndent())
    val option = readLine()?.toIntOrNull()
    if (option != null && option in 1..5){
        when (option) {
            1 -> println("You selected the Ceviche, you must to pay $15")
            2 -> println("You selected the Lomo Saltado, you must to pay $18")
            3 -> println("You selected the Chaufa, you must to pay $12")
            4 -> println("You selected the Inca Kola, you must to pay $5")
            5 -> println("You selected the Pilsen Callao, you must to pay $7")
        }
        // Optimized version
        val myMap = mapOf(
            "Ceviche" to 15,
            "Lomo Saltado" to 18,
            "Chaufa" to 12,
            "Inca Kola 500ml" to 4,
            "Pilsen Callao" to 7
        )

    } else println("Select a valid option")
}