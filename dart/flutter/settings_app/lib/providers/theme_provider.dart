import 'package:flutter/material.dart';
import 'package:flutter_riverpod/legacy.dart';
import 'package:settings_app/preferences_keys.dart';
import 'package:shared_preferences/shared_preferences.dart';

final themeProvider = StateNotifierProvider<ThemeController, ThemeMode>(
  (ref) => ThemeController(),
);

class ThemeController extends StateNotifier<ThemeMode> {
  ThemeController() : super(ThemeMode.light) {
    _loadTheme();
  }
  Future<void> _loadTheme() async {
    final prefs = await SharedPreferences.getInstance();
    final isDarkMode = prefs.getBool(PreferencesKeys.isDarkMode) ?? false;
    state = isDarkMode ? ThemeMode.dark : ThemeMode.light;
  }

  Future<void> setLight() async {
    state = ThemeMode.light;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool(PreferencesKeys.isDarkMode, false);
  }
  Future<void> setDark() async {
    state = ThemeMode.dark;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool(PreferencesKeys.isDarkMode, true);
  }
  Future<void> toggleTheme() async {
    if (state == ThemeMode.light) {
      await setDark();
    } else {
      await setLight();
    }
  }
}
