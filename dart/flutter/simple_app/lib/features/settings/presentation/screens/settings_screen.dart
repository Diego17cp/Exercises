import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:simple_app/app/providers/theme_provider.dart';

class SettingsScreen extends ConsumerWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final currentTheme = ref.watch(themeProvider);

    String getThemeLabel(ThemeMode mode) {
      switch (mode) {
        case ThemeMode.light:
          return 'Light';
        case ThemeMode.dark:
          return 'Dark';
        case ThemeMode.system:
          return 'System';
      }
    }

    void showThemeDialog() {
      showDialog(
        context: context,
        builder: (dialogContext) => AlertDialog(
          title: const Text('Choose Theme'),
          content: RadioGroup<ThemeMode>(
            groupValue: currentTheme,
            onChanged: (value) {
              if (value != null) {
                ref.read(themeProvider.notifier).setThemeMode(value);
                Navigator.of(dialogContext).pop();
              }
            },
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: ThemeMode.values.map((mode) {
                return ListTile(
                  contentPadding: EdgeInsets.zero,
                  title: Text(getThemeLabel(mode)),
                  leading: Radio<ThemeMode>.adaptive(
                    value: mode,
                  ),
                  onTap: () {
                    ref.read(themeProvider.notifier).setThemeMode(mode);
                    Navigator.of(dialogContext).pop();
                  },
                );
              }).toList(),
            ),
          ),
        ),
      );
    }

    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        GestureDetector(
          onTap: showThemeDialog,
          child: Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              border: Border.all(
                color: Theme.of(context).dividerColor,
                width: 1,
              ),
              borderRadius: BorderRadius.circular(8),
            ),
            child: Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Toggle Theme',
                        style: Theme.of(context).textTheme.titleMedium?.copyWith(
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        'Current: ${getThemeLabel(currentTheme)}',
                        style: Theme.of(context).textTheme.bodySmall?.copyWith(
                              color: Theme.of(context)
                                  .textTheme
                                  .bodySmall
                                  ?.color
                                  ?.withOpacity(0.6),
                            ),
                      ),
                    ],
                  ),
                ),
                Icon(
                  Icons.arrow_forward_ios,
                  size: 16,
                  color: Theme.of(context).iconTheme.color?.withOpacity(0.5),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}