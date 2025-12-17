package Functions

fun main() {
    // Basic
    println("Basic 1: Use let to safely print the reversed version of a nullable string. If null, print nothing.")
    val myNullable: String? = "Hello, Kotlin"
    myNullable?.let {
        println("The length of my string: ${myNullable.length}")
    }

    println("Basic 2: Use run to calculate the area of a rectangle (width=5, height=10) and return it. Print the result.")
    data class Rectangle(val width: Int, val height: Int)
    val myRectangle = Rectangle(5, 10)
    val area = myRectangle.run {
        width * height
    }
    println("Area of the rectangle: $area")

    println("Basic 3: Create a data class Book(var title: String, var author: String, var pages: Int). Use apply to initialize a Book instance with values and print it.")
    data class Book(var title: String, var author: String, var pages: Int)
    val myBook = Book("", "", 0).apply {
        title = "Random book"
        author = "Dialcadev"
        pages = 10
    }
    println("Info of my new book ${myBook.title}, created by ${myBook.author} with ${myBook.pages} pages")

    // Intermediate
    println("Intermediate 4: Use also to log a list of integers before filtering even numbers, then print the filtered list.")
    val myListOfInt = listOf<Int>(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    val filtered = myListOfInt
        .also { println("My list of integers before filter: ${myListOfInt.joinToString(separator = ", ")}") }
        .filter { it % 2 == 0 }
    println("My filtered list of integers: ${filtered.joinToString(", ")}")

    println("Intermediate 5: Use with on a MutableMap to add three key-value pairs (country codes to country names) and print the map.")
    val myMap = mutableMapOf<String, String>()
    with(myMap){
        myMap.put("51", "Peru")
        myMap.put("1", "EEU")
        myMap.put("56", "Chile")
    }
    println("My map of countries: ${myMap.keys.joinToString(", ")}: ${myMap.values.joinToString(", ")}")

    println("Intermediate 6: Chain let and run: start with a nullable Double (e.g., 7.5), use let to add 2.5, then run to multiply by 2 and return the result. Print final value.")
    val myDouble: Double? = 17.3
    myDouble
        ?.also { println("My original double: $myDouble") }
    val modified = myDouble
        ?.let { it + 2.5 }
        ?.run { this * 2 }
    println("My modified double: $modified")

    // Advanced
    println("Advanced 7: Create a class Config with var host: String, var port: Int, var ssl: Boolean. Use apply to configure it, then use also to log the configuration, and finally use run to build a connection string 'protocol://host:port' and return it.")
    class Config (var host: String, var port: Int, var ssl: Boolean)
    val myConfig = Config("", 0, false)
        .apply {
            host = "localhost"
            port = 3000
            ssl = true
        }
        .also { println("My config is ssl: ${it.ssl}, host: ${it.host}, port: ${it.port}") }
    val connectionString = myConfig.run {
            val protocol = if (this.ssl) "https" else "http"
            "$protocol://${this.host}:${this.port}"
        }
    println("My connection string: $connectionString")

    println("Advanced 8: Use let inside a when expression: given a nullable score (Int?), use let to categorize it ('Fail' <50, 'Pass' 50..79, 'Excellent' >=80). If null, return 'No score'. Print the result.")
    // With help xd
    val myScore: Int? = 17
    val scoreCategory = when (myScore) {
        null -> "No score"
        else -> myScore.let {
            when {
                it < 50 -> "Fail"
                it in 50..79 -> "Pass"
                else -> "Excellent"
            }
        }
    }
    println("My score category is: $scoreCategory")

    println("Advanced 9: Implement a function processData(data: String?) that uses run to trim and uppercase the string, then uses also to log 'Processed: <result>', and finally returns the processed string or 'EMPTY' if null. Demonstrate with both null and non-null inputs.")
    fun processData(data: String?){
        data.run {
            val result = if (data != null) "Processed: ${this?.trim()?.uppercase()}" else "EMPTY"
            println(result)
        }
    }
    processData(null)
    processData("hello WorlD")

    println("Advanced 10: Create a class Logger with a mutableListOf<String> called logs. Use apply to add initial logs, with to add more logs inside a loop (1..3), and also to print 'Logs recorded'. Finally, use run to return the count of logs. Print the count.")
    class Logger{
        var logs = mutableListOf<String>()
    }
    val myLogger = Logger().apply {
        this.logs = mutableListOf<String>("Error1", "Error2")
    }
    with(myLogger) {
        for (i in 1..3) {
            logs.add("Log$i")
        }
    }.also {
        println("Logs recorded")
    }
    val count = myLogger.run { logs.size }
    println("Final count of items in my logger: $count")
}