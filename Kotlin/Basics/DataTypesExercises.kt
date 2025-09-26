package Basics

import kotlin.math.*

fun main() {
    // Exercise 1
    println("Exercise 1: Print a greeting and its length.")
    val myGreeting = "Hello, I'm Dialcadev:)"
    println("Length of my greeting: ${myGreeting.length}")
    println()

    // Exercise 2
    println("Exercise 2: Create a string with a trailing space, then print the original, trimmed, lowercase, uppercase, and the first 5 characters.")
    val myStr: String = "This is a random string:D "
    println("Original: '$myStr'")
    println("Trimmed: '${myStr.trim()}'")
    println("Lowercase: '${myStr.trim().lowercase()}'")
    println("Uppercase: '${myStr.trim().uppercase()}'")
    println("First 5 chars: '${myStr.trim().take(5)}'")
    println()

    // Exercise 3
    println("Exercise 3: Replace the word \"Kotlin\" with \"Android\" in a hardcoded string and print the result.")
    val replacedStr = "Kotlin is great!"
    println("""
        My original string: $replacedStr
        My replaced string: ${replacedStr.replace("Kotlin", "Android")}
    """.trimIndent())
    println()

    // Exercise 4
    println("Exercise 4: Given an Int value, print its Double, String and Char conversions.")
    // TODO: set an Int (suggest 0-127 for visible toChar)
    val myFavNum = 17
    println("""
        That's my favorite number: $myFavNum
        My fav number as a double: ${myFavNum.toDouble()}
        My fav number as a String: '${myFavNum.toString()}'
        My fav number as a Char: ${myFavNum.toChar()}
    """.trimIndent())
    println()

    // Exercise 5
    println("Exercise 5: Given a Double value (e.g. 3.14159), print roundToInt, ceil (as Int), and floor (as Int).")
    // TODO: set a Double value
    val pi = 3.14159
    println("""
        Pi rounded to Int: ${pi.roundToInt()}
        Pi ceil: ${ceil(pi).toInt()}
        Pi floor: ${floor(pi).toInt()}
    """.trimIndent())
    println()


    // Exercise 6
    println("Exercise 6: Compute and print 2.0 raised to the power 3.0 and the square root of 16.0.")
    // TODO: optionally change base/exponent and value for sqrt
    val myNum = 5
    val myRaise = 3
    println("$myNum ^ $myRaise equals to ${myNum.toDouble().pow(myRaise.toDouble()).toInt()}")
    println("The square root of 16 is ${sqrt(16.0)}")
    println()

    // Exercise 7
    println("Exercise 7: Declare a nullable String? set to null and another set to a value; for each, print the safe-call length and use the Elvis operator to print length or 0.")
    val maybeNull: String? = null
    // TODO: set a non-null string value
    val maybeValue: String? = "Hello Kotlin"
    println("My null string length: ${maybeNull?.length ?: 0} and my maybe null string length: ${maybeValue?.length ?: 0}")
    println()

    // Exercise 8
    println("Exercise 8: Given the sentence \"Hello Kotlin world\", split it by spaces, print the resulting list, and print the second word.")
    // TODO: set a sentence with at least two words
    val kotlinGreeting = "Hello Kotlin world"
    println("""
        My original string: $kotlinGreeting
        My split string: ${kotlinGreeting.split(" ")}
        The second word in my split string: ${kotlinGreeting.split(" ")[1]}
    """.trimIndent())
    println()

    // Exercise 9
    println("Exercise 9: Basic email check: with a hardcoded string, print three booleans — contains(\"@\"), startsWith letter \"a/A\"?, endsWith(\".com\")?.")
    // TODO: set an example email
    val emailExample: String = "diego@gmail.xyz"
    println("""
        Let's check if the email is correct.
        Your email contains an '@'? ${emailExample.contains("@")}
        Your email starts with the letter 'a'? ${emailExample.lowercase().startsWith("a")}
        Your email ends with the suffix '.com'? ${emailExample.endsWith(".com")}
    """.trimIndent())
    println()


    // Exercise 10
    println("Exercise 10: Given three Char values (digit, letter, whitespace), print isDigit, isLetter, isWhitespace, lowercaseChar and uppercaseChar for each.")
    // TODO: set three chars, e.g. '9', 'A', ' '
    val char1: Char = '7'
    val char2: Char = 'D'
    val char3: Char = '_'
    val chars = listOf(char1, char2, char3)
    for (c in chars) {
        println("Char: '$c' -> isDigit=${c.isDigit()}, isLetter=${c.isLetter()}, isWhitespace=${c.isWhitespace()}, lower=${c.lowercaseChar()}, upper=${c.uppercaseChar()}")
    }
    println()

    // Exercise 11
    println("Exercise 11: Given two Double legs a and b, compute the hypotenuse using pow and sqrt and print the result.")
    // TODO: set legs a and b
    val a: Double = 9.0
    val b: Double = 12.0
    val h: Double = sqrt(a.pow(2) + b.pow(2))
    println("The hypotenuse of the two legs it's: $h")
    println()

    // Exercise 12
    println("Exercise 12: Mini number report: given two Double numbers, print max, min, absolute difference (use abs), and a^b (power).")
    // TODO: set two numbers
    val n1: Double = 17.0
    val n2: Double = 110.0
    println("Numbers: $n1, $n2")
    println("Max: ${max(n1, n2)}")
    println("Min: ${min(n1, n2)}")
    println("Absolute difference: ${abs(n1 - n2)}")
    println("n1 ^ n2: ${n1.pow(n2)}")
    println()
}