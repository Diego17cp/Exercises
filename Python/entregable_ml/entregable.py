import os
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error

csv_path = os.path.join(os.path.dirname(__file__), 'global_housing_market_extended.csv')
df = pd.read_csv(csv_path)

features = ['Rent Index', 'Affordability Ratio', 'Mortgage Rate (%)', 'Inflation Rate (%)','GDP Growth (%)', 'Population Growth (%)', 'Urbanization Rate (%)', 'Construction Index']
target = 'House Price Index'

# Verificar cuantos valores nulos hay en cada columna
print(df[features + [target]].isnull().sum())
# Eliminar filas con valores nulos
df = df.dropna(subset=features + [target])

X = df[features].values
y = df[target].values

print(f"X shape: {X.shape}, y shape: {y.shape}")

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

mse = mean_squared_error(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)


print("\nReal Price\tPredicted Price\tError Absoluto")
print("-" * 50)
for real, pred in zip(y_test[:20], y_pred[:20]):
    error = abs(real - pred)
    print(f"{real:.2f}\t\t{pred:.2f}\t\t{error:.2f}")

# Resumen global
print("\nResumen:")
print(f"MAE: {mae:.2f}")
print(f"MSE: {mse:.2f}")
print(f"R2 Score: {r2:.4f}")


media = np.mean(y)
mediana = np.median(y)
desv_std = np.std(y)

print(f'\nMedia de precios: {media:.2f}')
print(f'Mediana de precios: {mediana:.2f}')
print(f'Desviación estándar de precios: {desv_std:.2f}')

var_manual = np.mean((y - media)**2)
std_manual = np.sqrt(var_manual)

print(f'\nVarianza (manual): {var_manual:.2f}')
print(f'Desviación Estándar (manual): {std_manual:.2f}')