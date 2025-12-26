import 'package:flutter/material.dart';
import 'package:settings_app/preferences_keys.dart';
import 'package:shared_preferences/shared_preferences.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  bool _darkMode = false;
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
      _darkMode = prefs.getBool(PreferencesKeys.isDarkMode) ?? false;
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
    return Scaffold(
      appBar: AppBar(title: const Text('Settings')),
      body: Column(
        children: [
          SwitchListTile(
            title: const Text('Dark Mode'),
            value: _darkMode,
            onChanged: (bool darkMode) {
              setState(() => _darkMode = darkMode);
              _savePreferences(PreferencesKeys.isDarkMode, darkMode);
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
