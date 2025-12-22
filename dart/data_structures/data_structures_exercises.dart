void main() {
  // Exercise 1
  print("Exercise 1: Create a list of integers from 1 to 10, filter out even numbers, multiply remaining by 3, and print the sum.");
  List<int> myInts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  print("Original list: $myInts");
  var odds = myInts.where((n) => n % 2 != 0).toList();
  var multiplied = odds.map((n) => n * 3).toList();
  var sum = multiplied.reduce((a, b) => a + b);
  print("""
  Odd numbers: $odds
  Multiplied by 3: $multiplied
  Sum: $sum
  """);

  // Exercise 2
  print("Exercise 2: Given a list of strings, remove duplicates using a Set, sort alphabetically, and print as a comma-separated string.");
  List<String> myStrings = ['apple', 'banana', 'apple', 'orange', 'banana', 'kiwi'];
  var mySet = myStrings.toSet();
  var sorted = mySet.toList()..sort();
  var result = sorted.join(', ');
  print("Sorted unique strings: $result");

  // Exercise 3
  print("Exercise 3: Create a map of product names to prices. Add 3 products, increase all prices by 10%, and print products over a certain threshold.");
  Map<String, double> products = {
    "Laptop HP": 1550.50,
    "Samsung S24 Ultra Phone": 5501.30,
    "Japanese Style Keyboard": 330.10
  };
  print("Original products: $products");
  products.updateAll((key, value) => value * 1.1);
  print("After 10% increase: $products");
  var expensive = products.entries.where((e) => e.value > 500).toList();
  print("Products over 500:");
  expensive.forEach((e) => print("  ${e.key}: \$${e.value.toStringAsFixed(2)}"));

  // Exercise 4
  print("Exercise 4: Build a student grades map (name -> grade). Calculate average, find highest and lowest performers, and count how many passed (grade >= 60).");
  Map<String, int> students = {
    'Alice': 85,
    'Bob': 45,
    'Charlie': 92,
    'Diana': 78,
    'Eve': 55
  };
  var average = students.values.reduce((a, b) => a + b) / students.length;
  var highest = students.entries.reduce((a, b) => a.value > b.value ? a : b);
  var lowest = students.entries.reduce((a, b) => a.value < b.value ? a : b);
  var passed = students.values.where((grade) => grade >= 60).length;
  print("""
  Students: $students
  Average grade: ${average.toStringAsFixed(2)}
  Highest: ${highest.key} with ${highest.value}
  Lowest: ${lowest.key} with ${lowest.value}
  Passed (>= 60): $passed out of ${students.length}
  """);

  // Exercise 5
  print("Exercise 5: Create a list of temperatures in Celsius. Convert all to Fahrenheit, find the hottest and coldest, and calculate the temperature range.");
  List<double> celsius = [0, 15, 25, 30, -5, 38];
  var fahrenheit = celsius.map((c) => c * 9 / 5 + 32).toList();
  var hottest = fahrenheit.reduce((a, b) => a > b ? a : b);
  var coldest = fahrenheit.reduce((a, b) => a < b ? a : b);
  var range = hottest - coldest;
  print("""
  Celsius: $celsius
  Fahrenheit: ${fahrenheit.map((f) => f.toStringAsFixed(1)).toList()}
  Hottest: ${hottest.toStringAsFixed(1)}°F
  Coldest: ${coldest.toStringAsFixed(1)}°F
  Range: ${range.toStringAsFixed(1)}°F
  """);

  // Exercise 6
  print("Exercise 6: Given two sets of numbers, find their union, intersection, and difference. Print all three results.");
  Set<int> setA = {1, 2, 3, 4, 5};
  Set<int> setB = {4, 5, 6, 7, 8};
  var union = setA.union(setB);
  var intersection = setA.intersection(setB);
  var difference = setA.difference(setB);
  print("""
  Set A: $setA
  Set B: $setB
  Union: $union
  Intersection: $intersection
  Difference (A - B): $difference
  """);

  // Exercise 7
  print("Exercise 7: Create a map of cities to their populations. Find the most and least populated cities, and calculate total population.");
  Map<String, int> cities = {
    'New York': 8336817,
    'Tokyo': 13960000,
    'Mumbai': 12442373,
    'São Paulo': 12325232,
    'Delhi': 16753235
  };
  var mostPopulated = cities.entries.reduce((a, b) => a.value > b.value ? a : b);
  var leastPopulated = cities.entries.reduce((a, b) => a.value < b.value ? a : b);
  var totalPopulation = cities.values.reduce((a, b) => a + b);
  print("""
  Cities: $cities
  Most populated: ${mostPopulated.key} with ${mostPopulated.value}
  Least populated: ${leastPopulated.key} with ${leastPopulated.value}
  Total population: $totalPopulation
  """);

  // Exercise 8
  print("Exercise 8: Build an inventory system: map of items to (quantity, price) records. Calculate total inventory value and find the most expensive item.");
  Map<String, ({int quantity, double price})> inventory = {
    'Laptop': (quantity: 5, price: 999.99),
    'Mouse': (quantity: 50, price: 25.50),
    'Keyboard': (quantity: 30, price: 75.00),
    'Monitor': (quantity: 15, price: 350.00)
  };
  // Calcula valor total del inventario
  var totalValue = inventory.entries
      .map((e) => e.value.quantity * e.value.price)
      .reduce((a, b) => a + b);
  // Encuentra el artículo más caro
  var mostExpensive = inventory.entries
      .reduce((a, b) => a.value.price > b.value.price ? a : b);
  print("""
  Inventory:
  ${inventory.entries.map((e) => '  ${e.key}: ${e.value.quantity} units @ \$${e.value.price}').join('\n')}
  Total inventory value: \$${totalValue.toStringAsFixed(2)}
  Most expensive item: ${mostExpensive.key} at \$${mostExpensive.value.price}
  """);

  // Exercise 9
  print("Exercise 9: Take a sentence string, split into words, count frequency of each word (case-insensitive), and print words that appear more than once.");
  String sentence = "The quick brown fox jumps over the lazy dog the fox is quick";
  var words = sentence.toLowerCase().split(' ');
  Map<String, int> frequency = {};
  for (var word in words) {
    frequency[word] = (frequency[word] ?? 0) + 1;
  }
  var repeated = frequency.entries.where((e) => e.value > 1).toList();
  print("""
  Original sentence: $sentence
  Word frequency: $frequency
  Words appearing more than once:
  ${repeated.map((e) => '  ${e.key}: ${e.value} times').join('\n')}
  """);

  // Exercise 10
  print("Exercise 10: Create a list of records representing books (title, author, year, pages). Filter books from 21st century, sort by pages, and find the longest book.");
  var books = [
    (title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, pages: 310),
    (title: 'Harry Potter', author: 'J.K. Rowling', year: 1997, pages: 223),
    (title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008, pages: 374),
    (title: '1984', author: 'George Orwell', year: 1949, pages: 328),
    (title: 'The Martian', author: 'Andy Weir', year: 2011, pages: 369)
  ];
  var century21 = books.where((b) => b.year >= 2000).toList();
  century21.sort((a, b) => a.pages.compareTo(b.pages));
  var longest = century21.last;
  print("""
  All books: ${books.length}
  21st century books (sorted by pages):
  ${century21.map((b) => '  ${b.title} (${b.year}) - ${b.pages} pages').join('\n')}
  Longest book: ${longest.title} with ${longest.pages} pages
  """);

  // Exercise 11
  print("Exercise 11: Implement a simple phone book: map names to phone numbers. Add contacts, search by name (case-insensitive), update a number, and remove a contact.");
  Map<String, String> phoneBook = {
    'Alice': '555-1234',
    'Bob': '555-5678'
  };
  print("Initial phone book: $phoneBook");
  phoneBook['Charlie'] = '555-9999';
  print("After adding Charlie: $phoneBook");
  String searchName = 'alice';
  var found = phoneBook.entries.firstWhere(
    (e) => e.key.toLowerCase() == searchName.toLowerCase(),
    orElse: () => MapEntry('', 'Not found')
  );
  print("Search for '$searchName': ${found.value}");
  phoneBook.update('Bob', (value) => '555-0000');
  print("After updating Bob: $phoneBook");
  phoneBook.remove('Charlie');
  print("After removing Charlie: $phoneBook");

  // Exercise 12
  print("Exercise 12: Given a list of numbers, create groups: negatives, zeros, and positives as separate lists. Calculate the sum and average of each group.");
  List<int> numbers = [-5, 0, 3, -2, 0, 7, -1, 4, 0, 9];
  var negatives = numbers.where((n) => n < 0).toList();
  var zeros = numbers.where((n) => n == 0).toList();
  var positives = numbers.where((n) => n > 0).toList();
  
  int sumNeg = negatives.isEmpty ? 0 : negatives.reduce((a, b) => a + b);
  int sumZero = zeros.isEmpty ? 0 : zeros.reduce((a, b) => a + b);
  int sumPos = positives.isEmpty ? 0 : positives.reduce((a, b) => a + b);
  
  double avgNeg = negatives.isEmpty ? 0 : sumNeg / negatives.length;
  double avgZero = zeros.isEmpty ? 0 : sumZero / zeros.length;
  double avgPos = positives.isEmpty ? 0 : sumPos / positives.length;
  
  print("""
  Original numbers: $numbers
  Negatives: $negatives (sum: $sumNeg, avg: ${avgNeg.toStringAsFixed(2)})
  Zeros: $zeros (sum: $sumZero, avg: ${avgZero.toStringAsFixed(2)})
  Positives: $positives (sum: $sumPos, avg: ${avgPos.toStringAsFixed(2)})
  """);
}