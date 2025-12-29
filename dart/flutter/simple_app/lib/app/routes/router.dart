import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:simple_app/app/layouts/app_scaffold.dart';

final GoRouter router = GoRouter(
  routes: [
    GoRoute(
      path: "/",
      builder: (context, state) => AppScaffold(
        title: "Home",
        body: Container(
          alignment: Alignment.center,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text("Welcome to the Home Page"),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  GoRouter.of(context).push('/settings');
                },
                child: Text("Go to Settings"),
              ),
              SizedBox(height: 10),
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
      path: "/settings",
      builder: (context, state) => AppScaffold(
        title: "Settings",
        body: Container(
          alignment: Alignment.center,
          child: Text("Welcome to the Settings Page"),
        ),
      ),
    ),
    GoRoute(
      path: "/login",
      builder: (context, state) => AppScaffold(
        title: "Login",
        body: Container(
          alignment: Alignment.center,
          child: Text("Welcome to the Login Page"),
        ),
        showBottomNavBar: false,
      ),
    ),
  ],
);
