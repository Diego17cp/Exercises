import pandas as pd

df = pd.read_csv('pandas/read_csv/datos_practica.csv', index_col=0)

# Acceder mediante índices
print(df.iloc[1, :4])

# Acceder mediante etiquetas
print(df.loc[1, 'Nombre':'Edad'])

# filter = (df['Edad'] > 30 & df['Ciudad'] == 'Madrid')
print(df[(df['Edad'] > 30) & (df['Ciudad'] == 'Madrid')])