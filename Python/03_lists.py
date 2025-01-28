import os
os.system("clear")

# Ejercicio 1: El mensaje secreto
# Dada la siguiente lista:
# mensaje = ["C", "o", "d", "i", "g", "o", " ", "s", "e", "c", "r", "e", "t", "o"]
# Utilizando slicing y concatenación, crea una nueva lista que contenga solo el mensaje "secreto".

print("Let's find the secret message")
msg = ["C", "o", "d", "i", "g", "o", " ", "s", "e", "c", "r", "e", "t", "o"]
secret ="".join(msg[7:]) # Use join method 'cause the result would be a string
print(f"\nThe secret message is: {secret}\n")

# Ejercicio 2: Intercambio de posiciones
# Dada la siguiente lista:
# numeros = [10, 20, 30, 40, 50]
# Intercambia la primera y la última posición utilizando solo asignación por índice.

print("\nLet's swap the first and last position of a list")
numbers = [10, 20, 30, 40, 50]
print(f"\nThe original list is: {numbers}")
numbers[0], numbers[-1] = numbers[-1], numbers[0]
print(f"\nThe new list is: {numbers}\n")

# Ejercicio 3: El sándwich de listas
# Dadas las siguientes listas:
# pan = ["pan arriba"]
# ingredientes = ["jamón", "queso", "tomate"]
# pan_abajo = ["pan abajo"]
# Crea una lista llamada sandwich que contenga el pan de arriba, los ingredientes y el pan de abajo, en ese orden.

print("\nLet's make a sandwich")
list_1 = ["pan arriba"]
list_2 = ["jamón", "queso", "tomate"]
list_3 = ["pan abajo"]
sandwich ="\n".join(list_1+ list_2 + list_3)
print(f"\nThe sandwich is: \n{sandwich}\n")

# Ejercicio 4: Duplicando la lista
# Dada una lista:
# lista = [1, 2, 3]
# Crea una nueva lista que contenga los elementos de la lista original duplicados.
# Ejemplo: [1, 2, 3] -> [1, 2, 3, 1, 2, 3]

print("\nLet's duplicate a list")
nums = [1, 2, 3]
duplicated = nums + [nums[0], nums[1], nums[2]]
print(f"\nThe original list is: {nums}\nThe duplicated list is: {duplicated}\n")

# Ejercicio 5: Extrayendo el centro
# Dada una lista con un número impar de elementos, extrae el elemento que se encuentra en el centro de la lista utilizando slicing.
# Ejemplo: lista = [10, 20, 30, 40, 50] -> El centro es 30
print("\nLet's get the center of a list")
numbers = [10, 20, 30, 40, 50]
center = numbers[len(numbers)//2]
print(f"\nThe center of the list({numbers}) is: {center}\n")

# Ejercicio 6: Reversa parcial
# Dada una lista, invierte solo la primera mitad de la lista (utilizando slicing y concatenación).
# Ejemplo: lista = [1, 2, 3, 4, 5, 6] -> Resultado: [3, 2, 1, 4, 5, 6]