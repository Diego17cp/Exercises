import 'package:flutter/material.dart';
import 'package:superhero_app/data/model/superhero_response.dart';
import 'package:superhero_app/data/repository.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:superhero_app/screens/superhero_detail_screen.dart';

class SearchScreen extends StatefulWidget {
  const SearchScreen({super.key});

  @override
  State<SearchScreen> createState() => _SearchScreenState();
}

class _SearchScreenState extends State<SearchScreen> {
  Future<SuperheroResponse?>? _superheroInfo;
  Repository repo = Repository();
  bool _isTextEmpty = true;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Superhero Search')),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              decoration: InputDecoration(
                hintText: "Search for a superhero",
                prefixIcon: const Icon(Icons.search),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(16.0),
                ),
              ),
              onChanged: (value) {
                setState(() {
                  _isTextEmpty = value.isEmpty;
                  _superheroInfo = repo.fetchSuperheroInfo(value);
                });
              },
            ),
          ),
          FutureBuilder(
            future: _superheroInfo,
            builder: (context, snapshot) {
              if (_isTextEmpty) {
                return Center(
                  child: Text('Please enter a superhero name to search.'),
                );
              }
              if (snapshot.connectionState == ConnectionState.waiting) {
                return CircularProgressIndicator();
              } else if (snapshot.hasError) {
                return Text('Error: ${snapshot.error}');
              } else if (!snapshot.hasData || snapshot.data == null) {
                return Text('No data');
              } else {
                var superheroList = snapshot.data?.result;
                return Expanded(
                  child: ListView.builder(
                    itemCount: superheroList?.length ?? 0,
                    itemBuilder: (context, index) {
                      if (superheroList != null) {
                        var superhero = superheroList[index];
                        return Padding(
                          padding: const EdgeInsets.only(
                            bottom: 8,
                            right: 16,
                            left: 16,
                            top: 8,
                          ),
                          child: GestureDetector(
                            onTap: () => Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) =>
                                    SuperheroDetailScreen(superhero: superhero),
                              ),
                            ),
                            child: Container(
                              decoration: BoxDecoration(
                                border: Border.all(color: Colors.grey),
                                borderRadius: BorderRadius.circular(8.0),
                              ),
                              child: Column(
                                children: [
                                  ClipRRect(
                                    borderRadius: BorderRadius.circular(8.0),
                                    child: CachedNetworkImage(
                                      imageUrl: superhero.url,
                                      height: 300,
                                      width: double.infinity,
                                      fit: BoxFit.cover,
                                      alignment: const Alignment(0, -0.5),
                                      placeholder: (context, url) =>
                                          const CircularProgressIndicator(),
                                      errorWidget: (context, url, error) =>
                                          const Icon(Icons.error),
                                    ),
                                  ),
                                  Padding(
                                    padding: const EdgeInsets.all(8.0),
                                    child: Text(
                                      superhero.name,
                                      style: TextStyle(
                                        fontSize: 20,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        );
                      }
                      return SizedBox.shrink();
                    },
                  ),
                );
              }
            },
          ),
        ],
      ),
    );
  }
}
