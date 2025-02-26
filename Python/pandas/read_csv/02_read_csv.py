import pandas as pd 

df = pd.read_csv('pandas/read_csv/data.csv')
print(df)

filter = df['edad'] == 23
print(df[filter])

print(df.head(2))
print(df.tail(2))