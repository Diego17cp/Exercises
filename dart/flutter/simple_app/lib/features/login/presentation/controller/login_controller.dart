import 'package:flutter_riverpod/legacy.dart';

final loginControllerProvider =
    StateNotifierProvider<LoginController, LoginState>(
      (ref) => LoginController(),
    );

class LoginState {
  final String dni;
  final String password;
  final bool isLoading;
  final String? errorMessage;

  const LoginState({
    this.dni = '',
    this.password = '',
    this.isLoading = false,
    this.errorMessage,
  });

  LoginState copyWith({
    String? dni,
    String? password,
    bool? isLoading,
    String? errorMessage,
  }) => LoginState(
    dni: dni ?? this.dni,
    password: password ?? this.password,
    isLoading: isLoading ?? this.isLoading,
    errorMessage: errorMessage,
  );
}

class LoginController extends StateNotifier<LoginState> {
  LoginController() : super(const LoginState());

  void onDniChanged(String dni) =>
      state = state.copyWith(dni: dni, errorMessage: null);
  void onPasswordChanged(String password) =>
      state = state.copyWith(password: password, errorMessage: null);

  Future<bool> login() async {
    if (state.dni.isEmpty || state.password.isEmpty) {
      state = state.copyWith(errorMessage: 'DNI and Password cannot be empty');
      return false;
    }
    if (state.dni.length < 8) {
      state = state.copyWith(errorMessage: 'DNI must be at least 8 characters');
      return false;
    }
    if (state.password.length < 6) {
      state = state.copyWith(
        errorMessage: 'Password must be at least 6 characters',
      );
      return false;
    }
    state = state.copyWith(isLoading: true, errorMessage: null);
    try {
      await Future.delayed(const Duration(seconds: 4));
      return true;
    } catch (e) {
      state = state.copyWith(errorMessage: 'Login failed. Please try again.');
      return false;
    } finally {
      state = state.copyWith(isLoading: false);
    }
  }
}
