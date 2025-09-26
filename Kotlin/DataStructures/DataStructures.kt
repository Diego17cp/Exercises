package DataStructures

fun main() {
    // ======================
    // Arrays<T>
    // ======================
    // Basic structure with fixed size, can hold duplicates and its elements can be mutable
    val myArr: Array<String> = arrayOf("Kotlin", "Java", "Swift")
    println("Last item in the array: ${myArr[2]}")
    myArr[2] = "JavaScript"
    println("Last item in the array modified: ${myArr[2]}")
    println("Mobile languages are: $myArr")
    println("Mobile languages are: ${myArr.joinToString()}")
    println()

    // ============================
    // Lists
    // ============================
    // Is the modern version of arrays with more functionality and flexibility, can be immutable or mutable

    // Immutable list
    // Fixed size, cannot be modified (add/remove elements), can hold duplicates and its elements cannot be mutable
    val myImmList: List<String> = listOf("Apple", "Banana", "Cherry")
    println("First item in the immutable list: ${myImmList[0]}")
    // myImmList[0] = "Orange" // Error: Val cannot be reassigned
    println("My favorite fruits are: ${myImmList.joinToString()}")
    println()

    // Mutable list
    // Dynamic size, can be modified (add/remove elements), can hold duplicates and its elements can be mutable
    val myFavoriteTechnologies = mutableListOf("Kotlin", "Javascript", "TypeScript")
    myFavoriteTechnologies.add("TailwindCSS")
    myFavoriteTechnologies[1] = "React"
    println("My favorite technologies are: ${myFavoriteTechnologies.joinToString()}")
    println()

    // ============================
    // Sets
    // ============================
    // Collection of unique items, unordered, can be immutable or mutable
    // Immutable set
    val uniqueIds = setOf("id103", 1, 2, "id17", 4)
    println("Unique IDs are: ${uniqueIds.joinToString()}")
    // uniqueIds.add("id99") // Error: Unresolved reference: add
    val shopCar = mutableSetOf("Bread", "Milk", "Eggs")
    shopCar.add("Butter")
    shopCar.add("Bread") // Duplicate, will be ignored
    println("Shopping car contains: ${shopCar.joinToString()}")
    println()

    // ============================
    // Maps
    // ============================
    // Collection of key-value pairs, can be immutable or mutable
    // Immutable map
    val defaultUser = mapOf(
        "username" to "admin123",
        "password" to "1234",
        "isActive" to true
    )
    println("Default user: $defaultUser")
    // defaultUser["username"] = "newAdmin" // Error
    println("Username: ${defaultUser["username"]}")

    // Mutable map
    val newUser = mutableMapOf<String, Any>()
    newUser["username"] = "Dialca.dev"
    newUser["password"] = "abcd"
    newUser["isActive"] = false
    newUser.put("role", "user")
    println("New user: $newUser")
    newUser["isActive"] = true // Update value
    println("New user updated: $newUser")
    println()
}