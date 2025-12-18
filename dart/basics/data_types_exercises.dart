void main() {
  // Exercise 1
  print("Exercise 1: Declare a string with your favorite book title, print its length, and check if it contains the word 'the' (case-insensitive).");
  var myBook = "Some random book title";
  print("My book title length: ${myBook.length}, my book title contains the 'the' word? ${myBook.contains("the")}");


  // Exercise 2
  print("\nExercise 2: Create a multi-line string with a quote, convert it to uppercase, and extract the last 10 characters.");
  var myQuote = """"
  'Al final todo saldrá bien,
  y si no sale bien,
  es que no es el final.'
""";
  print("Uppercase Quote:\n${myQuote.toUpperCase()}");
  print("Last 10 characters: '${myQuote.substring(myQuote.length - 10)}'");


  // Exercise 3
  print("\nExercise 3: Given a full name string, split it and print first name, last name, and initials in uppercase.");
  var myName = "Dialca Dev";
  final splittedName = myName.split(" ");
  print("""
  Original name: $myName
  First name: ${splittedName[0]}
  Last name: ${splittedName[splittedName.length - 1]}
  Initials: ${splittedName[0][0].toUpperCase()}${splittedName[1][0].toUpperCase()}
""");

  // Exercise 4
  print("\nExercise 4: Take an integer representing seconds, convert it to minutes (as double) and hours (as int), then convert the original number to a string and print its length.");
  var seconds = 3661;
  double minutes = seconds / 60;
  int hours = seconds ~/ 3600; // Integer division
  String secondsString = seconds.toString();
  print("""
  Original seconds: $seconds
  Minutes: $minutes
  Hours: $hours
  Length of seconds as string: ${secondsString.length}
""");


  // Exercise 5
  print("\nExercise 5: Given a decimal number, print its absolute value, rounded value, ceiling, and floor.");
  double myDecimal = -7.56;
  print("""
  Original decimal: $myDecimal
  Absolute value: ${myDecimal.abs()}
  Rounded value: ${myDecimal.round()}
  Ceiling value: ${myDecimal.ceil()}
  Floor value: ${myDecimal.floor()}
""");

  // Exercise 6
  print("\nExercise 6: Calculate the area and perimeter of a circle given its radius. Use appropriate type conversions.");
  const double pi = 3.14159;
  double radius = 5.0;
  double area = pi * radius * radius;
  double perimeter = 2 * pi * radius;
  print("""
  Radius: $radius
  Area: $area
  Perimeter: $perimeter
""");

}