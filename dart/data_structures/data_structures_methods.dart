void main(){
  // ========== LIST METHODS & PROPERTIES ==========
  List<int> numbers = [1, 2, 3, 4, 5];
  print("""
  ======= PROPERTIES =======
  Original List: ${numbers.join(', ')}
  Length: ${numbers.length}
  First Element: ${numbers.first}
  Last Element: ${numbers.last}
  Is Empty: ${numbers.isEmpty}
  Is Not Empty: ${numbers.isNotEmpty}
  ======= MODIFICATION METHODS =======
  Add 6: ${numbers..add(6)}
  Add All [7, 8]: ${numbers..addAll([7, 8])}
  Insert 0 at index 0: ${numbers..insert(0, 0)}
  Remove 3 (first occurrence and return boolean if successful): ${numbers.remove(3)}
  Remove 10 (not in list, returns false): ${numbers.remove(10)}
  Remove At index 2 (returns the removed element): ${numbers.removeAt(2)}
  Remove Last (returns the removed element): ${numbers.removeLast()}
  ======= SEARCHING METHODS =======
  Contains 4: ${numbers.contains(4)}
  Index Of 5: ${numbers.indexOf(5)}
  Reverse List: ${numbers.reversed.toList()}
  Where greater than 4 (Iterate the elements and return a new list with elements greater than 4): ${numbers.where((n) => n > 4).toList()}
  There are any element greater than 5: ${numbers.any((n) => n > 5)}
  There are every element less than 10: ${numbers.every((n) => n < 10)}
  ======= TRANSFORMATION METHODS =======
  Reduce (sum of all elements): ${numbers.reduce((a, b) => a + b)}
  Fold (Sum of all elements, starting with 0): ${numbers.fold(0, (a, b) => a + b)}
  Map (Return a new list with elements multiplied by 2, useful for transformations): ${numbers.map((n) => n * 2).toList()}
  ForEach (Print each element, useful for side effects): ${numbers..forEach((n) => print(n))}
  Sort (Sort the list in ascending order): ${numbers..sort()}
  Join (Concatenate elements into a string with a separator): ${numbers.join(', ')}
  Clear List: ${numbers..clear()}
  Final List after Clear: $numbers
  """);

  // ========== SET METHODS & PROPERTIES ==========
  Set<String> colors = {'red', 'green', 'blue'};
  print("""
  ======= PROPERTIES =======
  Original Set: ${colors.join(', ')}
  Length: ${colors.length}
  Is Empty: ${colors.isEmpty}
  Is Not Empty: ${colors.isNotEmpty}
  ======= MODIFICATION METHODS =======
  Add 'yellow': ${colors..add('yellow')}
  Add All {'orange', 'purple'}: ${colors..addAll({'orange', 'purple'})}
  Remove 'green' (returns boolean if successful): ${colors.remove('green')}
  Remove 'pink' (not in set, returns false): ${colors.remove('pink')}
  ======= SEARCHING METHODS =======
  Contains 'blue': ${colors.contains('blue')}
  Where colors starting with 'r' (Iterate the elements and return a new set): ${colors.where((c) => c.startsWith('r')).toSet()}
  There are any color 'yellow': ${colors.any((c) => c == 'yellow')}
  There are every color with length > 2: ${colors.every((c) => c.length > 2)}
  ======= TRANSFORMATION METHODS =======
  Map (Return a new set with colors in uppercase): ${colors.map((c) => c.toUpperCase()).toSet()}
  ForEach (Print each color, useful for side effects): ${colors..forEach((c) => print(c))}
  Remove Where colors with length > 5: ${colors..removeWhere((c) => c.length > 5)}
  Remove Value 'red': ${colors..remove('red')}
  Clear Set: ${colors..clear()}
  """);

  // ========== MAP METHODS & PROPERTIES ==========
  Map<String, int> ages = {'Diego': 19, 'Bob': 25};
  print("""
  ======= PROPERTIES =======
  Original Map: ${ages.entries.map((e) => '${e.key}: ${e.value}').join(', ')}
  Length: ${ages.length}
  Is Empty: ${ages.isEmpty}
  Is Not Empty: ${ages.isNotEmpty}
  Keys: ${ages.keys.join(', ')}
  Values: ${ages.values.join(', ')}
  Keys & Values as List: ${ages.entries.map((e) => '${e.key}: ${e.value}').toList()}
  ======= MODIFICATION METHODS =======
  Add 'Alice': 30 (Return the assigned value): ${ages['Alice'] = 30}
  Update 'Bob' to 26 (Return the updated value): ${ages.update('Bob', (value) => 26)}
  Other way to update 'Diego' to 20: ${ages['Diego'] = 20}
  Remove 'Alice' (returns the removed value): ${ages.remove('Alice')}
  ======= SEARCHING METHODS =======
  Contains Key 'Bob': ${ages.containsKey('Bob')}
  Contains Value 20: ${ages.containsValue(20)}
  Put If Absent (Update if exists, if not add it) 'Charlie': 22: ${ages.putIfAbsent('Charlie', () => 22)}
  ======= TRANSFORMATION METHODS =======
  ForEach (Print each key-value pair, useful for side effects): ${ages..forEach((key, value) => print('$key is $value years old'))}
  Clear Map: ${ages..clear()}
  Final Map after Clear: $ages
  """);
}