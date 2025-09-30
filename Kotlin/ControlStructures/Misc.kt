package ControlStructures

fun main(){
    // ===========================
    // Ranges
    // ===========================

    // * In keyword:
    // useful for iterate over a list in a for loop
    // check if a value is within a range
    // check if a value is within a list

    // Check if a number is within a range
    val number = 7
    if (number in 1..10) println("The number is between 1 and 10")
    // Check if a value is whitin a list
    val fruits = listOf("Apple", "Banana", "Cherry")
    val fruitToCheck = "Banana"
    if (fruitToCheck in fruits) println("$fruitToCheck is in the list")

    // Range operator:
    // Create a range of numbers
    val range = 1..5
    println("Range from 1 to 5: ${range.joinToString()}")
    // Iterate over a range
    for (i in range) { println(i) }

    // Other range functions
    // Until: creates a range that excludes the end value
    val untilRange = 1 until 5 // 1, 2, 3, 4
    println("Range from 1 until 5: ${untilRange.joinToString()}")
    // DownTo: creates a range that goes from a higher to a lower value
    val downToRange = 5 downTo 1 // 5, 4, 3, 2, 1
    println("Range from 5 down to 1: ${downToRange.joinToString()}")
    // Step: creates a range with a specific step value
    val stepRange = 1..10 step 2 // 1, 3, 5, 7, 9
    println("Range from 1 to 10 with step 2: ${stepRange.joinToString()}")

    // ===========================
    // Destructuring Declarations
    // ===========================
    // Allows to unpack a data structure into multiple variables

    // Data class
    data class User(val username: String, val password: String, val isActive: Boolean)
    val user = User("admin123", "1234", true)
    val (username, password, isActive) = user
    println("Username: $username, Password: $password, Active: $isActive")

    // Lists
    val colors = listOf("Red", "Green", "Blue")
    val (firstColor, secondColor, thirdColor) = colors
    println("First: $firstColor, Second: $secondColor, Third: $thirdColor")

    // Maps
    val userMap = mapOf("username" to "admin123", "password" to "1234", "isActive" to true)
    for ((key, value) in userMap) {
        println("$key: $value")
    }

    // ===========================
    // Spread Operator
    // ===========================
    // Allows to pass an array or a collection as vararg parameters
    fun printNumbers(vararg numbers: Int) {
        for (number in numbers) {
            println(number)
        }
    }
    val numArray = intArrayOf(1, 2, 3, 4, 5)
    printNumbers(*numArray) // Using the spread operator to pass the array
}