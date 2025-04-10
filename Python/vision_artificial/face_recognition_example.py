import cv2
import os

# Cargar el modelo de detección de caras (Haar cascades)
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Inicializar la cámara con manejo de errores
video_capture = cv2.VideoCapture(0)
if not video_capture.isOpened():
    print("Error: No se pudo acceder a la cámara.")
    exit()

# Parámetros para calcular la distancia
KNOWN_DISTANCE = 50.0  # Distancia conocida en cm
KNOWN_WIDTH = 14.0  # Ancho promedio de una cara humana en cm
FOCAL_LENGTH = 600  # Longitud focal calibrada (ajustar según la cámara)

# Parámetros ajustables
scale_factor = 1.1
min_neighbors = 5

# Crear carpeta para guardar imágenes si no existe
output_dir = "captured_faces"
os.makedirs(output_dir, exist_ok=True)

frame_count = 0  # Contador de cuadros para guardar imágenes

while True:
    # Capturar un cuadro de la cámara
    ret, frame = video_capture.read()
    if not ret:
        print("Advertencia: No se pudo leer el cuadro de la cámara.")
        continue  # Intentar leer el siguiente cuadro

    # Convertir a escala de grises para la detección de caras
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detectar caras en el cuadro
    faces = face_cascade.detectMultiScale(gray, scaleFactor=scale_factor, minNeighbors=min_neighbors, minSize=(30, 30))

    # Dibujar las caras detectadas y calcular distancias
    for (x, y, w, h) in faces:
        distance = (KNOWN_WIDTH * FOCAL_LENGTH) / w
        distance_text = f"Distancia: {distance:.2f} cm"
        cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)
        cv2.putText(frame, distance_text, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 1)

    # Mostrar el número de caras detectadas
    cv2.putText(frame, f"Caras detectadas: {len(faces)}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 255), 2)

    # Mostrar el cuadro procesado
    cv2.imshow("Detección de Caras y Análisis", frame)

    # Manejo de teclas
    key = cv2.waitKey(1) & 0xFF
    if key == ord('q'):  # Salir con la tecla 'q'
        break
    elif key == ord('s'):  # Guardar imagen con la tecla 's'
        frame_count += 1
        filename = os.path.join(output_dir, f"face_capture_{frame_count}.jpg")
        cv2.imwrite(filename, frame)
        print(f"Imagen guardada: {filename}")
    elif key == ord('+'):  # Incrementar scale_factor
        scale_factor = min(scale_factor + 0.1, 2.0)
        print(f"Factor de escala ajustado a: {scale_factor:.1f}")
    elif key == ord('-'):  # Decrementar scale_factor
        scale_factor = max(scale_factor - 0.1, 1.1)
        print(f"Factor de escala ajustado a: {scale_factor:.1f}")
    elif key == ord('n'):  # Incrementar min_neighbors
        min_neighbors += 1
        print(f"Vecinos mínimos ajustados a: {min_neighbors}")
    elif key == ord('m'):  # Decrementar min_neighbors
        min_neighbors = max(min_neighbors - 1, 1)
        print(f"Vecinos mínimos ajustados a: {min_neighbors}")

# Liberar la cámara y cerrar ventanas
video_capture.release()
cv2.destroyAllWindows()
