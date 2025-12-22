void main(){
  // ========== ARITHMETIC OPERATORS ==========
  int a = 10;
  int b = 3;

  print('Addition: ${a + b}');          // Addition
  print('Subtraction: ${a - b}');       // Subtraction
  print('Multiplication: ${a * b}');    // Multiplication
  print('Division (Return double): ${a / b}');          // Division
  print('Integer Division (Return int): ${a ~/ b}'); // Integer Division
  print('Modulus: ${a % b}');           // Modulus

  // ========== ASSIGNMENT OPERATORS ==========
  double x = 5.0; // Simple assignment
  x += 3;    // x = x + 3
  print('After += : $x');
  x -= 2;    // x = x - 2
  print('After -= : $x');
  x *= 4;    // x = x * 4
  print('After *= : $x');
  x /= 5;    // x = x / 5
  print('After /= : $x');
  // Integer division assignment
  var y = x.toInt(); // Convert to int for integer division
  y ~/= 2;   // x = x ~/ 2
  print('After ~/= : $y');
  // Null-aware assignment
  int? z;
  z ??= 10;  // Assign 10 if z is null
  print('After ??= : $z');

  // ========== RELATIONAL OPERATORS ==========
  print('Is a equal to b? ${a == b}');       // Equal to
  print('Is a not equal to b? ${a != b}');   // Not equal to
  print('Is a greater than b? ${a > b}');    // Greater than
  print('Is a less than b? ${a < b}');       // Less than
  print('Is a greater than or equal to b? ${a >= b}'); // Greater than or equal to
  print('Is a less than or equal to b? ${a <= b}');    // Less than or equal to

  // ========== LOGICAL OPERATORS ==========
  bool p = true;
  bool q = false;
  print('p AND q: ${p && q}'); // Logical AND
  print('p OR q: ${p || q}');  // Logical OR
  print('NOT p: ${!p}');       // Logical NOT

  // ========== INCREMENT/DECREMENT OPERATORS ==========
  int count = 0;
  print('Initial count: $count');
  count++; // Post-increment
  print('After count++: $count');
  count--; // Post-decrement
  print('After count--: $count');
  ++count; // Pre-increment
  print('After ++count: $count');
  --count; // Pre-decrement
  print('After --count: $count');

  // ========== NULLABLE OPERATORS ==========
  int? nullableInt;
  print("Null assertion: ${nullableInt!}"); // Null assertion operator (will throw error if nullableInt is null)
  print("Safe navigation: ${nullableInt?.toString()}"); // Safe navigation operator
  print("If null, use default: ${nullableInt ?? 42}"); // If null operator

  // ========= SPREAD OPERATORS ==========
  List<int> list1 = [1, 2, 3];
  List<int> list2 = [0, ...list1, 4, 5]; // Spread operator
  print('Spread operator result: $list2');
  List<int>? nullableList;
  // If it's null, it won't add anything to list3
  List<int> list3 = [0, ...?nullableList, 4, 5]; // Null-aware spread operator
  print('Null-aware spread operator result: $list3');

  // ========= TYPE TESTING OPERATORS ==========
  var value = 42;
  print('Is value an int? ${value is int}'); // Type test operator
  print('Is value not a String? ${value is! String}'); // Negated
}