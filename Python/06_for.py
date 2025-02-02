# Ejercicio 1: Imprimir números pares
# Imprime todos los números pares del 2 al 20 (inclusive) usando un bucle for.
print("\nEjercicio 1:")
for n in range(2, 21, 2):
    print(n)
# Can do it with a iterable if u want to do a list with 20 elements xd

# Ejercicio 2: Calcular la media de una lista
# Dada la siguiente lista de números:
# numeros = [10, 20, 30, 40, 50]
# Calcula la media de los números usando un bucle for.
print("\nEjercicio 2:")
nums = [10, 20, 30, 40, 50]
avg = 0
for num in nums:
    avg += num
avg = avg / len(nums)
print(f'The average in the {nums}\'s list is: {avg}')

# Ejercicio 3: Buscar el máximo de una lista
# Dada la siguiente lista de números:
# numeros = [15, 5, 25, 10, 20]
# Encuentra el número máximo en la lista usando un bucle for.
print("\nEjercicio 3:")
nums = [15, 5, 25, 10, 20]
# Alternative: max(nums)
max_n = 0
for n in nums:
    if max_n < n:
        max_n = n
print(f'The greater number in the {nums}\'s list is {max_n}')


# Ejercicio 4: Filtrar cadenas por longitud
# Dada la siguiente lista de palabras:
# palabras = ["casa", "arbol", "sol", "elefante", "luna"]
# Crea una nueva lista que contenga solo las palabras con más de 5 letras
# usando un bucle for y list comprehension.
print("\nEjercicio 4:")
words = ['casa', 'arbol', 'sol', 'elefante', 'luna']
five_chars_words = [
    word for word in words if len(word) >= 5
]
print(five_chars_words)

# Ejercicio 5: Contar palabras que empiezan con una letra
# Dada la siguiente lista de palabras:
# palabras = ["casa", "arbol", "sol", "elefante", "luna", "coche"]
# Pide al usuario que introduzca una letra.
# Cuenta cuántas palabras en la lista empiezan con esa letra (sin diferenciar mayúsculas/minúsculas).
print("\nEjercicio 5:")

words = ['casa', 'arbol', 'sol', 'elefante', 'luna', 'coche']
char = input('Enter a letter\n').lower()
count = 0
for word in words:
    if word[0].lower() == char:
        count += 1
print(f'In the list {words}\'s there are {count} words that starts with {char}')
