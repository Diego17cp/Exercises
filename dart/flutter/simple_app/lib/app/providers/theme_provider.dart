import 'package:flutter/material.dart';
import 'package:flutter_riverpod/legacy.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:simple_app/core/config/shared_preferences_keys.dart';

final themeProvider = StateNotifierProvider<ThemeController, ThemeMode>(
  (ref) => ThemeController(),
);

class ThemeController extends StateNotifier<ThemeMode> {
  ThemeController() : super(ThemeMode.system) {
    _loadThemeMode();
  }

  Future<void> _loadThemeMode() async {
    final prefs = await SharedPreferences.getInstance();
    final themeMode = prefs.getString(SharedPreferencesKeys.themeMode);
    switch (themeMode) {
      case 'light':
        state = ThemeMode.light;
        break;
      case 'dark':
        state = ThemeMode.dark;
        break;
      default:
        state = ThemeMode.system;
    }
  }

  Future<void> setLightMode() async {
    state = ThemeMode.light;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(SharedPreferencesKeys.themeMode, 'light');
  }
  Future<void> setDarkMode() async {
    state = ThemeMode.dark;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(SharedPreferencesKeys.themeMode, 'dark');
  }
  Future<void> setSystemMode() async {
    state = ThemeMode.system;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(SharedPreferencesKeys.themeMode, 'system');
  }
  Future<void> setThemeMode(ThemeMode mode) async {
    state = mode;
    switch (mode) {
      case ThemeMode.light:
        await setLightMode();
        break;
      case ThemeMode.dark:
        await setDarkMode();
        break;
      case ThemeMode.system:
        await setSystemMode();
        break;
    }
  }
}