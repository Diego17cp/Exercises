class User {
  // Properties
  //* There are no access modifiers like private, public, or protected in Dart. All class members are public by default.
  String name;
  int age;
  //* For private members, you can use an underscore (_) prefix.
  String _password = 'secret';

  // Constructor
  User(this.name, this.age, this._password);

  // Method
  void displayInfo() {
    print('Name: $name, Age: $age, Password: $_password');
  }
}

// Encapsulation Example
class BankAccount {
  String accountNumber;
  double _balance = 0.0; // Private property

  BankAccount(this.accountNumber);

  // Public method to deposit money
  void deposit(double amount) {
    if (amount > 0) {
      _balance += amount;
      print('Deposited: \$${amount.toStringAsFixed(2)}');
    } else {
      print('Deposit amount must be positive.');
    }
  }

  // Public method to get the balance
  double getBalance() => _balance;
}

// Inheritance Example
class Animal {
  void speak() => print('Animal speaks');
}
class Dog extends Animal {
  @override
  void speak() => print('Dog barks');
}

// Singleton & Static methods Example
class Database {
  // Private constructor
  Database._privateConstructor();

  // Single instance
  static final Database _instance = Database._privateConstructor();

  // Factory constructor to return the same instance
  factory Database() => _instance;

  void query(String sql) => print('Executing query: $sql');
  static Database getInstance() => _instance;
}

void main() {
  // ========== CLASSES ==========
  User user1 = User('Alice', 30, 'mypassword');
  user1.displayInfo(); // Output: Name: Alice, Age: 30

  // ========== ENCAPSULATION ==========
  BankAccount account = BankAccount('123456789');
  account.deposit(500.0);
  print('Current Balance: \$${account.getBalance().toStringAsFixed(2)}');
  // _balance is accessible here because we're in the same file (library-level privacy)
  print('Accessing private balance (same file): ${account._balance}'); // Works in same file, would error in another file
  // ========== INHERITANCE ==========
  Dog dog = Dog();
  dog.speak(); // Output: Dog barks
  // ========== SINGLETON & STATIC METHODS ==========
  // Instance of Singleton
  Database db1 = Database();
  Database db2 = Database();
  print(identical(db1, db2)); // Output: true
  // Using main instance method
  Database.getInstance().query('SELECT * FROM users');
}
