import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:settings_app/providers/theme_provider.dart';
import 'package:settings_app/settings_screen.dart';
import 'package:settings_app/theme.dart';

void main() {
  runApp(const ProviderScope(child: MainApp()));
}

class MainApp extends ConsumerWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return MaterialApp(
        home: SettingsScreen(),
        themeMode: ref.watch(themeProvider),
        theme: AppTheme.light,
        darkTheme: AppTheme.dark
    );
  }
}
