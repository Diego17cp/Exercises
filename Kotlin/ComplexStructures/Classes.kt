package ComplexStructures

// ============================
// Classes
// ============================
// The constructor can be defined in the class header or with the constructor keyword
// Properties can be declared directly in the primary constructor
class Person(val name: String, private var age: Int) {
    // constructor(name: String) : this(name, 0) Secondary constructor
    // init block is executed when an instance is created
    init {
        println("Person created: $name, $age years old")
    }
    fun celebrateBirthday() {
        age++
        println("Happy birthday, $name! You are now $age years old.")
    }

}
class Rectangle(var width: Double, var height: Double) {
    // Calculated property with custom getter
    val area: Double get() = width * height
}
// For can override methods and properties, use open keyword
open class Animal(private val name: String){
    open fun makeSound() {
        println("$name makes a sound.")
    }
}
class Dog(name: String): Animal(name) {
    override fun makeSound() {
        println("Woof! Woof!")
    }
}

// ============================
// Data Classes
// ============================
// Data classes are used to hold data and automatically provide methods like equals(), hashCode(), and toString()
// Are used like interfaces in other languages to define the contract of an object
data class User(val username: String, val email: String)

// ============================
// Object
// ============================
// The object keyword is used to declare a singleton, which is a class that can have only one instance
object Database {
    val name = "MyDatabase"
    val motor = "PostgreSQL"
    fun connect() {
        println("Connecting to $name at $motor...")
    }
}

// ============================
// Companion Object
// ============================
// A companion object is an object that is tied to a class, allowing you to define members that belong to the class itself rather than to instances of the class
// Like static members in other languages
class MathUtil {
    companion object {
        fun square(x: Int): Int = x * x
    }
}

// ============================
// Sealed Classes
// ============================
// Sealed classes are used to represent restricted class hierarchies, where a value can have one of the types from a limited set
// Useful for representing states or results
// Like union types in TypeScript
sealed class Result {
    data class Success(val data: String): Result()
    data class Error(val message: String): Result()
}

// ============================
// Inner and Nested Classes
// ============================
// Nested classes do not have access to the outer class instance
// Inner classes have access to the outer class instance
class Outer {
    private val outerProperty = "Outer Property"
    class Nested {
        fun show() {
            println("This is a nested class.")
        }
    }
    inner class Inner {
        fun show() {
            println("Accessing: $outerProperty from Inner class.")
        }
    }
}