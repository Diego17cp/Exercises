package ControlStructures

fun main(){
    // ============================
    // Conditional Structures
    // ============================

    // If-else statement
    val number = 10
    if (number > 0) {
        println("The number is positive.")
    } else if (number < 0) {
        println("The number is negative.")
    } else {
        println("The number is zero.")
    }
    // More simple
    val otherNumber = -5
    if (otherNumber == 0) println("The number is zero.")
    else if (otherNumber > 0) println("The number is positive.")
    else println("The number is negative.")

    // Ternary-like expression (Kotlin does not have a ternary operator, but you can use if as an expression)
    val result = if (number > 0) "Positive" else "Non-positive"
    println("Result of the ternary-like expression: $result")
    // This is like: val result = number > 0 ? "Positive" : "Non-positive" in other languages

    // When expression (similar to switch in other languages)
    when (number) {
        1 -> println("Number is one")
        2 -> println("Number is two")
        in 3..10 -> println("Number is between three and ten")
        else -> println("Number is something else")
    }
    // When can also be used as an expression
    val numberDescription = when (number) {
        1 -> "one"
        2 -> "two"
        in 3..10 -> "between three and ten"
        else -> "something else"
    }
    println("Number description: $numberDescription")
}