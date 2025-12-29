import 'package:flutter/material.dart';
import 'package:simple_app/app/routes/routes.dart';

class BottomNav extends StatelessWidget {

  final int currentIndex;
  final ValueChanged<int> onTap;

  const BottomNav({super.key, required this.currentIndex, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      currentIndex: currentIndex,
      onTap: onTap,
      items: tabs
          .map(
            (tab) => BottomNavigationBarItem(
              icon: Icon(tab.icon), 
              label: tab.label
            ),
          )
          .toList(),
    );
  }
}
