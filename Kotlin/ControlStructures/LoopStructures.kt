package ControlStructures

fun main(){
    // ============================
    // Loop Structures
    // ============================

    // Classic for loop
    for (i in 1..5) {
        println("Current number: $i")
    }
    // Iterate over a list
    val myList = listOf("Kotlin", "Javascript", "TypeScript")
    for (item in myList) {
        println("Item in the list: $item")
    }
    // While loop
    var attempts = 3
    while (attempts > 0) {
        println("Remaining attempts: $attempts")
        attempts--
    }
    // Do-while loop
    var countdown = 3
    do {
        println("Countdown: $countdown")
        countdown--
    } while (countdown > 0)
}