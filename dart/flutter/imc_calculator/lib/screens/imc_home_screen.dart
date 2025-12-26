import 'package:flutter/material.dart';
import 'package:imc_calculator/components/index.dart';
import 'package:imc_calculator/core/app_colors.dart';
import 'package:imc_calculator/core/text_styles.dart';
import 'package:imc_calculator/screens/result_screen.dart';

class IMCHomeScreen extends StatefulWidget {
  const IMCHomeScreen({super.key});

  @override
  State<IMCHomeScreen> createState() => _IMCHomeScreenState();
}

class _IMCHomeScreenState extends State<IMCHomeScreen> {
  int selectedAge = 20;
  int selectedWeight = 70;
  double selectedHeight = 170;

  void onAgeChanged(int age) => setState(() => selectedAge = age);
  void onWeightChanged(int weight) => setState(() => selectedWeight = weight);
  void onHeightChanged(double height) =>
      setState(() => selectedHeight = height);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        GenderSelector(),
        HeightSelector(
          onChanged: onHeightChanged,
          initialValue: selectedHeight,
        ),
        Padding(
          padding: const EdgeInsets.all(16),
          child: Row(
            children: [
              Expanded(
                child: NumberSelector(
                  title: "Weight".toUpperCase(),
                  onChanged: onWeightChanged,
                  initialValue: selectedWeight,
                ),
              ),
              SizedBox(width: 16),
              Expanded(
                child: NumberSelector(
                  title: "Age".toUpperCase(),
                  onChanged: onAgeChanged,
                  initialValue: selectedAge,
                ),
              ),
            ],
          ),
        ),
        Spacer(),
        Padding(
          padding: const EdgeInsets.all(16.0),
          child: SizedBox(
            width: double.infinity,
            height: 60,
            child: ElevatedButton(
              onPressed: () => Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => ResultScreen(
                    age: selectedAge,
                    weight: selectedWeight,
                    height: selectedHeight,
                  ),
                ),
              ),
              style: ElevatedButton.styleFrom(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
                backgroundColor: AppColors.primary,
              ),
              child: Text("Calculate", style: TextStyles.bodyText),
            ),
          ),
        ),
      ],
    );
  }
}
