import 'package:flutter/material.dart';
import 'package:imc_calculator/core/app_colors.dart';
import 'package:imc_calculator/core/text_styles.dart';

class NumberSelector extends StatefulWidget {
  final String title;
  final Function(int) onChanged;
  final int initialValue;

  const NumberSelector({
    super.key,
    required this.title,
    this.initialValue = 0,
    required this.onChanged,
  });

  @override
  State<NumberSelector> createState() => _NumberSelectorState();
}

class _NumberSelectorState extends State<NumberSelector> {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: AppColors.dark,
        borderRadius: BorderRadius.circular(16),
      ),
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          children: [
            Text(widget.title, style: TextStyles.bodyText),
            Text(
              "${widget.initialValue}",
              style: TextStyle(
                fontSize: 38,
                color: Colors.white,
                fontWeight: FontWeight.bold,
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                FloatingActionButton(
                  heroTag: null,
                  onPressed: () => widget.onChanged(widget.initialValue - 1),
                  shape: CircleBorder(),
                  backgroundColor: AppColors.accent,
                  child: Icon(Icons.remove, color: Colors.white, size: 30),
                ),
                SizedBox(width: 16),
                FloatingActionButton(
                  heroTag: null,
                  onPressed: () => widget.onChanged(widget.initialValue + 1),
                  shape: CircleBorder(),
                  backgroundColor: AppColors.accent,
                  child: Icon(Icons.add, color: Colors.white, size: 30),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
