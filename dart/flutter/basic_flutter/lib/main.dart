import 'package:basic_flutter/components/index.dart';
import 'package:basic_flutter/layouts/index.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Basic Flutter App'),
          backgroundColor: const Color.fromARGB(255, 36, 100, 191),
          foregroundColor: Colors.white,
          actions: [
            IconButton(
              icon: const Icon(Icons.info),
              onPressed: () {
                // Action when the button is pressed
              },
            ),
          ],
        ),
        backgroundColor: Color.fromARGB(255, 36, 100, 191),
        body: ImageExample(),
      ),
    );
  }
}
