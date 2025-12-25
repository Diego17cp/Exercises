import 'package:flutter/material.dart';

class RowExample extends StatelessWidget {
  const RowExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 8.0, top: 50.0),
      child: Container(
        child: const Row(
          children: [
            Text("Hola, Dialcadev!"),
            Expanded(child: Text("Hello, Flutter!")),
            Icon(Icons.star),
          ],
        ),
      ),
    );
  }
}
