import 'package:flutter/material.dart';

class TextExample extends StatelessWidget {
  const TextExample({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Text(
          "Hello, Dialcadev!",
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: Colors.blue,
          ),
        ),
        Text(
          "Welcome to Flutter development.",
          style: TextStyle(
            fontSize: 16,
            fontStyle: FontStyle.italic,
            color: Colors.grey,
          ),
        ),
        Text(
          "Decorated Text Example",
          style: TextStyle(
            fontSize: 20,
            decoration: TextDecoration.underline,
            decorationStyle: TextDecorationStyle.dashed,
            color: Colors.green,
          ),
        ),
        Text(
          "So big textttttttttttttttt!",
          style: TextStyle(
            fontSize: 40,
            fontWeight: FontWeight.w300,
            color: Colors.red,
          ),
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
        )
      ],
    );
  }
}