import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:superhero_app/data/model/superhero_detail_response.dart';

class SuperheroDetailScreen extends StatelessWidget {
  final SuperheroDetailResponse superhero;

  const SuperheroDetailScreen({super.key, required this.superhero});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('${superhero.name} Details')),
      body: Column(
        children: [
          CachedNetworkImage(
            imageUrl: superhero.url,
            height: 300,
            fit: BoxFit.cover,
            width: double.infinity,
            alignment: Alignment(0, -0.5),
            placeholder: (context, url) => const CircularProgressIndicator(),
            errorWidget: (context, url, error) =>
                const Icon(Icons.error, size: 120),
          ),
          Text(
            superhero.name,
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
          ),
          Text(
            superhero.fullName,
            style: TextStyle(fontSize: 18, fontStyle: FontStyle.italic),
          ),
          SizedBox(
            width: double.infinity,
            height: 130,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Column(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Container(
                      height: double.parse(superhero.powerStats.power),
                      width: 20,
                      color: Colors.red,
                    ),
                    Text("Power"),
                  ],
                ),
                Column(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Container(
                      height: double.parse(superhero.powerStats.strength),
                      width: 20,
                      color: Colors.grey,
                    ),
                    Text("strength"),
                  ],
                ),
                Column(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Container(
                      height: double.parse(superhero.powerStats.intelligence),
                      width: 20,
                      color: Colors.blue,
                    ),
                    Text("Intelligence"),
                  ],
                ),
                Column(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Container(
                      height: double.parse(superhero.powerStats.power),
                      width: 20,
                      color: Colors.amberAccent,
                    ),
                    Text("Power"),
                  ],
                ),
                Column(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Container(
                      height: double.parse(superhero.powerStats.durability),
                      width: 20,
                      color: Colors.deepOrange,
                    ),
                    Text("Durability"),
                  ],
                ),
                Column(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Container(
                      height: double.parse(superhero.powerStats.combat),
                      width: 20,
                      color: Colors.black,
                    ),
                    Text("Combat"),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
