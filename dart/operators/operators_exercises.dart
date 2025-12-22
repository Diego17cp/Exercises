void main(){
  // Exercise 1
  print("Exercise 1: Given two integers, perform and print all arithmetic operations: addition, subtraction, multiplication, division, integer division, and modulo.");
  int a = 15;
  int b = 4;

  print("""
  All arithmetic operartions
  My numbers: $a, $b
  Sum: ${a+b}
  Subst: ${a-b}
  Mult: ${a*b}
  Division: ${a/b}
  Int Division: ${a ~/ b}
  Modulo: ${a % b}
  """);

  // Exercise 2
  print("\nExercise 2: Check if a number is even or odd using modulo operator. Also check if it's divisible by both 3 and 5.");
  int number = 30;
  number % 2 == 0
      ? print("$number is even")
      : print("$number is odd");
  if (number % 3 == 0 && number % 5 == 0) print("$number is divisible by both 3 and 5");
  else print("$number is not divisible by both 3 and 5");
  

  // Exercise 3
  print("\nExercise 3: Given three boolean values, print results of AND, OR, NOT operations and a complex condition using all three.");
  bool p = true;
  bool q = false;
  bool r = true;
  print("p AND q: ${p && q}");
  print("p OR q: ${p || q}");
  print("NOT p: ${!p}");
  print("Complex condition (p AND q) OR (NOT r): ${(p && q) || (!r)}");

  // Exercise 4
  print("\nExercise 4: Compare two numbers using all comparison operators (==, !=, >, <, >=, <=) and print the results.");
  int num1 = 7;
  int num2 = 10;
  print("Is num1 equal to num2? ${num1 == num2}");
  print("Is num1 not equal to num2? ${num1 != num2}");
  print("Is num1 greater than num2? ${num1 > num2}");
  print("Is num1 less than num2? ${num1 < num2}");
  print("Is num1 greater than or equal to num2? ${num1 >= num2}");
  print("Is num1 less than or equal to num2? ${num1 <= num2}");

  // Exercise 5
  print("\nExercise 5: Use compound assignment operators (+=, -=, *=, /=) to modify a variable step by step and print after each operation.");
  double x = 10.0;
  print("Initial x: $x");
  x += 5;
  print("After += 5: $x");
  x -= 3;
  print("After -= 3: $x");
  x *= 2;
  print("After *= 2: $x");
  x /= 4;
  print("After /= 4: $x");

  // Exercise 6
  print("\nExercise 6: Demonstrate pre-increment, post-increment, pre-decrement, and post-decrement operators with clear output showing the difference.");
  int y = 5;
  print("Initial y: $y");
  print("Post-increment y++: ${y++}");
  print("After post-increment, y: $y");
  print("Pre-increment ++y: ${++y}");
  print("After pre-increment, y: $y");
  print("Post-decrement y--: ${y--}");
  print("After post-decrement, y: $y");
  print("Pre-decrement --y: ${--y}");
  print("After pre-decrement, y: $y");

  // Exercise 7
  print("\nExercise 7: Use ternary operator to determine if a person can vote (age >= 18), drive (age >= 16), and drink (age >= 21).");
  int age = 20;
  String canVote = age >= 18 ? "can vote" : "cannot vote";
  String canDrive = age >= 16 ? "can drive" : "cannot drive";
  String canDrink = age >= 21 ? "can drink" : "cannot drink";
  print("At age $age, a person $canVote, $canDrive, and $canDrink.");

  // Exercise 8
  print("\nExercise 8: Given a nullable string, use null-aware operators (??, ?., ??=) to provide default values and safe operations.");
  String? nullableString;
  print("Using ?? operator: ${nullableString ?? "Default Value"}");
  print("Using ?.: ${nullableString?.toUpperCase()}");
  nullableString ??= "Assigned Value";
  print("After ??= operator: $nullableString");

  // Exercise 9
  print("\nExercise 9: Calculate BMI (weight / height²) and use logical operators to classify: underweight (<18.5), normal (18.5-24.9), overweight (25-29.9), or obese (>=30).");
  double weight = 70; // in kg
  double height = 1.75; // in meters
  double bmi = weight / (height * height);
  print("BMI: ${bmi.toStringAsFixed(2)}");
  if (bmi < 18.5) {
    print("Classification: Underweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    print("Classification: Normal weight");
  } else if (bmi >= 25 && bmi <= 29.9) {
    print("Classification: Overweight");
  } else {
    print("Classification: Obese");
  }

  // Exercise 10
  print("\nExercise 10: Implement a simple calculator: given two numbers and an operator string (+, -, *, /), perform the operation and handle division by zero.");
  double n1 = 12.0;
  double n2 = 0.0;
  String operator = "/";
  double? result;
  switch (operator) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      if (n2 != 0) {
        result = n1 / n2;
      } else {
        print("Error: Division by zero");
      }
      break;
    default:
      print("Error: Invalid operator");
  }
  if (result != null) {
    print("Result: $result");
  }
}