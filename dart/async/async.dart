void main(){
  // ========== ASYNCHRONOUS PROGRAMMING ==========
  // Future is like Promise in JavaScript
  // Creating a Future that completes after 2 seconds
  Future<String> fetchData() {
    // In Js:
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => { resolve('Data loaded'); }, 2000);
    // });
    return Future.delayed(Duration(seconds: 2), () => 'Data loaded');
  }
  fetchData().then((data) {
    print(data); // Output after 2 seconds: Data loaded
  });

  // Fetch data, transform in json format, and handle errors with just one Future chain
  Future<void> fetchAndProcessData() {
    return fetchData()
        .then((data) {
          print('Raw data: $data');
          // Simulate JSON transformation
          return '{"data": "$data"}';
        })
        .then((jsonData) {
          print('Transformed to JSON: $jsonData');
        })
        .catchError((error) {
          print('Error occurred: $error');
        });
  }
  // In Js:
  // fetchData()
  //   .then(data => { 
  //     console.log('Raw data: ' + data);
  //     return JSON.stringify({ data: data });
  //   })
  //   .then(jsonData => {
  //     console.log('Transformed to JSON: ' + jsonData);
  //   })
  //   .catch(error => {
  //     console.error('Error occurred: ' + error);
  //   });
  fetchAndProcessData();

  // ========== ASYNC/AWAIT ==========
  // Using async/await to handle asynchronous code
  // await can only be used in async functions
  // await don't block the main thread
  Future<void> loadData() async {
    try {
      String data = await fetchData();
      print('Data loaded with async/await: $data');
    } catch (error) {
      print('Error occurred in async/await: $error');
    }
  }
  loadData();

  // Manage multiple exceptions in async functions
  Future<void> manageMultipleExceptions() async {
    try {
      String data = await fetchData();
      print('First fetch successful: $data');
      // Simulate another async operation that fails
      await Future.delayed(Duration(seconds: 1), () {
        throw Exception('Second fetch failed');
      });
    } on Exception catch (e) {
      print('Caught an exception: $e');
    } on Error catch (e) {
      print('Caught an error: $e');
    }
    catch (e) {
      print('Caught a general error: $e');
    }
  }
  manageMultipleExceptions();
}