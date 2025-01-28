# Ejercicio 1: Añadir y modificar elementos
# Crea una lista con los números del 1 al 5.
# Añade el número 6 al final usando append().
# Inserta el número 10 en la posición 2 usando insert().
# Modifica el primer elemento de la lista para que sea 0.

print("Let's add and modify elements on a list:\n")
numbers = [1, 2, 3, 4, 5]
print(f"The original list is {numbers}")
numbers.append(6)
numbers.insert(1, 10)
numbers[0] = 0
print(f"The modified list is {numbers}\n")

# Ejercicio 2: Combinar y limpiar listas
# Crea dos listas:
# lista_a = [1, 2, 3]
# lista_b = [4, 5, 6, 1, 2]
# Extiende lista_a con lista_b usando extend().
# Elimina la primera aparición del número 1 en lista_a usando remove().
# Elimina el elemento en el índice 3 de lista_a usando pop(). Imprime el elemento eliminado.
# Limpia completamente lista_b usando clear().

print("\nLet's combine and clean lists:\n")
list_a = [1, 2, 3]
list_b = [4, 5, 6, 7, 1, 2]
print(f"There are the list A: {list_a} and the list B: {list_b}. Let's combine them:\n")
list_a.extend(list_b)
print(f"Both lists combined: {list_a}\n\nLet's clean the list:\n")
list_a.remove(1)
print(f"List without the first number 1: {list_a}\n")
popped = list_a.pop(3)
print(f"Clean the number {popped} from the list {list_a}\n")
list_b.clear()


# Ejercicio 3: Slicing y eliminación con del
# Crea una lista con los números del 1 al 10.
# Utiliza slicing y del para eliminar los elementos desde el índice 2 hasta el 5 (sin incluir el 5).
# Imprime la lista resultante.

my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(f"Original list: {my_list}")
# sliced = my_list[2:4] Form 1
del my_list[2:5]
print(f"Sliced list: {my_list}\n")

# Ejercicio 4: Ordenar y contar

# Crea una lista con los siguientes números: [5, 2, 8, 1, 9, 4, 2].
# Ordena la lista de forma ascendente usando sort().
# Cuenta cuántas veces aparece el número 2 en la lista usando count().
# Comprueba si el número 7 está en la lista usando in.

numbers_2 = [5, 2, 8, 1, 9, 4, 2]
print(f"Original list: {numbers_2}")
numbers_2.sort()
print(f"Sorted list: {numbers_2}")
print(f"The number 2 appears: ", numbers_2.count(2), "times.")
print(f"The number 7 is in the list?: ", 7 in numbers_2, "\n")

# Ejercicio 5: Copia vs. Referencia
# Crea una lista llamada original con los números [1, 2, 3].
# Crea una copia de la lista original llamada copia_1 usando slicing.
# Crea otra copia llamada copia_2 usando copy().
# Crea una referencia a la lista original llamada referencia.
# Modifica el primer elemento de la lista referencia a 10.
# Imprime las cuatro listas (original, copia_1, copia_2, referencia) y observa los cambios.

original = [1, 2, 3]
copia_1 = original[:]
copia_2 = original.copy()
referencia = original
referencia[0] = 10
print(f"Lists: {original}, {copia_1}, {copia_2}, {referencia}\n")

# Ejercicio 6: Ordenar strings sin diferenciar mayúsculas y minúsculas.
# Crea una lista con las siguientes cadenas: ["Manzana", "pera", "BANANA", "naranja"].
# Ordena la lista sin diferenciar entre mayúsculas y minúsculas.
fruits = ["Manzana", "pera", "BANANA", "naranja"]
fruits.sort(key=str.lower)
print(f"Sorted list: ", fruits)