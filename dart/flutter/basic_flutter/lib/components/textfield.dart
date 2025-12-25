import 'package:flutter/material.dart';

class TextFieldExample extends StatelessWidget {
  const TextFieldExample({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        SizedBox(
          height: 60,
        ),
        Padding(
          padding: EdgeInsets.all(8.0),
          child: TextField(
            decoration: InputDecoration(
              hintText: 'Enter your name',
              border: OutlineInputBorder(),
              prefixIcon: Icon(Icons.person_3)
            ),
          ),
        ),
        Padding(
          padding: EdgeInsets.all(8.0),
          child: TextField(
            obscureText: true,
            decoration: InputDecoration(
              hintText: 'Enter your password',
              border: OutlineInputBorder(),
              prefixIcon: Icon(Icons.lock)
            ),
          ),
        ),
        Padding(padding: EdgeInsets.all(8.0),
          child: TextField(
            maxLines: 1,
            maxLength: 10,
            keyboardType: TextInputType.multiline,
            decoration: InputDecoration(
              hintText: 'Enter a message',
              border: OutlineInputBorder(),
              prefixIcon: Icon(Icons.message)
            ),
          ),
        ),
      ],
    );
  }
}