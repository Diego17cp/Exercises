fun main() {
    // Hello world in Kotlin
    println("Hello, World!")

    // ============================
    // Variables
    // ============================
    // Inferred type var
    var myString = "That's a string"
    myString = "The value has changed."
    println(myString)
    // Explicitly typed var
    var myString2: String = "This is also a string"

    // ============================
    // Primitives
    // ============================
    var myInt: Int = 42
    var myDouble: Double = 3.14
    var myFloat: Float = 2.718f
    var myBoolean: Boolean = true
    var myChar: Char = 'A'

    // ============================
    // Constants
    // ============================
    val myConst: String = "This is a constant"
    // myConst = "Trying to change a constant" // This will cause an error

    // ============================
    // Lists
    // ============================
    // Immutable list
    val myList = listOf("Apple", "Banana", "Cherry")
    println("First item in the list: ${myList[0]}")
    // Mutable list
    val myMutableList = mutableListOf("Typescript", "Kotlin", "Java")
    myMutableList.add("JavaScript")
    println("Last item in the mutable list: ${myMutableList[myMutableList.size - 1]}")

    // ============================
    // Sets & Maps
    // ============================
    // Set is a collection of unique items unordered
    val mySet = mutableSetOf("Red", "Green", "Blue")
    mySet.add("Yellow")
    println("Set contains: $mySet")

    // Map is a collection of key-value pairs
    val myMap = mutableMapOf<String, Int>("Age" to 19, "Height" to 176)
    myMap.put("Weight", 70)
    // or
    myMap["Weight"] = 70
    println("Map contains: $myMap")

    // ============================
    // Optionals
    // ============================
    // Nullable type
    var myOptional: String? = null
}
