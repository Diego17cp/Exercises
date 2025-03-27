from tensorflow import keras
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import fetch_california_housing

data = fetch_california_housing()
X, y = data.data, data.target

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

model = keras.Sequential([
    keras.layers.Dense(128, activation='relu', input_shape=[X_train.shape[1]], kernel_initializer='he_normal', kernel_regularizer=keras.regularizers.l2(0.001)),
    keras.layers.BatchNormalization(),
    keras.layers.Dense(64, activation='relu', kernel_initializer='he_normal', kernel_regularizer=keras.regularizers.l2(0.001)),
    keras.layers.BatchNormalization(),
    keras.layers.Dropout(0.3),
    keras.layers.Dense(1)
])

model.compile(optimizer=keras.optimizers.Adam(learning_rate=0.0003), loss='mse', metrics=['mae'])

early_stopping = keras.callbacks.EarlyStopping(monitor='val_loss', patience=10, restore_best_weights=True)
reduce_lr = keras.callbacks.ReduceLROnPlateau(monitor='val_loss', factor=0.5, patience=5, min_lr=1e-5)
history = model.fit(X_train, y_train, epochs=200, validation_data=(X_test, y_test), batch_size=32, callbacks=[early_stopping, reduce_lr])
test_loss, test_mae = model.evaluate(X_test, y_test)
print(f'\nTest MAE: ${test_mae:.2f}')
predictions = model.predict(X_test[:5])
print("Predicciones:", predictions.flatten())
print("Valores reales:", y_test[:5])
for i in range(5):
    print(f"Predicción: ${predictions[i][0] * 100000:.2f}, Valor real: ${y_test[i] * 100000:.2f}")

plt.figure(figsize=(10, 5))
plt.plot(history.history['loss'], label='Pérdida de Entrenamiento')
plt.plot(history.history['val_loss'], label='Pérdida de Validación')
plt.xlabel('Epocas')
plt.ylabel('Pérdida')
plt.legend()
plt.title('Pérdida al rededor de las épocas')
plt.show()
