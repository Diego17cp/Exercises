void main(){
  // =========== BASIC FUNCTION ===========
  int sum(int a, int b) {
    return a + b;
  }
  print("Sum: ${sum(3, 5)}"); // Output: Sum: 8
  
  // Inferred return type
  multiply(a, b) {
    return a * b;
  }
  print("Multiply: ${multiply(3, 5)}"); // Output: Multiply: 15

  // Recommended to specify return type

  // =========== ARROW FUNCTION ===========
  // Single expression function; the expression's value is returned
  // Equal to JavaScript's arrow functions but typed
  // Used for short functions and callbacks
  int square(int x) => x * x;
  print("Square: ${square(4)}"); // Output: Square: 16

  // =========== VOID FUNCTION ===========
  // Functions that do not return a value, just do something
  void greet(String name) {
    print("Hello, $name!");
  }
  greet("Alice"); // Output: Hello, Alice!

  // ===========  POSITIONAL PARAMETERS ===========
  // Default positional parameters
  String greetUser(String firstName, String lastName) {
    return "Hello, $firstName $lastName!";
  }
  print(greetUser("John", "Doe")); // Output: Hello, John Doe!
  
  // =========== NAMED PARAMETERS ===========
  // Are within curly braces {}
  // Can be optional or required
  String introduce({required String name, int? age}) {
    if (age != null) return "My name is $name and I am $age years old.";
    else return "My name is $name.";
  }
  print(introduce(name: "Alice", age: 30)); // Output: My name is Alice and I am 30 years old.
  print(introduce(name: "Bob")); // Output: My name is Bob.

  // ========== DEFAULT PARAMETER VALUES ===========
  String welcomeMessage(String name, {String greeting = "Welcome"}) => "$greeting, $name!";
  print(welcomeMessage("Charlie")); // Output: Welcome, Charlie!
  print(welcomeMessage("Diana", greeting: "Hello")); // Output: Hello, Diana!

  // ========== OPTIONAL PARAMETERS ===========
  void logMessage(String message, [String? prefix]) {
    if (prefix != null) print("[$prefix] $message");
    else print(message);
  }
  logMessage("System started"); // Output: System started
  logMessage("User logged in", "INFO"); // Output: [INFO] User logged in

  // ========= FIRST-CLASS FUNCTIONS ===========
  // Functions can be assigned to variables, passed as arguments, and returned from other functions
  int add(int x, int y) => x + y;
  var operation = add;
  print("Operation Result: ${operation(4, 6)}"); // Output: Operation Result: 10

  void executeOperation(int Function(int, int) func, int a, int b) {
    print("Executing operation: ${func(a, b)}");
  }
  executeOperation(add, 7, 3); // Output: Executing operation: 10

  // ========== ANONYMOUS FUNCTIONS (LAMBDA) ===========
  // Can be arrow functions or regular functions without a name
  var numbers = [1, 2, 3, 4, 5];
  var squaredNumbers = numbers.map((n) => n * n).toList();
  print("Squared Numbers: $squaredNumbers"); // Output: Squared Numbers: [1, 4, 9, 16, 25]

  // ========== MULTI RETURN VALUES FUNCTIONS ===========
  (int, int) getSize() {
    int width = 1920;
    int height = 1080;
    return (width, height);
  }
  var (w, h) = getSize();
  print("Width: $w, Height: $h"); // Output: Width: 1920, Height: 1080

  // ========= BETTER WAY TO WRITE FUNCTIONS ===========
  // Use named parameters for better readability
  // Specify return types for clarity
  // Use required, optional, and default parameters appropriately
  
  String createProfile({required String username, String role = "User", int? age}) {
    String profile = "Username: $username, Role: $role";
    if (age != null) profile += ", Age: $age";
    return profile;
  }
  print(createProfile(username: "dialcadev", age: 19)); // Output: Username: dialcadev, Role: User, Age: 19
  print(createProfile(username: "admin", role: "Administrator")); // Output: Username: admin, Role: Administrator
}