import 'dart:convert';

import 'package:superhero_app/config/environment_config.dart';
import 'package:superhero_app/data/model/superhero_response.dart';
import 'package:http/http.dart' as http;

class Repository {
  String accessToken = Environmentconfig.apiAccessToken;

  Future<SuperheroResponse?> fetchSuperheroInfo(String name) async {
    final response = await http.get(
      Uri.parse('https://superheroapi.com/api/$accessToken/search/$name'),
    );
    if (response.statusCode == 200) {
      var decoded = jsonDecode(response.body);
      return SuperheroResponse.fromJson(decoded);
    } else {
      return null;
    }
  }
}
