package Functions

fun main() {
    println("Exercise 1: Create a function to add two numbers")
    // TODO: Create a function named 'addNumbers' that takes two integers and returns their sum
    fun addNumbers(a: Int, b: Int): Int = a + b
    println("""
        Solution:
        My numbers: 10, 7
        Sum of my numbers: ${addNumbers(10, 7)}
    """.trimIndent())

    println("Exercise 2: Create a function that displays person information")
    // TODO: Create a unit function named 'displayInfo' that prints a person's name and age
    fun displayInfo(name: String, age: Int) = println("The name of user: $name and its age: $age")
    displayInfo("Diego", 19)

    println("Exercise 3: Create a function to check if a number is even using single expression")
    // TODO: Create a single-expression function named 'isEven' that checks if a number is even
    fun isEven(n: Int): Boolean = n % 2 == 0
    println("""
        Solution: 
        Is the number 17 even? ${isEven(17)}
    """.trimIndent())

    println("Exercise 4: Create a function with default parameters for rectangle area calculation")
    // TODO: Create a function 'calculateArea' with default values for width (10) and height (5)
    fun calcRectangleArea(w: Int = 10, h: Int = 5): Int = w * h
    println("""
        Solution:
        The sizes of my rectangle are: 17 and 3
        Default area: ${calcRectangleArea()}
        My rectangle area: ${calcRectangleArea(17, 3)}
    """.trimIndent())

    println("Exercise 5: Create and call a function using named arguments")
    // TODO: Create a function 'createStudent' with parameters: name, grade, subject, isPresent
    // Call it using named arguments in different order
    fun createStudent(name: String, grade: Int, subject: String, isPresent: Boolean) = println("""
        - New student created -
        Name: $name
        Grade: $grade
        Is present? $isPresent
        Subject: $subject
    """.trimIndent())
    createStudent(grade = 17, name = "Diego", isPresent = true, subject = "New year registration")

    println("Exercise 6: Create a function that finds maximum from variable arguments")
    // TODO: Create a function 'findMaximum' that accepts variable number of integers and returns the largest
    fun findMax(vararg numbers: Int): Int = numbers.max()
    println("""
        Solution:
        Lets's find the max number in the following list: 17, 3, 6, 20, 18, 10, 13, 32
        The max number is: ${findMax(17, 3, 6, 20, 18, 10, 13, 32)}
    """.trimIndent())

    println("Exercise 7: Create a calculator using lambda expressions")
    // TODO: Create a lambda expression 'calculator' that takes two doubles and an operation string (+, -, *, /)
    // and returns the result of the operation

    // CORRECTED

    // first version:
    /*fun calc(a: Double, b: Double, op: String): Double {
        when (op) {
            "+" -> return a + b
            "-" -> return a - b
            "*" -> return a * b
            "/" -> return a / b
        }
        return 0.0
    }
    val calculator = { a: Double, b: Double, op: String -> calc(a, b, op) } */

    // Corrected version
    val calculator: (Double, Double, String) -> Double? = { a, b, op ->
        when (op) {
            "+" -> a + b
            "-" -> a - b
            "*" -> a * b
            "/" -> if (b != 0.0) a / b else null
            else -> null
        }
    }
    println("""
        Solution:
        Calculate the product of 17 and 3:
        Result = ${calculator(17.0, 3.0, "*")}
    """.trimIndent())

    println("Exercise 8: Create a higher-order function to process a list of numbers")
    // TODO: Create a higher-order function 'processNumbers' that takes a list of integers
    // and a function parameter, then applies that function to each number
    fun processNumbers(numbers: List<Int>, fn: (n: Int) -> Int) = numbers.map { fn(it) }
    val squared = { n: Int -> n * n }
    println("""
        Solution:
        Let's process the following list of numbers to converts each element in its squared version:
        17, 5, 6, 4, 10
        ${processNumbers(listOf(17, 5, 6, 4, 10), squared)}
    """.trimIndent())

    println("Exercise 9: Create an extension function to check if a string is palindrome")
    // TODO: Create an extension function for String called 'isPalindrome' that checks if the string reads the same forwards and backwards
    fun String.isPalindrome(): Boolean = this.lowercase().reversed() == this.lowercase()
    println("""
        Solution:
        My name is a palindrome?
        ${"Eve".isPalindrome()}
    """.trimIndent())

    println("Exercise 10: Combine multiple function concepts in one exercise")
    // TODO: Create a function 'filterAndTransform' that takes a list of strings,
    // filters strings longer than a given length (default 3),
    // and transforms them using a provided lambda function
    fun filterAndTransform(strings: List<String>, length: Int = 3, fn: (s: String) -> String): List<String> {
        val filteredStrings = strings.filter { it.length > length }
        return filteredStrings.map { fn(it) }
    }
    val reverseAndUpper = { s: String -> s.reversed().uppercase() }
    println("""
        Solution:
        Let's filter a list of strings and transform each element:
        My original list: Diego, Eye, Bear, Eve, Level, Dad, Dialcadev
        Modified list: ${filterAndTransform(strings = listOf("Diego", "Eye", "Bear", "Eve", "Level", "Dad", "Dialcadev"), fn = reverseAndUpper).joinToString()}
    """.trimIndent())
}