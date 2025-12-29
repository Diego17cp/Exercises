import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:simple_app/app/layouts/widgets/bottom_nav.dart';
import 'package:simple_app/app/routes/routes.dart';

class AppScaffold extends StatelessWidget {
  final Widget child;

  const AppScaffold({
    super.key,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    final String location = GoRouterState.of(context).uri.toString();
    
    int currentIndex = tabs.indexWhere((tab) {
      if (tab.path == "/") return location == "/";
      return location.startsWith(tab.path);
    });
    
    if (currentIndex == -1) currentIndex = 0;
    
    void onNavigationTap(int index) {
      if (index != currentIndex) GoRouter.of(context).push(tabs[index].path);
    }
    
    final currentTab = tabs[currentIndex];

    return Scaffold(
      appBar: AppBar(title: Text(currentTab.title)),
      body: child,
      bottomNavigationBar: BottomNav(
        currentIndex: currentIndex,
        onTap: onNavigationTap,
      ),
    );
  }
}
