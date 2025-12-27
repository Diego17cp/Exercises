import 'package:flutter/material.dart';

class AppTheme {
  static ThemeData light = ThemeData(
    brightness: Brightness.light,
    colorSchemeSeed: const Color(0xFF085691),
    useMaterial3: true,
  );
  static ThemeData dark = ThemeData(
    brightness: Brightness.dark,
    colorSchemeSeed: const Color(0xFF085691),
    useMaterial3: true,
  );
}
