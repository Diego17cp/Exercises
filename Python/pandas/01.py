import pandas as pd

# Series
naranjas = [3, 2, 0, 1]
sr_naranjas = pd.Series(naranjas)
print(sr_naranjas)
# Series con diccionarios
precios = {
    'naranjas': 2.5, 
    'manzanas': 3.0, 
    'peras': 2.0
}
sr_precios = pd.Series(precios)
print(sr_precios)
# Tamaño de elementos en una serie
print(sr_precios.size)
# Lista con los nombres de las filas (para diccionarios)
print(sr_precios.index)
print(sr_naranjas.index)

# Acceder a los elementos de una serie por su índice o nombre
print(sr_precios[0])
print(sr_precios['naranjas'])
print(sr_naranjas[1])

# Métodos series
# Suma de los elementos de una serie
tot = sr_precios.sum()
print(tot)
# Mayor val de una serie
max_val = sr_precios.max()
print(max_val)
# Menor val de una serie
min_val = sr_precios.min()
print(min_val)
# Describe una serie
desc = sr_precios.describe()
print(desc)
# Filtros en series
filtro = sr_precios > 2.0
print(sr_precios[filtro])

# Valor escalar
data = 5
sr_data = pd.Series(data, index=['a', 'b', 'c', 'd'])
print(sr_data)

data_list = ['Hola', 'Mundo', 'Python']
idxs = ['a', 'b', 'c']
sr_data_list = pd.Series(data_list, index=idxs)
print(sr_data_list)