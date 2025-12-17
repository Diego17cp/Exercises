package Functions

fun main(){
    // =====================================
    // SCOPE FUNCTIONS
    // =====================================

    // =============== LET ==============
    // The let function is used to execute a block of code on an object
    // It is often used for null-checking and chaining operations
    // It is executed only if the object is not null and avoid (!!.) operator
    // Access the object inside the block using "it" keyword
    val name: String? = "Kotlin"
    name?.let {
        println("The length of the name is ${it.length}")
    }

    // =============== RUN ==============
    // The run function is used to execute a block of code on an object
    // It is similar to let, but it allows you to access the object using "this" keyword
    // It is often used for initializing objects or performing operations on them
    val result = name?.run {
        println("The name in uppercase is ${this.uppercase()}")
        this.length // The last expression is the return value
    }
    println("The length of the name is $result")

    // =============== APPLY ==============
    // The apply function is used to configure an object
    // It allows you to access the object using "this" keyword
    // It is often used for initializing objects and setting their properties
    class Person {
        var username: String = ""
        var age: Int = 0
    }
    // Access the object inside the block using "this" keyword implicitly
    val person = Person().apply {
        username = "Diego"
        age = 19
    }

    // =============== ALSO ==============
    // The also function is used to perform additional operations on an object
    // It allows you to access the object using "it" keyword
    // It is often used for logging or debugging purposes
    val numbers = mutableListOf(1, 2, 3)
    numbers.also {
        println("The list before adding a new number: $it")
    }.add(4)
    println("The list after adding a new number: $numbers")

    // =============== WITH ==============
    // The with function is used to execute a block of code on an object
    // It allows you to access the object using "this" keyword
    // It is often used for performing multiple operations on an object
    val sb = StringBuilder()
    with(sb) {
        append("Hello, ")
        append("Kotlin!")
    }

    // ** It vs This: **
    // It is used in lambda expressions where the object is passed as an argument
    // This is used in member functions and extension functions to refer to the current object
}