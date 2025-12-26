import 'package:flutter/material.dart';
import 'package:imc_calculator/core/app_colors.dart';
import 'package:imc_calculator/core/text_styles.dart';

class HeightSelector extends StatefulWidget {
  final Function(double) onChanged;
  final double initialValue;
  const HeightSelector({
    super.key,
    required this.onChanged,
    required this.initialValue,
  });

  @override
  State<HeightSelector> createState() => _HeightSelectorState();
}

class _HeightSelectorState extends State<HeightSelector> {

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 16.0, right: 16.0),
      child: Container(
        decoration: BoxDecoration(
          color: AppColors.dark,
          borderRadius: BorderRadius.circular(10),
        ),
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.only(top: 8.0),
              child: Text("Height".toUpperCase(), style: TextStyles.bodyText),
            ),
            Text(
              "${widget.initialValue.toStringAsFixed(0)} cm",
              style: TextStyle(
                fontSize: 38,
                color: Colors.white,
                fontWeight: FontWeight.bold,
              ),
            ),
            Slider(
              value: widget.initialValue,
              min: 100,
              max: 220,
              divisions: 120,
              onChanged: (value) => widget.onChanged(value),
              activeColor: AppColors.light,
              label: widget.initialValue.toStringAsFixed(0),
            ),
          ],
        ),
      ),
    );
  }
}
