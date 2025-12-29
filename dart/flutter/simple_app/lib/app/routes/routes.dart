import 'package:flutter/material.dart';

final List<TabConfig> tabs = [
  TabConfig(
    path: "/",
    label: "Home",
    icon: Icons.home_filled,
    title: "Home Screen",
  ),
  TabConfig(
    path: "/settings",
    label: "Settings",
    icon: Icons.settings,
    title: "Settings Screen",
  ),
];

class TabConfig {
  final String path;
  final String title;
  final String label;
  final IconData icon;

  const TabConfig({
    required this.path,
    required this.title,
    required this.label,
    required this.icon,
  });
}
