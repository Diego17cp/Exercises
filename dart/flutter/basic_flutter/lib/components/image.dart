import 'package:flutter/material.dart';

class ImageExample extends StatelessWidget {
  const ImageExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Image.network(
          'https://avatars.githubusercontent.com/u/171994990?v=4',
          width: 300,
          height: 200,
          fit: BoxFit.cover,
        ),
        SizedBox(height: 20),
        Image.asset(
          'assets/images/dialcadev-logo-white.png',
          width: 300,
          height: 200,
          fit: BoxFit.cover,
        ),
      ],
    );
  }
}