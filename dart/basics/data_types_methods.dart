void main(){
  // ========== STRING METHODS ==========
  String myString = 'Hello, Dart!';
  print("""
  Original String: $myString
  Length: ${myString.length}
  Uppercase: ${myString.toUpperCase()}
  Lowercase: ${myString.toLowerCase()}
  Contains 'Dart' (case-sensitive) : ${myString.contains('Dart')}
  Is Empty: ${myString.isEmpty}
  Is not Empty: ${myString.isNotEmpty}
  Trims: '${myString.trim()}'
  Trim left: '${myString.trimLeft()}'
  Trim right: '${myString.trimRight()}'
  Replace 'Dart' with 'Flutter': ${myString.replaceAll('Dart', 'Flutter')}
  Replace first 'l' with 'L': ${myString.replaceFirst('l', 'L')}
  Split by space: ${myString.split(' ')}\
  Substring (0,5) (Should know the exact length to avoid errors): ${myString.substring(0,5)}
  'Dart' starts with 'Da': ${myString.startsWith('Da')}
  'Dart' ends with 'rt': ${myString.endsWith('rt')}
  Index of 'Dart': ${myString.indexOf('Dart')}
  Last index of 'l': ${myString.lastIndexOf('l')}
  Compare to 'Hello, dart!' (0 means equal, negative means less, positive means greater): ${myString.compareTo('Hello, dart!')}
  Pad left to length 20 with '*': '${myString.padLeft(20, '*')}'
  Pad right to length 20 with '-': '${myString.padRight(20, '-')}'
  """);
  // ========== NUMBER METHODS ==========
  var myNum = 17;
  var myDouble = 3.14;
  print("""
  Original Number: $myNum
  Is Even (Just for integers): ${myNum.isEven}
  Is Odd (Just for integers): ${myNum.isOdd}
  Is Infinite: ${myNum.isInfinite}
  Is NaN: ${myNum.isNaN}
  Is Finite: ${myNum.isFinite}
  Is Negative: ${myNum.isNegative}
  Double Value: $myDouble
  Double to Int (Truncated, removes decimal part): ${myDouble.toInt()}
  To Double: ${myNum.toDouble()}
  To String (Just for integers): ${myNum.toString()}
  Round (Most close integer, more accurate): ${myDouble.round()}
  Floor (Lower integer): ${myDouble.floor()}
  Ceil (Higher integer): ${myDouble.ceil()}
  Truncate (Removes decimal part, useful for removing decimals without rounding): ${myDouble.truncate()}
  Abs Value: ${(-myNum).abs()}
  Signum (1 if positive, -1 if negative, 0 if zero): ${myNum.sign}
  Compare to 10 (0 means equal, negative means less, positive means greater): ${myNum.compareTo(10)}
  Clamp between 10 and 20 (Keeps the number within the range): ${myNum.clamp(10, 20)}
  Parse from String '42': ${int.parse('42')}
  Parse from String '3.14': ${double.parse('3.14')}
  Try Parse from String 'not a number' (Returns null if parsing fails): ${int.tryParse('not a number')}
  """);
}