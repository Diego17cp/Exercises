import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:settings_app/preferences_keys.dart';
import 'package:settings_app/providers/theme_provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

class SettingsScreen extends ConsumerStatefulWidget {
  const SettingsScreen({super.key});

  @override
  ConsumerState<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends ConsumerState<SettingsScreen> {
  String _language = "es";
  double _fontSize = 16.0;

  @override
  void initState() {
    super.initState();
    _loadPreferences();
  }

  void _loadPreferences() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _language = prefs.getString(PreferencesKeys.language) ?? "es";
      _fontSize = prefs.getDouble(PreferencesKeys.fontSize) ?? 16.0;
    });
  }

  void _savePreferences(String key, dynamic value) async {
    final prefs = await SharedPreferences.getInstance();
    if (value is bool) {
      await prefs.setBool(key, value);
    } else if (value is String) {
      await prefs.setString(key, value);
    } else if (value is double) {
      await prefs.setDouble(key, value);
    }
  }

  @override
  Widget build(BuildContext context) {
    final themeMode = ref.watch(themeProvider);
    final isDarkMode = themeMode == ThemeMode.dark;
    return Scaffold(
      appBar: AppBar(title: const Text('Settings')),
      body: Column(
        children: [
          SwitchListTile(
            title: const Text('Dark Mode'),
            value: isDarkMode,
            onChanged: (bool value) {
              ref.read(themeProvider.notifier).toggleTheme();
            },
          ),
          Padding(
            padding: const EdgeInsets.only(
              top: 8.0,
              left: 16.0,
              right: 16.0,
              bottom: 8.0,
            ),
            child: DropdownButtonFormField(
              initialValue: _language,
              items: [
                DropdownMenuItem(value: "es", child: Text("Español")),
                DropdownMenuItem(value: "en", child: Text("English")),
                DropdownMenuItem(value: "fr", child: Text("Français")),
              ],
              onChanged: (String? language) {
                if (language != null) {
                  setState(() => _language = language);
                  _savePreferences(PreferencesKeys.language, language);
                }
              },
              decoration: InputDecoration(label: Text("Language")),
            ),
          ),
          Text('Font Size: ${_fontSize.toInt()}'),
          Slider(
            min: 10,
            max: 30,
            value: _fontSize,
            onChanged: (fontSize) {
              setState(() => _fontSize = fontSize);
              _savePreferences(PreferencesKeys.fontSize, fontSize);
            },
          ),
        ],
      ),
    );
  }
}
