void main(){
  print('Hello, Dart!');

  // ========== VARIABLES ========== 

  // Inferred type
  var name = 'Dart';
  name = 'Flutter';
  print(name);

  // Explicit type
  String greeting = 'Welcome to Dart programming!';
  print("Printing greeting: $greeting");

  // ========== DATA TYPES ==========
  int myInt = 17;
  double myDouble = 3.14;
  num myNum = 42; // can be int or double
  bool isDartFun = true;
  String myString = 'Dart is awesome!';
  Object myObject = 'I am an object'; // compiler don't know the type, but it is safe at runtime, like "unknown" in Typescript
  dynamic myDynamic = 100; // if the type is not known at compile time can crash at runtime, like "any" in Typescript
  String? myNullableString = null; // can hold null value
  print("""
  Integer: $myInt
  Double: $myDouble
  Num: $myNum
  Boolean: $isDartFun
  String: $myString
  Object: $myObject
  Dynamic: $myDynamic
  Nullable String: $myNullableString
  """);

  // ========== CONSTANTS ==========
  // * No one can change the value of a constant after it is defined.
  // * "final" can be assigned through code execution, but only once.
  // * "const" must be assigned at compile-time. Ideal for values that never change.

  const pi = 3.14159; // compile-time constant
  final currentTime = DateTime.now(); // run-time constant
  print("Constant pi: $pi");
  print("Final current time: $currentTime");
}