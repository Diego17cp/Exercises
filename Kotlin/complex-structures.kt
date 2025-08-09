fun main () {
    // ============================
    // Functions
    // ============================
    println(getName("Diego"))

    // =============================
    // Classes
    // =============================
    val person = MyClass("Diego", 19)
    val personName = person.age
    println("Created a person: $personName, ${person.name}")
}

fun getName(name: String = "Random name") {
    println("The name is: $name")
}

class MyClass(val name: String, val age: Int)