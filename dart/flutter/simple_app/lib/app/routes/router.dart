import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:simple_app/app/layouts/app_scaffold.dart';
import 'package:simple_app/features/login/presentation/screens/login_screen.dart';
import 'package:simple_app/features/settings/presentation/screens/settings_screen.dart';

final _rootNavigatorKey = GlobalKey<NavigatorState>();
final _shellNavigatorKey = GlobalKey<NavigatorState>(debugLabel: 'shell');

final GoRouter router = GoRouter(
  navigatorKey: _rootNavigatorKey,
  initialLocation: '/',
  routes: [
    ShellRoute(
      navigatorKey: _shellNavigatorKey,
      builder: (context, state, child) => AppScaffold(child: child),
      routes: [
        GoRoute(
          path: '/',
          pageBuilder: (context, state) => NoTransitionPage(
            child: Container(
              alignment: Alignment.center,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text("Welcome to the Home Page"),
                  SizedBox(height: 20),
                  ElevatedButton(
                    onPressed: () {
                      GoRouter.of(context).push('/login');
                    },
                    child: Text("Go to Login"),
                  ),
                ],
              ),
            ),
          ),
        ),
        GoRoute(
          path: '/settings',
          pageBuilder: (_, _) =>
              NoTransitionPage(child: const SettingsScreen()),
        ),
      ],
    ),
    GoRoute(
      parentNavigatorKey: _rootNavigatorKey,
      path: '/login',
      builder: (_, _) => const LoginScreen(),
    ),
  ],
);
