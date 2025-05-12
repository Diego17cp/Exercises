import cv2

def preprocess_image(img_path):
    img = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)
    _, thresh = cv2.threshold(img, 128, 255, cv2.THRESH_BINARY_INV)
    return thresh

def extract_digits(thresh):
    contours, _ = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    digits = []
    for cnt in contours:
        x, y, w, h = cv2.boundingRect(cnt)
        if w * h < 100:  # Ajusta este valor según tu caso
            continue
        digit = thresh[y:y+h, x:x+w]
        digit = cv2.resize(digit, (28, 28))
        digit = digit.reshape(1, 28, 28, 1).astype('float32') / 255.0
        digits.append((digit, (x, y, w, h)))
    return digits

