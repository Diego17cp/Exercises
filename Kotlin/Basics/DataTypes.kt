package Basics

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
    // Specials
    // ============================
    // Nullable type

    // If is null return null, otherwise return the typed value
    var myOptional: String? = null

    // safe call, in runtime it will check if the value is null, if it is, it won't call the method and will return null, otherwise it will call the method and return the value
    val len: Int? = myOptional?.length

    // force unwrapping, if the value is null, it will throw a NullPointerException
    // Not recommended to use unless you are sure the value is not null
    // In this case it will throw an exception because myOptional is null
    //    val forced: Int = myOptional!!.length

    // Elvis operator, if the value is null, it will return the value after the ?: operator
    val lengthOrZero: Int = myOptional?.length ?: 0

    println("""
        Integer: $myInt
        Double: $myDouble
        Float: $myFloat
        Boolean: $myBoolean
        Char: $myChar
        Constant: $myConst
        Optional length: $len
        Forced length (will throw an exception):  ${ /*forced*/ "N/A" }
        Length or zero: $lengthOrZero
    """.trimIndent())
}
