package DataStructures

fun main() {
    println("=== DATA STRUCTURES EXERCISES ===")
    println()

    println("1. Create an immutable list with 5 fruit names and print the first and last element")
    // TODO: Create the list and access the elements
    val fruits = listOf("Banana", "Apple", "Pineapple", "Orange", "Wumpa")
    println("""
        Solution:
        First element on the fruits array: ${fruits.first()}
        Last element on the fruits array: ${fruits.last()}
    """.trimIndent())
    println()

    println("2. Create a mutable set with 3 colors, add 2 more colors and print the final size")
    // TODO: Create the set, add elements and show the size
    val colors = mutableSetOf("Green", "Blue", "Black")
    println("My original colors array: ${colors.joinToString(" - ")}")
    colors.add("Yellow")
    colors.add("Red")
    println("""
        Solution:
        My new colors array: ${colors.joinToString(" - ")}
        The final size of my new array it's: ${colors.size}
    """.trimIndent())
    println()

    println("3. Create a map that relates country names with their capitals (minimum 4 pairs)")
    // TODO: Create the map and print all its content
    val countries = mapOf(
        "Peru" to "Lima",
        "France" to "Paris",
        "Spain" to "Madrid",
        "Mexico" to "CDMX"
    )
    for ((k, v) in countries) {
        println("Location: $v, $k")
    }
    println()

    println("4. Given a list of numbers from 1 to 10, filter only even numbers and print them")
    // TODO: Create the list, filter and show result
    val numbers = (1..10).toList()
    println("""
        Solutions:
        Even numbers at my arr: ${numbers.filter { it % 2 == 0 }}
    """.trimIndent())
    println()

    println("5. Create a list of names, convert them all to uppercase using map and print the result")
    // TODO: Create list of names, transform and show
    val names = listOf("Diego", "Dialcadev", "David", "Pedro", "Jon")
    println("""
        Solution:
        Names in upper: ${names.map { it.uppercase() }}
    """.trimIndent())
    println()

    println("6. Check if a list of ages contains any person older than 65 years")
    // TODO: Create list of ages and verify the condition
    val ages = listOf(19, 16, 18, 15, 40, 26)
    println("""
        Solution:
        Any person in the list it's equal or older than 65 years old?: ${ages.any { it > 65 }}
    """.trimIndent())
    println()

    println("7. Create a map of students and their grades, filter only those with grade >= 70")
    // TODO: Create map, filter and show approved students
    val course = mapOf(
        "Diego" to 80,
        "Jeremy" to 14,
        "Juan" to 11
    )
    println("""
        Solution:
        Good Qualified: ${course.filterValues { it >= 70 }.keys}
    """.trimIndent())

    println()

    // ========================================
    // ADVANCED LEVEL - Complex operations
    // ========================================

    println("8. Calculate the average of a price list and determine how many are above the average")
    // TODO: Create price list, calculate average and count elements
    val priceList = listOf(15, 70, 59, 5, 10, 40, 32, 53, 21)
    val avg = priceList.average()
    val aboveAvg = mutableListOf<Int>()
    for (n in priceList) if (n > avg) aboveAvg.add(n)
    println("""
        Solution:
        The average of my price list it's: ${avg.toInt()}
        The numbers greater than the average: ${aboveAvg.size}
        Another version (improved): ${priceList.count { it > avg } }
    """.trimIndent())
    println()

    println("9. Join two sets of numbers, find the intersection and show the difference")
    // TODO: Create two sets, perform set operations
    val mySet = setOf(1, 2, 3, 4)
    val mySet2 = setOf(1, 17, 20, 3)
    println("""
        Solution:
        Join of my two sets: ${mySet union mySet2}
        Intersection of my two sets: ${mySet intersect mySet2}
        Difference between my two sets: ${mySet subtract mySet2}
    """.trimIndent())
    println()

    println("10. Create an inventory map (product -> quantity), update some quantities and show products with low stock (< 5)")
    // TODO: Create map, update values and filter by condition
    val myInventory = mutableMapOf(
        "Inca Kola 3L" to 10,
        "Doritos" to 50,
        "Pringles" to 5,
        "Coca cola" to 2,
        "Fanta" to 3
    )
    println("Buying 7 Inca Kola sodas...")
    myInventory["Inca Kola 3L"] = 3
    println("""
        Solution:
        Products with low stock: ${myInventory.filterValues { it < 5 }.keys.toList().joinToString()}
    """.trimIndent())
    println()

    println("11. Given a list of words, group them by their first letter and show the result")
    // TODO: Create word list and group using collection methods
    val words = listOf("Programming", "Development", "Android", "Kotlin")
    println("""
        Solution:
        Ordered words: ${words.groupBy { it.first() }}
    """.trimIndent())
    println()

    println("12. Calculate the total sum of all values in a monthly expenses map using fold or reduce")
    // TODO: Create expenses map and calculate total sum
    val myCalendarExpenses = mapOf(
        1 to 17,
        2 to 33,
        3 to 1,
        4 to 3,
        5 to 100,
        6 to 1,
        7 to 40,
        8 to 30,
        9 to 6,
        10 to 111,
        11 to 17,
        12 to 33,
        13 to 1,
        14 to 3,
        15 to 100,
        16 to 1,
        17 to 40,
        18 to 30,
        19 to 6,
        20 to 111,
        21 to 17,
        22 to 33,
        23 to 1,
        24 to 3,
        25 to 100,
        26 to 1,
        27 to 40,
        28 to 30,
        29 to 6,
        30 to 111,
    )
    println("""
        Solution:
        Sum of my monthly expenses: ${myCalendarExpenses.values.fold(0) { acc, i -> acc + i } }
    """.trimIndent())
}