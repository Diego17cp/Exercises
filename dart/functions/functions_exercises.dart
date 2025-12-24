import 'dart:math';

void main(){
  // Exercise 1
  print("Exercise 1: Create a function that takes two numbers and returns their average. Test it with different values.");
  num getAvg(num a, num b) => (a + b) / 2;
  print("Average of: 17 and 3 = ${getAvg(17, 3)}");
  print("Average of: 10 and 2 = ${getAvg(10, 2)}");
  print("Average of: 5 and 5 = ${getAvg(5, 5)}");

  // Exercise 2
  print("\nExercise 2: Write a function that checks if a string is a palindrome (reads same forwards and backwards). Return true or false.");
  bool checkPalindrome(String string){
    String reversed = string.split("").reversed.join("");
    return string.toLowerCase() == reversed.toLowerCase();
  }
  print("Mom is a palindrome?: ${checkPalindrome("mom")}");
  print("Dart is a palindrome?: ${checkPalindrome("Dart")}");
  print("The word string is a palindrome?: ${checkPalindrome("string")}");

  // Exercise 3
  print("\nExercise 3: Create a function that takes a list of integers and returns a record with (sum, average, max, min).");
  (num, num, num, num) getStats(List<int> numbers){
    num sum = numbers.fold(0, (a, b) => a + b);
    num avg = sum / numbers.length;
    num maxx = numbers.reduce(max);
    num minn = numbers.reduce(min);
    return (sum, avg, maxx, minn);
  }
  var stats = getStats([3, 5, 7, 2, 8]);
  print("For the list [3, 5, 7, 2, 8]: Sum = ${stats.$1}, Average = ${stats.$2}, Max = ${stats.$3}, Min = ${stats.$4}");

  // Exercise 4
  print("\nExercise 4: Write a function with named parameters to calculate the area of a rectangle. Make width required and height optional (default 10).");
  num calculateArea({required num width, num height = 10}) => width * height;
  print("Calculate rectangles area of 100x10: ${calculateArea(width: 100)}");
  print("Calculate rectangles area of 100x100: ${calculateArea(width: 100, height: 100)}");

  // Exercise 5
  print("\nExercise 5: Create a function that takes a temperature and a unit ('C' or 'F') as named parameters, and converts it to the other unit.");
  num convertCelsiusToFahrenheit(num c) => (c * 9/5) + 32;
  num convertFahrenheitToCelsius(num f) => (f - 32) * 5/9;
  num convertTemperature({required temperature, required String unit}){
    var upperUnit = unit.toUpperCase();
    if (upperUnit != "C" && upperUnit != "F") {
      print("Unit must be 'C' or 'F'");
      return 0;
    }
    return upperUnit == "C" ? convertCelsiusToFahrenheit(temperature) : convertFahrenheitToCelsius(temperature);
  }
  print("Convert 100 Celsius to Fahrenheit: ${convertTemperature(temperature: 100, unit: "C")}");
  print("Convert 212 Fahrenheit to Celsius: ${convertTemperature(temperature: 212, unit: "F")}");
  print("Convert 10 Celsius to Fahrenheit: ${convertTemperature(temperature: 10, unit: "D")}");

  // Exercise 6
  print("\nExercise 6: Write a higher-order function that takes a list of numbers and a function as parameters. Apply the function to each number and return the results.");
  num square(num n) => n * n;
  List<num> applyFunctionToList(List<num> numbers, num Function(num) func){
    return numbers.map((n) => func(n)).toList();
  }
  var squaredList = applyFunctionToList([1, 2, 3, 4, 5], square);
  print("Squared list of [1, 2, 3, 4, 5]: $squaredList");

  // Exercise 7
  print("\nExercise 7: Create a function that generates a list of n Fibonacci numbers. Use it to generate different sequences.");
  List<int> fibonacci = [0, 1];
  List<int> generateFibonacci(int term) {
    if (term <= 1) return [0];
    if (term == 2) return [0, 1];
    for (int i = 2; i < term; i++){
      fibonacci.add(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
  }
  print("The first fibonacci number: ${generateFibonacci(1)}");
  print("The first 2 fibonacci numbers sequence: ${generateFibonacci(2)}");
  print("The first 20 fibonacci numbers sequence: ${generateFibonacci(20)}");


  // Exercise 8
  print("\nExercise 8: Write a function that takes a string and returns a map with character frequencies. Use it to analyze different strings.");
  Map<String, int> charFrequency(String str){
    Map<String, int> frequency = {}; 
    for (var char in str.split("")){
      if (frequency.containsKey(char)) frequency[char] = frequency[char]! + 1;
      else frequency[char] = 1;
    }
    return frequency;
  }
  print("Character frequency in 'hello': ${charFrequency("hello")}");
  print("Character frequency in 'Dart Programming': ${charFrequency("Dart Programming")}");

  // Exercise 9
  print("\nExercise 9: Create a filter function that takes a list and a condition function, returning only elements that meet the condition. Test with different conditions.");
  
  List<T> filterList<T>(List<T> items, bool Function(T) condition){
    return items.where((item) => condition(item)).toList();
  }
  bool isEven(int n) => n % 2 == 0;
  var evenNumbers = filterList<int>([1, 2, 3, 4, 5, 6], isEven);
  print("Even numbers from [1, 2, 3, 4, 5, 6]: $evenNumbers");
  bool isLongerThanThree(String str) => str.length > 3;
  var longStrings = filterList<String>(["hi", "hello", "dart", "is", "fun"], isLongerThanThree);
  print("Strings longer than 3 characters from ['hi', 'hello', 'dart', 'is', 'fun']: $longStrings");

  // Exercise 10
  print("\nExercise 10: Build a calculator function that takes two numbers and an operation (as a function parameter). Support add, subtract, multiply, and divide operations.");
  num add(num a, num b) => a + b;
  num subtract(num a, num b) => a - b;
  num multiply(num a, num b) => a * b;
  num divide(num a, num b) => a / b;
  num calculator(num a, num b, num Function(num, num) operation) => operation(a, b);
  print("Calculator add 10 + 5: ${calculator(10, 5, add)}");
  print("Calculator subtract 10 - 5: ${calculator(10, 5, subtract)}");
  print("Calculator multiply 10 * 5: ${calculator(10, 5, multiply)}");
  print("Calculator divide 10 / 5: ${calculator(10, 5, divide)}");

  // Exercise 11
  print("\nExercise 11: Write a function that validates a password. It should check: length >= 8, has uppercase, has lowercase, has number. Return a record with (isValid, List<String> errors).");
  (bool, List<String>) validatePassword(String password){
    List<String> errors = [];
    if (password.length < 8) errors.add("Password must be at least 8 characters long.");
    if (!password.contains(RegExp(r'[A-Z]'))) errors.add("Password must contain at least one uppercase letter.");
    if (!password.contains(RegExp(r'[a-z]'))) errors.add("Password must contain at least one lowercase letter.");
    if (!password.contains(RegExp(r'[0-9]'))) errors.add("Password must contain at least one number.");
    return (errors.isEmpty, errors);
  }
  var (isValid1, errors1) = validatePassword("Password123");
  print("Is 'Password123' valid?: $isValid1, Errors: $errors1");
  var (isValid2, errors2) = validatePassword("pass");
  print("Is 'pass' valid?: $isValid2, Errors: $errors2");

  // Exercise 12
  print("\nExercise 12: Create a function that takes a list of students (records with name and grade) and returns multiple lists: passed, failed, and honors (grade >= 90).");
  (List<Map<String, dynamic>>, List<Map<String, dynamic>>, List<Map<String, dynamic>>) categorizeStudents(List<Map<String, dynamic>> students){
    List<Map<String, dynamic>> passed = [];
    List<Map<String, dynamic>> failed = [];
    List<Map<String, dynamic>> honors = [];
    for (var student in students){
      if (student['grade'] >= 90) honors.add(student);
      if (student['grade'] >= 60) passed.add(student);
      else failed.add(student);
    }
    return (passed, failed, honors);
  }
  var students = [
    {'name': 'Alice', 'grade': 95},
    {'name': 'Bob', 'grade': 85},
    {'name': 'Charlie', 'grade': 55},
    {'name': 'Diana', 'grade': 70},
    {'name': 'Ethan', 'grade': 45},
  ];
  var (passed, failed, honors) = categorizeStudents(students);
  print("Passed Students: $passed");
  print("Failed Students: $failed");
  print("Honors Students: $honors");
}