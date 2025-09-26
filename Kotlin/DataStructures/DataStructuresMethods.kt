package DataStructures

fun main(){
    // ============================
    // Lists
    // ============================
    val numbers = listOf(1, 2, 3, 4, 5)
    println("""
        List methods
        First: ${numbers.first()}
        Last: ${numbers.last()}
        Size: ${numbers.size}
        Contains 3: ${numbers.contains(3)}
        Is empty? ${numbers.isEmpty()}
        Get specific index (2): ${numbers.get(2)}
        Sublist (2 to 4): ${numbers.subList(1, 4)}
    """.trimIndent())
    println()

    println("Iterators")
    for (num in numbers) {
        println("Iterated number with a for $num ")
    }
    println()
    numbers.forEach { println("Iterated number with forEach $it") }
    println()

    println("Transformations")
    println("""
        Doubled: ${numbers.map { it * 2 }}
        Filters (Even numbers): ${numbers.filter { it % 2 == 0 }}
        First match: ${numbers.find { it > 3 }}
        Any element matches with the condition?: ${numbers.any { it > 4 }}
        All elements match with the condition?: ${numbers.all { it > 0 }}
        None elements match with the condition?: ${numbers.none { it < 0 }}
        Sum just for numbers list: ${numbers.sum()}
        Average just for numbers list: ${numbers.average()}
        Join to string: ${numbers.joinToString(separator = " - ", prefix = "[", postfix = "]")}
        Fold (from left to right): ${numbers.fold(0) { acc, i -> acc + i }}
        Reduce (from left to right): ${numbers.reduce { acc, i -> acc + i }}
        Find index by value: ${numbers.indexOf(3)}
        Find index by condition: ${numbers.indexOfFirst { it > 3 }}
        Contains all elements?: ${numbers.containsAll(listOf(1, 2, 3))}
        Contains an element?: ${numbers.contains(5)}
        Chunk into groups of 2 (ideal for pagination): ${numbers.chunked(2)}
    """.trimIndent())
    println()

    // ============================
    // Sets
    // ============================
    val mySet = mutableSetOf("Red", "Green", "Blue")
    val anotherColors = setOf("Yellow", "Black", "White")
    mySet.add("Yellow")
    mySet.add("Red") // Duplicate, will be ignored
    println("""
        Set methods
        Set contains: $mySet
        Size: ${mySet.size}
        Is empty? ${mySet.isEmpty()}
        Contains Yellow? ${mySet.contains("Yellow")}
        Contains all colors? ${mySet.containsAll(anotherColors)}
        Union with another set: ${mySet union anotherColors}
        Intersection with another set: ${mySet intersect anotherColors}
        Subtraction with another set: ${mySet subtract anotherColors}
    """.trimIndent())
    println()

    // ============================
    // Maps
    // ============================
    val myMap = mutableMapOf<String, Int>("Age" to 19, "Height" to 176)
    myMap["Weight"] = 70
    println("""
        Map methods
        Map contains: $myMap
        Size: ${myMap.size}
        Is empty? ${myMap.isEmpty()}
        Get value by key (Age): ${myMap["Age"]}
        Get value by key (Weight) with getValue(): ${myMap.getValue("Weight")}
        Get value by key (Non-existing key) with getOrDefault(): ${myMap.getOrDefault("NonExistingKey", -1)}
        Get value by key (Non-existing key) with getOrElse(): ${myMap.getOrElse("NonExistingKey") { -1 }}
        Contains key 'Height'? ${myMap.containsKey("Height")}
        Contains value 100? ${myMap.containsValue(100)}
        Keys: ${myMap.keys}
        Values: ${myMap.values}
        Remove key 'Age': ${myMap.remove("Age")}
        Entries: ${myMap.entries}
        Map keys to values transformation: ${myMap.mapKeys { it.key.uppercase() }}
        Map values transformation: ${myMap.mapValues { it.value * 2 }}
        Filter by keys: ${myMap.filterKeys { it.startsWith("H") }}
        Filter by values: ${myMap.filterValues { it > 100 }}
    """.trimIndent())
}