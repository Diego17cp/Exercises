import cv2
import numpy as np
from model.load_model import get_model

model = get_model()

def center_digit(digit_img):
    _, thresh = cv2.threshold(digit_img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if not contours:
        return np.zeros((28, 28), dtype=np.uint8)
    cnt = max(contours, key=cv2.contourArea)
    x, y, w, h = cv2.boundingRect(cnt)
    digit = thresh[y:y+h, x:x+w]
    digit = cv2.resize(digit, (20, 20))
    canvas = np.zeros((28, 28), dtype=np.uint8)
    x_offset = (28 - 20) // 2
    y_offset = (28 - 20) // 2
    canvas[y_offset:y_offset+20, x_offset:x_offset+20] = digit
    return canvas

img = cv2.imread('test_imgs/test.png', cv2.IMREAD_GRAYSCALE)
img = cv2.resize(img, (280, 280))

rows, cols = 10, 10
cell_width = img.shape[1] // cols
cell_height = img.shape[0] // rows

color_img = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)

for row in range(rows):
    for col in range(cols):
        x = col * cell_width
        y = row * cell_height
        digit = img[y:y+cell_height, x:x+cell_width]

        digit = center_digit(digit)
        digit = cv2.bitwise_not(digit)
        digit = digit.astype("float32") / 255.0
        digit = digit.reshape(1, 28, 28, 1)

        pred = model.predict(digit, verbose=0)
        digit_class = pred.argmax()

        cv2.rectangle(color_img, (x, y), (x + cell_width, y + cell_height), (0, 255, 0), 1)
        cv2.putText(color_img, str(digit_class), (x + 5, y + 25),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)

cv2.imshow("Predicciones", color_img)
cv2.waitKey(0)
cv2.destroyAllWindows()
