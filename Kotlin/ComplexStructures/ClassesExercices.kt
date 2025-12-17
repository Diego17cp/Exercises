package ComplexStructures

fun main() {
    // Basic
    println("Basic 1: Define a class Person with val name: String and private var age: Int. Init block prints creation. Add celebrateBirthday() that increments age and prints the new age.")
    class Person(val name: String, age: Int) {
        var age = age
            private set
        public fun celebrateBirthday() {
            age++
            println("$name now is $age years old.")
        }
        init {
            println("The person with name $name and age $age has been created.")
        }
    }
    val newPerson = Person("Diego", 19)
    newPerson.celebrateBirthday()

    println("\nBasic 2: Create a class Rectangle(var width: Double, var height: Double) with a read-only property area: Double computed from width * height. Add example usage that prints area.")
    class Rectangle(var width: Double, var height: Double){
        val area: Double
            get() = width * height
    }
    val myRectangle = Rectangle(10.0, 2.0)
    println("The area of my new rectangle is: ${myRectangle.area}")

    println("\nBasic 3: Create a data class User(val username: String, val email: String). Instantiate two users with the same data and demonstrate equals() and toString().")
    data class User(
        val username: String,
        val email: String
    )
    val myFirstUser = User("dialca.dev", "dialcadev@gx.com")
    val mySecondUser = User("dialca.dev", "dialcadev@gx.com")
    println("Are my two users registered same? ${myFirstUser.equals(mySecondUser)}\n" +
            "My first user as a String: ${myFirstUser.toString()}")

    // Intermediate
    println("\nIntermediate 4: Define an open class Animal(private val name: String) with open fun makeSound(). Create a subclass Dog(name: String): Animal and override makeSound() to print a dog sound. Demonstrate polymorphism.")
    open class Animal(private val name: String){
        open fun makeSound() {
            println("$name makes a generic sound...")
        }
    }
    class Dog(name: String): Animal(name) {
        override fun makeSound() {
            println("Woof woof!")
        }
    }
    val myDog = Dog("Skoll")
    myDog.makeSound()

    println("\nIntermediate 5: Implement a singleton object Database with properties name and motor and a connect() method that prints a connection message. Call connect().")
    Database.connect()

    println("\nIntermediate 6: Create a class MathUtil with a companion object exposing fun square(x: Int): Int. Demonstrate calling MathUtil.square(5).")
    println(MathUtil.square(5))

    println("\nIntermediate 7: Define a sealed class Result with data classes Success(val data: String) and Error(val message: String). Write a function processResult(r: Result) using an exhaustive when to print messages for each case.")
    fun processResult(r: Result) {
        when(r) {
            is Result.Success -> println("Success with data: ${r.data}")
            is Result.Error -> println("Error occurred: ${r.message}")
        }
    }
    processResult(Result.Success("All good!"))
    processResult(Result.Error("Something went wrong."))

    // Advanced
    println("Advanced 8: Implement a class Outer with a nested class Nested (no access to outer instance) and an inner class Inner (accesses outerProperty). Demonstrate the difference in access.")
    class Outer {
        private val outerProperty = "Outer Property"
//        class Nested {
//            fun show() {
//                println("This is a nested class.")
//            }
//        }
        inner class Inner {
            fun show() {
                println("Accessing: $outerProperty from Inner class.")
            }
        }
    }
    println("Creating Inner class instance to access outer property:")
    val myOuter = Outer()
    val myInner = myOuter.Inner()
    myInner.show()


    println("Advanced 9: Create a class Team(val name: String, val members: MutableList<User>). Implement a function cloneDeep(): Team that returns a new Team with cloned User instances (deep copy), so modifying the original members does not affect the clone.")
    class Team(val name: String, val members: MutableList<User>){
        fun cloneDeep(): Team {
            val clonedMembers = members.map { User(it.username, it.email) }.toMutableList()
            return Team(name, clonedMembers)
        }
    }
    val originalTeam = Team("Dev Team", mutableListOf(User("dev1", "dev1@gmail.com"), User("dev2", "dev2@gmail.com")))
    val clonedTeam = originalTeam.cloneDeep()
    originalTeam.members[0] = User("hacker", "hackeddev@gmail.com")
    println("Original team first member: ${originalTeam.members[0].username}")
    println("Cloned team first member: ${clonedTeam.members[0].username}")

    println("Advanced 10: Implement a generic class Container<T>(val value: T) with map(transform: (T) -> R): Container<R> and flatMap(transform: (T) -> Container<R>): Container<R>. Demonstrate usage with Container(2) and chained operations.")
    class Container<T>(val value: T) {
        fun <R> map(transform: (T) -> R): Container<R> {
            return Container(transform(value))
        }
        fun <R> flatMap(transform: (T) -> Container<R>): Container<R> {
            return transform(value)
        }
    }
    val myContainer = Container(2)
    val mappedContainer = myContainer.map { it * 3 }
    val flatMappedContainer = myContainer.flatMap { Container(it + 5) }
    println("Mapped container value (2 * 3): ${mappedContainer.value}")
    println("FlatMapped container value (2 + 5): ${flatMappedContainer.value}")
}