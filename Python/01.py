###
# exercises.py
# Ejercicios para practicar los conceptos aprendidos en las lecciones.
###

print("\nEjercicio 1: Imprimir mensajes")
print("Escribe un programa que imprima tu nombre y tu ciudad en líneas separadas.\n")

### Completa aquí

my_name = "Diego"
my_city = "Lima"
print(f"My name is {my_name}")
print(f"I'm from {my_city}\n")

print("--------------")

print("\nEjercicio 2: Muestra los tipos de datos de las siguientes variables:")
print("Usa el comando 'type()' para determinar el tipo de datos de cada variable.\n")
a = 15
b = 3.14159
c = "Hola mundo"
d = True
e = None

print(f"a: {type(a)}\nb: {type(b)}\nc: {type(c)}\nd: {type(d)}\ne: {type(e)}\n")

### Completa aquí

print("--------------")

print("\nEjercicio 3: Casting de tipos")
print("Convierte la cadena \"12345\" a un entero y luego a un float.")
print("Convierte el float 3.99 a un entero. ¿Qué ocurre?\n")

num = int("12345")
print(f"1235 convertido a int: {num}\n")
num = float(num)
print(f"1235 convertido a float: {num}\n")

### Completa aquí

print("--------------")

print("\nEjercicio 4: Variables")
print("Crea variables para tu nombre, edad y altura.")
print("Usa f-strings para imprimir una presentación.\n")

name = "Diego"
age = 17
height = 1.75

print(f"Hi! My name is {name} and I'm {age} years old and I'm {height} meters tall\n")

# "Hola! Me llamo midudev y tengo 39 años, mido 1.70 metros"

### Completa aquí

print("--------------")

print("\nEjercicio 5: Números")
print("1. Crea una variable con el número PI (sin asignar una variable)")
print("2. Redondea el número con round()")
print("3. Haz la división entera entre el número que te salió y el número 2")
print("4. El resultado debería ser 1\n")

print(f"Original PI: 3.1416.\nRounded PI: {round(3.1416)}\nOperation: 3 / 2 = {round(3) // 2}\n")