import 'package:flutter/material.dart';
import 'package:imc_calculator/core/app_colors.dart';

class GenderSelector extends StatefulWidget {
  const GenderSelector({super.key});

  @override
  State<GenderSelector> createState() => _GenderSelectorState();
}

class _GenderSelectorState extends State<GenderSelector> {
  String? selectedGender;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: GestureDetector(
            onTap: () => setState(() => selectedGender = "male"),
            child: Padding(
              padding: const EdgeInsets.only(
                left: 16,
                top: 16,
                right: 8,
                bottom: 16,
              ),
              child: Container(
                decoration: BoxDecoration(
                  color: selectedGender == "male"
                      ? AppColors.primary
                      : AppColors.dark,
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(12.0),
                  child: Column(
                    children: [
                      Icon(
                        Icons.male,
                        size: 100,
                        color: selectedGender == "male"
                            ? AppColors.accent
                            : Colors.white,
                      ),
                      Text(
                        "Male".toUpperCase(),
                        style: TextStyle(
                          color: selectedGender == "male"
                              ? AppColors.accent
                              : Colors.white,
                          fontSize: 20,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
        Expanded(
          child: GestureDetector(
            onTap: () => setState(() => selectedGender = "female"),
            child: Padding(
              padding: const EdgeInsets.only(
                left: 8,
                top: 16,
                right: 16,
                bottom: 16,
              ),
              child: Container(
                decoration: BoxDecoration(
                  color: selectedGender == "female"
                      ? AppColors.primary
                      : AppColors.dark,
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(12.0),
                  child: Column(
                    children: [
                      Icon(
                        Icons.female,
                        size: 100,
                        color: selectedGender == "female"
                            ? AppColors.accent
                            : Colors.white,
                      ),
                      Text(
                        "Female".toUpperCase(),
                        style: TextStyle(
                          color: selectedGender == "female"
                              ? AppColors.accent
                              : Colors.white,
                          fontSize: 20,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
