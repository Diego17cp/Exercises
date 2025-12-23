void main(){
  // For Loop (Equal to JS)
  for (int i = 0; i < 5; i++) {
    print('For Loop iteration: $i');
  }
  // For-In Loop (Similar to Python's for-in)
  List<String> fruits = ['Apple', 'Banana', 'Cherry'];
  for (final fruit in fruits) {
    print('Fruit: $fruit');
  }
  // While Loop
  int maxCount = 5;
  while (maxCount > 0) {
    print('While Loop count: $maxCount');
    maxCount--;
  }
  // Do-While Loop
  int minCount = 0;
  do {
    print('Do-While Loop count: $minCount');
    minCount++;
  } while (minCount < 5);
}