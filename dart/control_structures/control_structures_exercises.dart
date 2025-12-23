void main() {
  // Exercise 1
  print(
    "Exercise 1: Print all numbers from 1 to 20. Mark even numbers with '(even)' and odd numbers with '(odd)'.",
  );
  for (int i = 1; i <= 20; i++) {
    print("$i ${i % 2 == 0 ? '(even)' : '(odd)'}");
  }
  // Exercise 2
  print(
    "\nExercise 2: Calculate the factorial of a number using a for loop. Print each step of the calculation.",
  );
  int myNumber = 5;
  for (int i = 1; i <= myNumber; i++) {
    int factorial = 1;
    String steps = '';
    for (int j = 1; j <= i; j++) {
      factorial *= j;
      steps += j.toString();
      if (j < i) steps += ' x ';
    }
    print('Factorial of $i: $steps = $factorial');
  }

  // Exercise 3
  print(
    "\nExercise 3: Given a list of grades, count how many are passing (>=60) and failing (<60). Calculate the class average.",
  );
  List<int> grades = [85, 42, 78, 90, 55, 63, 47, 88];
  int passingCount = 0;
  int failingCount = 0;
  double avg = grades.reduce((a, b) => a + b) / grades.length;
  for (int i = 0; i < grades.length; i++) {
    if (grades[i] >= 60)
      passingCount += 1;
    else
      failingCount += 1;
  }
  print("Passing grades: $passingCount");
  print("Failing grades: $failingCount");
  print("Class average: $avg");

  // Exercise 4
  print(
    "\nExercise 4: Print the Fibonacci sequence up to n terms. Use a while loop.",
  );
  List<int> fibonacci = [0, 1];
  int n = 10;
  for (int i = 2; i < 10; i++) {
    fibonacci.add(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  print("The Fibonacci sequence up to $n: ${fibonacci.join(", ")}");

  // Exercise 5
  print(
    "\nExercise 5: Create a multiplication table for a given number (1 to 10). Use switch-case to add special messages for multiples of 5.",
  );
  int myNum = 5;
  String operator = '*';
  print("=============================");
  for (int i = 1; i <= 12; i++) {
    int result = myNum * i;
    print("$myNum $operator $i = $result");
    switch (i) {
      case 5:
        print("$myNum $operator $i = $result  <-- Halfway there!");
        break;
      case 10:
        print("$myNum $operator $i = $result  <-- Double digits!");
        break;
      default:
        print("$myNum $operator $i = $result");
    }
  }
  print("=============================");

  // Exercise 6
  print(
    "\nExercise 6: Given a string, count vowels and consonants. Use a for-in loop and switch statement.",
  );
  String myString = "Hello World";
  int vowelCount = 0;
  int consonantCount = 0;
  for (final char in myString.toLowerCase().replaceAll(' ', '').split('')) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        vowelCount++;
        break;
      default:
        consonantCount++;
    }
  }
  print("Vowels: $vowelCount");
  print("Consonants: $consonantCount");

  // Exercise 7
  print(
    "\nExercise 7: Implement FizzBuzz: print numbers 1-30, but for multiples of 3 print 'Fizz', for multiples of 5 print 'Buzz', and for multiples of both print 'FizzBuzz'.",
  );
  for (int i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0)
      print("FizzBuzz");
    else if (i % 3 == 0)
      print("Fizz");
    else if (i % 5 == 0)
      print("Buzz");
    else
      print(i);
  }

  // Exercise 8
  print(
    "\nExercise 8: Reverse a string using a for loop. Don't use built-in reverse methods.",
  );
  String str = "Hello, Dart!";
  String reversed = '';
  for (int i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  print("Original string: $str");
  print("Reversed string: $reversed");

  // Exercise 9
  print(
    "\nExercise 9: Given a map of products and prices, apply a discount: 10% for prices under 100, 15% for 100-500, 20% for over 500. Print original and discounted prices.",
  );
  Map<String, double> products = {
    'Laptop': 999.99,
    'Headphones': 199.99,
    'Mouse': 49.99,
    'Keyboard': 89.99,
    'Monitor': 299.99,
  };
  print("Original products: $products");
  print("Aplying discount...");
  products.updateAll(
    (key, value) =>
        value -
        (value < 100.0
            ? value * 0.1
            : value > 100 && value <= 500
            ? value * 0.15
            : value > 500
            ? value * 0.2
            : 0),
  );
  print("Discounted products: $products");

  // Exercise 10
  print(
    "\nExercise 10: Check if a number is prime. Use a for loop to test divisibility and break when a divisor is found.",
  );
  int numberToCheck = 29;
  bool isPrime = true;
  for (int i = 2; i <= numberToCheck ~/ 2; i++) {
    if (numberToCheck % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime && numberToCheck > 1)
    print("$numberToCheck is a prime number.");
  else
    print("$numberToCheck is not a prime number.");

  // Exercise 11
  print(
    "\nExercise 11: Given a list of temperatures, find the hottest day, coldest day, and count how many days were above average.",
  );
  List<double> temperatures = [72.5, 85.0, 90.3, 60.4, 78.9, 88.1, 95.6];
  double hottest = temperatures[0];
  double coldest = temperatures[0];
  double average = temperatures.reduce((value, element) => value + element) / temperatures.length;
  int days = 0;
  for (int i = 0; i < temperatures.length; i++){
    if (temperatures[i] > average) days += 1;
    if (temperatures[i] > hottest) hottest = temperatures[i];
    if (temperatures[i] < coldest) coldest = temperatures[i];
  }
  print("Hottest day: $hottest");
  print("Coldest day: $coldest");
  print("Average temperature: $average");
  print("Days above average: $days");

  // Exercise 12
  print(
    "\nExercise 12: Create a simple guessing game: generate a 'secret' number (hardcoded), simulate 5 guesses (hardcoded list), tell if each guess is too high, too low, or correct.",
  );
  int secretNumber = 42;
  List<int> guesses = [10, 50, 30, 42, 60];
  for (final guess in guesses) {
    if (guess < secretNumber)
      print("Guess $guess is too low.");
    else if (guess > secretNumber)
      print("Guess $guess is too high.");
    else
      print("Guess $guess is correct!");
  }

  // Exercise 13
  print(
    "\nExercise 13: Given a list of numbers, separate into three lists: single-digit, double-digit, and triple-digit numbers. Use if-else conditions.",
  );
  List<int> numbers = [3, 45, 123, 7, 89, 456, 12, 5, 678];
  List<int> singleDigit = [];
  List<int> doubleDigit = [];
  List<int> tripleDigit = [];
  for (final number in numbers) {
    if (number >= 0 && number <= 9)
      singleDigit.add(number);
    else if (number >= 10 && number <= 99)
      doubleDigit.add(number);
    else if (number >= 100 && number <= 999) tripleDigit.add(number);
  }
  print("Single-digit numbers: $singleDigit");
  print("Double-digit numbers: $doubleDigit");
  print("Triple-digit numbers: $tripleDigit");

  // Exercise 14
  print(
    "\nExercise 14: Calculate compound interest for multiple years. Use a for loop to show the balance at the end of each year.",
  );
  double principal = 1000.0;
  double rate = 0.05;
  int years = 10;
  double amount = principal;
  for (int i = 1; i <= years; i++) {
    amount = amount * (1 + rate);
    print("Balance at the end of year $i: ${amount.toStringAsFixed(2)}");
  }

  // Exercise 15
  print(
    "\nExercise 15: Pattern printing: create a right triangle of asterisks (*) with n rows. Each row should have an increasing number of asterisks.",
  );
  int z = 5;
  for (int i = 1; i <= z; i++) {
    String row = '';
    for (int j = 1; j <= i; j++) {
      row += '*';
    }
    print(row);
  }
}
