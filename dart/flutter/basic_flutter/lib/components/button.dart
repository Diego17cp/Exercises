import 'package:flutter/material.dart';

class ButtonExample extends StatelessWidget {
  const ButtonExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Spacer(),
        ElevatedButton(
          onPressed: () => print("Button Pressed"),
          onLongPress: () => print("Button Long Pressed"),
          style: ButtonStyle(
            backgroundColor: WidgetStateProperty.all(Colors.blue),
            padding: WidgetStateProperty.all(
              const EdgeInsets.symmetric(horizontal: 24.0, vertical: 12.0),
            ),
            shape: WidgetStateProperty.all(
              RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(8.0),
              ),
            ),
            foregroundColor: WidgetStateProperty.all(Colors.white),
          ),
          child: Text('Press Me'),
        ),
        OutlinedButton(onPressed: () {}, child: Text("Outlined")),
        TextButton(onPressed: () {}, child: Text("Text Button")),
        FloatingActionButton(onPressed: () {}, child: Icon(Icons.add)),
        IconButton(onPressed: () {}, icon: Icon(Icons.add)),
        Spacer(),
      ],
    );
  }
}
