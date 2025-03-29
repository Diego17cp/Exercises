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