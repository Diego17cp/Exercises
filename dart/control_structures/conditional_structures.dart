void main(){
  // If-ElseIf-Else Statement
  int number = 10;
  if (number % 2 == 0) {
    print('$number is even.');
  } else if (number % 3 == 0) {
    print('$number is divisible by 3.');
  } else {
    print('$number is odd.');
  }

  // Ternary Operator
  int age = 20;
  age >= 18 ? print('Adult') : print('Minor');
  // As a expression
  String eligibility = age >= 18 ? 'Eligible to vote' : 'Not eligible to vote';
  print(eligibility);

  // Switch Statement
  String grade = 'B';
  switch (grade) {
    case 'A':
      print('Excellent');
      break;
    case 'B':
      print('Good');
      break;
    case 'C':
      print('Average');
      break;
    case 'D':
      print('Below Average');
      break;
    case 'F':
      print('Failing');
      break;
    default:
      print('Invalid grade');
  }
  // Using switch as an expression (like Kotlin) (Dart 3.0 and above)
  String performance = switch (grade) {
    'A' => 'Excellent',
    'B' => 'Good',
    'C' => 'Average',
    'D' => 'Below Average',
    'F' => 'Failing',
    _ => 'Invalid grade',
  };
  print('Performance: $performance');
}