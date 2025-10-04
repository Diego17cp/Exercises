package Functions

// Actually, main is a function too
// It is the entry point of a Kotlin application
fun main() {
    // =====================================
    // Functions
    // =====================================

    // ================ CLASSIC FUNCTIONS ================
    // A classic function is declared using the "fun" keyword
    // Followed by the function name and parentheses, optional typing of the return value and the function body
    fun greeting(name: String): String {
        return "Hello, $name!"
    }
    println(greeting("Kotlin"))

    // ===============- UNIT FUNCTIONS ==============
    // Are similar to the void functions in other languages
    // Unit functions do not return any value, just perform an action
    // The Unit return type can be omitted, as it is the default return type
    fun printMessage(msg: String): Unit {
        println(msg)
    }
    printMessage("This is a message.")

    // =============== SINGLE-EXPRESSION FUNCTIONS ==============
    // Similar to arrow functions in JavaScript
    // The return keyword is omitted, and the function body is replaced with a single expression
    fun square(x: Int): Int = x * x
    // Classic fun equivalent:
    // fun square(x: Int): Int {
    //     return x * x
    // }
    // Javascript equivalent:
    // const square = (x) => x * x;
    println("The square of 5 is ${square(5)}")

    // =============== DEFAULT ARGUMENTS ==============
    // Functions can have default values for parameters, which are used if no argument is provided
    fun greet(name: String = "Unknown") = println("Hello, $name!")
    greet("Diego") // Outputs: Hello, Diego!
    greet()        // Outputs: Hello, Unknown!

    // =============== NAMED ARGUMENTS ==============
    // When calling a function, you can specify the names of the parameters to make the code more readable
    // This is especially useful when a function has multiple parameters and allows you to pass arguments in any order
    fun createUser(name: String, age: Int, isActive: Boolean) = println("User(name=$name, age=$age, isActive=$isActive)")
    createUser(age = 19, isActive = true, name = "Dialcadev")

    // =============== VARARG PARAMETERS ==============
    // Functions can accept a variable number of arguments using the vararg keyword
    // This allows you to pass zero or more arguments of the specified type
    fun sumAll(vararg numbers: Int): Int = numbers.sum()
    println("The sum is ${sumAll(1, 2, 3, 4, 5)}") // Outputs: The sum is 15

    // =============== LAMBDA EXPRESSIONS ==============
    // Lambdas are anonymous functions that can be treated as values
    // They are defined using curly braces and can be assigned to variables or passed as arguments to other functions
    val multiply: (Int, Int) -> Int = { a, b -> a * b }
    // Another way to declare the same lambda:
    // val multiply = { a: Int, b: Int -> a * b }
    println("The product is ${multiply(4, 5)}") // Outputs: The product is 20

    // =============== HIGHER-ORDER FUNCTIONS ==============
    // Functions that take other functions as parameters or return functions as results
    fun operate(x: Int, y: Int, fn: (Int, Int) -> Int): Int = fn(x, y)
    val result = operate(10, 20, multiply)
    println("The result of the operation is $result") // Outputs: The result of the operation is 200

    // =============== EXTEND FUNCTIONS ==============
    // Extension functions allow you to add new functions to existing classes without modifying their source code
    fun String.capitalize(): String = this.replaceFirstChar { if (it.isLowerCase()) it.titlecase() else it.toString() }
    println("hello".capitalize()) // Outputs: Hello

    // =============== ANONYMOUS FUNCTIONS ==============
    // Similar to lambdas, but with a more explicit syntax
    val numbers = listOf(1, 2, 3, 4, 5)
    val squaredNumbers = numbers.map { it * it } // Using a lambda
    println("Squared numbers: $squaredNumbers") // Outputs: Squared numbers: [1, 4, 9, 16, 25]
}