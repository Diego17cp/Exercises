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

print(f"Mean Squared Error: {mse:.2f}")
print(f"Mean Absolute Error: {mae:.2f}")
print(f"R^2 Score: {r2:.2f}")