import 'package:superhero_app/data/model/superhero_detail_response.dart';

class SuperheroResponse {
  final String response;
  final List<SuperheroDetailResponse> result;

  SuperheroResponse({required this.response, required this.result});

  factory SuperheroResponse.fromJson(Map<String, dynamic> json) {
    return SuperheroResponse(
      response: json['response'] as String,
      result: (json['results'] as List)
          .map((e) => SuperheroDetailResponse.fromJson(e))
          .toList(),
    );
  }
}
