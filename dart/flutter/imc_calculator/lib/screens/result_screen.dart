import 'package:flutter/material.dart';
import 'package:imc_calculator/core/app_colors.dart';
import 'package:imc_calculator/core/text_styles.dart';

class ResultScreen extends StatelessWidget {
  final double height;
  final int weight;
  final int age;
  const ResultScreen({
    super.key,
    required this.height,
    required this.weight,
    required this.age,
  });

  @override
  Widget build(BuildContext context) {
    double imcResult = weight / ((height / 100) * (height / 100));

    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: toolbarResult(),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              "Your Result",
              style: TextStyle(
                fontSize: 40,
                fontWeight: FontWeight.bold,
                color: Colors.white,
              ),
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.only(top: 32.0, bottom: 32.0),
                child: Container(
                  width: double.infinity,
                  decoration: BoxDecoration(
                    color: AppColors.dark,
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      Text(
                        getLabelByImc(imcResult),
                        style: TextStyle(
                          fontSize: 30,
                          fontWeight: FontWeight.bold,
                          color: getColorByImc(imcResult),
                        ),
                      ),
                      Text(
                        imcResult.toStringAsFixed(2),
                        style: TextStyle(
                          fontSize: 66,
                          fontWeight: FontWeight.bold,
                          color: Colors.white,
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Text(
                          getDescriptionByImc(imcResult),
                          style: TextStyle(
                            fontSize: 22,
                            fontWeight: FontWeight.w400,
                            color: Colors.white,
                          ),
                          textAlign: TextAlign.center,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            SizedBox(
              height: 60,
              width: double.infinity,
              child: ElevatedButton(
                onPressed: () => Navigator.pop(context),
                style: ElevatedButton.styleFrom(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8),
                  ),
                  backgroundColor: AppColors.primary,
                ),
                child: Text("Go Back", style: TextStyles.bodyText),
              ),
            ),
          ],
        ),
      ),
    );
  }

  AppBar toolbarResult() {
    return AppBar(
      title: Text('IMC Result'),
      backgroundColor: AppColors.dark,
      foregroundColor: Colors.white,
    );
  }

  MaterialColor getColorByImc(double imc) {
    if (imc < 18.5) {
      return Colors.yellow;
    } else if (imc >= 18.5 && imc < 24.9) {
      return Colors.green;
    } else if (imc >= 25 && imc < 29.9) {
      return Colors.orange;
    } else {
      return Colors.red;
    }
  }

  String getLabelByImc(double imc) {
    if (imc < 18.5) {
      return "Underweight";
    } else if (imc >= 18.5 && imc < 24.9) {
      return "Normal weight";
    } else if (imc >= 25 && imc < 29.9) {
      return "Overweight";
    } else {
      return "Obesity";
    }
  }

  String getDescriptionByImc(double imc) {
    if (imc < 18.5) {
      return "You are under the normal weight range. Consider consulting a healthcare professional for advice.";
    } else if (imc >= 18.5 && imc < 24.9) {
      return "You have a normal body weight. Keep up the good work!";
    } else if (imc >= 25 && imc < 29.9) {
      return "You are slightly overweight. Consider a balanced diet and regular exercise.";
    } else {
      return "You are in the obesity range. It is advisable to seek guidance from a healthcare professional.";
    }
  }
}
