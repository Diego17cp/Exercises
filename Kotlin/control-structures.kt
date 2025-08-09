fun main() {
    // ============================
    // Control Structures
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

    // Ternary-like expression (Kotlin does not have a ternary operator, but you can use if as an expression)
    val result = if (number > 0) "Positive" else "Non-positive"
    println("Result of the ternary-like expression: $result")

    // When expression (similar to switch in other languages)
    when (number) {
        1 -> println("Number is one")
        2 -> println("Number is two")
        in 3..10 -> println("Number is between three and ten")
        else -> println("Number is something else")
    }

    val myList = listOf("Kotlin", "Java", "Python")
    // For loop
    for (i in 1..5) {
        println("Current number: $i")
    }
    // For loop with a list
    for (item in myList) {
        println("Item in the list: $item")
    }

    // While loop
    var count = 5
    while (count > 0) {
        println("Count is: $count")
        count--
    }
}