class SuperheroDetailResponse {
  final String id;
  final String name;
  final String url;
  final String fullName;
  final PowerStatsResponse powerStats;

  SuperheroDetailResponse({
    required this.id,
    required this.name,
    required this.url,
    this.fullName = '',
    required this.powerStats,
  });

  factory SuperheroDetailResponse.fromJson(Map<String, dynamic> json) {
    return SuperheroDetailResponse(
      id: json['id'] as String,
      name: json['name'] as String,
      url: json['image']['url'] as String,
      fullName: json['biography']['full-name'] as String? ?? '',
      powerStats: PowerStatsResponse.fromJson(json['powerstats'] as Map<String, dynamic>),
    );
  }
}

class PowerStatsResponse {
  final String intelligence;
  final String strength;
  final String speed;
  final String durability;
  final String power;
  final String combat;

  PowerStatsResponse({
    required this.intelligence,
    required this.strength,
    required this.speed,
    required this.durability,
    required this.power,
    required this.combat,
  });

  factory PowerStatsResponse.fromJson(Map<String, dynamic> json) {
    return PowerStatsResponse(
      intelligence: json['intelligence'] as String,
      strength: json['strength'] as String,
      speed: json['speed'] as String,
      durability: json['durability'] as String,
      power: json['power'] as String,
      combat: json['combat'] as String,
    );
  }
}
