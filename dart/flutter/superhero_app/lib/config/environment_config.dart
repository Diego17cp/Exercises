import 'package:flutter_dotenv/flutter_dotenv.dart';

class Environmentconfig {
  static String get apiAccessToken => dotenv.env['API_ACCESS_TOKEN'] ?? '';
}