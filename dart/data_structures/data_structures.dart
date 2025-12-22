void main(){
  // =============== LISTS ===============
  // Is a collection of ordered items

  // Typed
  List<int> numbers = [1, 2, 3, 4, 5];
  // Inferred
  var fruits = ['apple', 'banana', 'cherry'];
  // Creating an empty list
  List<double> prices = [];
  // Dynamic
  var mixedList = [1, 'two', 3.0, true];
  // Better typing
  var myList = <String>[];
  // Accessing elements
  print(numbers[0]); // Output: 1
  print(fruits[2]); // Output: cherry
  // Adding elements
  prices.add(9.99);
  mixedList[0] = 'one';
  mixedList.add(3);
  // Fixed length list
  var fixedList = List<int>.filled(3, 0);
  fixedList[0] = 10;
  // fixedList.add(4); // This will throw an error
  print(fixedList); // Output: [10, 0, 0]

  // =============== SETS ===============
  // Is a collection of unique items with no specific order

  // Typed
  Set<String> colors = {'red', 'green', 'blue'};
  // Inferred
  var ids = {1, 2, 3, 4};
  // Creating an empty set
  // Must specify type for empty set
  Set<double> scores = {};
  // Accessing elements (no indexing)
  print(colors.contains('red')); // Output: true
  // Adding elements
  scores.add(95.5);
  ids.add(5);
  colors.add('yellow');
  print(colors); // Output: {red, green, blue, yellow}

  // =============== MAPS ===============
  // Is a collection of key-value pairs

  // Typed
  Map<String, int> ages = {'Alice': 30, 'Bob': 25};
  Map<int, String> codes = {2001: 'OK', 404: 'Not Found'};
  // Inferred
  var capitals = {'USA': 'Washington, D.C.', 'France': 'Paris'}; // Map<String, String>
  // Creating an empty map
  Map<String, double> productPrices = {};
  // Better typing
  var phoneBook = <String, String>{};
  // Dynamic
  var inventory = {};

  // Accessing elements
  print(ages['Alice']); // Output: 30
  print(capitals['France']); // Output: Paris
  // Can be null if key doesn't exist
  print(inventory['item1']); // Output: null

  // Adding elements
  productPrices['Laptop'] = 999.99;
  phoneBook['John'] = '555-1234';
  inventory['item1'] = 50;
  codes[500] = 'Server Error';
  print(productPrices); // Output: {Laptop: 999.99}
  
  // =============== RECORDS ===============
  // Is a collection of fixed number of fields, lightweight alternative to classes
  // Its typing is inferred

  // Named fields
  var person = (name: 'Alice', age: 30, isStudent: false);

  // Positional fields
  var person2 = ("Diego", 19, true);

  // Accessing fields
  print(person.name); // Output: Alice
  print(person2.$1); // Output: Diego
  
}