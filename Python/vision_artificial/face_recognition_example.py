import cv2
import os
import random

# Cargar modelos Haar Cascade
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
smile_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_smile.xml')

# Inicializar la cámara
video_capture = cv2.VideoCapture(0)
if not video_capture.isOpened():
    raise RuntimeError("Error: No se pudo acceder a la cámara.")

# Parámetros de distancia
KNOWN_DISTANCE = 50.0  # cm
KNOWN_WIDTH = 14.0     # cm
FOCAL_LENGTH = 600

# Parámetros de detección
scale_factor = 1.1
min_neighbors = 5

# Crear carpeta para imágenes
output_dir = "captured_faces"
os.makedirs(output_dir, exist_ok=True)

frame_count = 0

# Función mock para simular emociones
def simulate_emotion():
    emotions = ["Feliz", "Triste", "Enojado", "Sorprendido", "Neutral"]
    return random.choice(emotions)

# Bucle principal
while True:
    ret, frame = video_capture.read()
    if not ret:
        continue

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(
        gray,
        scaleFactor=scale_factor,
        minNeighbors=min_neighbors,
        minSize=(30, 30)
    )

    for (x, y, w, h) in faces:
        # Medición de distancia
        distance = (KNOWN_WIDTH * FOCAL_LENGTH) / w
        distance_text = f"{distance:.1f} cm"

        # Simulación de emoción
        emotion = simulate_emotion()

        # Detección de sonrisa dentro del área de la cara
        roi_gray = gray[y:y + h, x:x + w]
        smiles = smile_cascade.detectMultiScale(roi_gray, scaleFactor=1.7, minNeighbors=22)

        smiling = len(smiles) > 0
        smile_text = "Sonriendo" if smiling else "Sin sonrisa"

        # Dibujar rectángulo y texto
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 200, 255), 2)
        cv2.putText(frame, f"Dist: {distance_text}", (x, y - 40), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1)
        cv2.putText(frame, f"Emocion: {emotion}", (x, y - 25), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (50, 255, 50), 1)
        cv2.putText(frame, smile_text, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (100, 100, 255), 1)

    # Mostrar número de caras detectadas
    cv2.putText(frame, f"Caras detectadas: {len(faces)}", (10, 30),
                cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 255), 2)

    cv2.imshow("Detección de Caras + Emociones", frame)

    key = cv2.waitKey(1) & 0xFF
    if key == ord('q'):
        break
    elif key == ord('s'):
        frame_count += 1
        filename = os.path.join(output_dir, f"face_capture_{frame_count}.jpg")
        cv2.imwrite(filename, frame)
    elif key == ord('+'):
        scale_factor = min(scale_factor + 0.1, 2.0)
    elif key == ord('-'):
        scale_factor = max(scale_factor - 0.1, 1.1)
    elif key == ord('n'):
        min_neighbors += 1
    elif key == ord('m'):
        min_neighbors = max(min_neighbors - 1, 1)

video_capture.release()
cv2.destroyAllWindows()
