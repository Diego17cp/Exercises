package Basics

import java.lang.Math.pow
import kotlin.math.abs
import kotlin.math.ceil
import kotlin.math.floor
import kotlin.math.max
import kotlin.math.min
import kotlin.math.pow
import kotlin.math.roundToInt
import kotlin.math.sqrt

fun main(){
    // ============================
    // String methods
    // ============================
    val myStr = "Hello, Kotlin! "
    println("""
        Length of a string: ${myStr.length}
        Lowercase: ${myStr.lowercase()}
        Uppercase: ${myStr.uppercase()}
        Capitalize deprecated: ${myStr.capitalize()}
        Modern capitalize: ${myStr.replaceFirstChar { it.uppercase() }}
        Trim the last space: ${myStr.trim()}
        Trim a specific side: ${myStr.trimStart()} or ${myStr.trimEnd()}
        Substring: ${myStr.substring(0, 5)}
        Return the first n numbers: ${myStr.take(5)}
        Remove the n numbers from right to left: ${myStr.drop(7)}
        Verify if a string contains another: $myStr contains 'Hello'? ${myStr.contains("Hello")}
        Verify if a string starts with another: $myStr starts with 'He'? ${myStr.startsWith("He")}
        Verify if a string ends with another: ${myStr.trim()} ends with 'lin!'? ${myStr.trim().endsWith("lin!")}
        Replace parts of a string: Original: $myStr to ${myStr.replace("Kotlin", "Android")}
        More complex: Original: $myStr to ${myStr.replace(myStr, "I'm Dialcadev:)")}
        Split parts of a string and transform in a list or array: ${myStr.split(" ")}
    """.trimIndent())
    // =======================
    // Number methods
    // ======================
    val x: Int = 17
    val pi: Double = 3.14159
    println("""
        Int to Double: ${x.toDouble()}
        Int to string: ${x.toString()}
        Int to char: ${x.toChar()}
        Double to int: ${pi.toInt()}
        Round double to int: ${pi.roundToInt()}
        Round to the greater number: ${ceil(pi).toInt()}
        Round to the nearest to down number: ${floor(pi).toInt()}
    """.trimIndent())
    // ====================
    // Math operations
    // ===================
    println("""
        Absolute value: ${abs(-5)}
        Max value between two numbers: ${max(3, 7)}
        Min value between two numbers: ${min(17, 99)}
        Square root: ${sqrt(16.00)}
        Potentiation: ${2.0.pow(3.0)}
    """.trimIndent())
    // ==================
    // Char methods
    // =================
    val myChar: Char = 'D'
    println("""
        Verify if the char is a digit: $myChar is a digit? ${myChar.isDigit()}
        Verify if the char is a letter: $myChar is a letter? ${myChar.isLetter()}
        Verify if the chat is a whiteSpace: $myChar is a white space?? ${myChar.isWhitespace()}
        Lower and Upper case: Lower ${myChar.lowercaseChar()}, Upper ${myChar.uppercaseChar()}
    """.trimIndent())
}