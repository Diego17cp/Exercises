# Conditionals:

# Ejercicio 1: Determinar el mayor de dos números
# Pide al usuario que introduzca dos números y muestra un mensaje
# indicando cuál es mayor o si son iguales

# print("Enter two numbers to determine which is greater")
# a = input("Introduce the first number: ")	
# b = input("Introduce the second number: ")

# if a > b:
#     print("\nThe first number is greater")
# elif a < b:
#     print("\nThe second number is greater")
# else:
#     print("\nBoth numbers are equal")

# Ejercicio 2: Calculadora simple
# Pide al usuario dos números y una operación (+, -, *, /)
# Realiza la operación y muestra el resultado (maneja la división entre zero)

# print("\nLet's do an simple operation \nIntroduce two numbers and an operation(+, -, *, /)")
# x = input("Introduce the first number: ")
# y = input("Introduce the second number: ")
# z = input("Introduce the operation: ")

# if z == "+":
#     print("\nThe result is: ", float(x) + float(y))
# elif z == "-":
#     print("\nThe result is: ", float(x) - float(y))
# elif z == "*":
#     print("\nThe result is: ", float(x) * float(y))
# elif z == "/":
#     if y == "0":
#         print("\nError: Yiu can't divide by zero")
#     else:
#         print("\nThe result is: ", float(x) / float(y))
# else:
#     print("\nError: Invalid operation")

# Ejercicio 3: Año bisiesto
# Pide al usuario que introduzca un año y determina si es bisiesto.
# Un año es bisiesto si es divisible por 4, excepto si es divisible por 100 pero no por 400.

print("\nLet's determine if a year is leap year")
year = input("Introduce the year: ")
if float(year) % 4 == 0 and (float(year) % 100 != 0 or float(year) % 400 == 0):
    print("\nThe year is leap year")
else:
    print("\nThe year is not leap year")

# Ejercicio 4: Categorizar edades
# Pide al usuario que introduzca una edad y la clasifique en:
# - Bebé (0-2 años)
# - Niño (3-12 años)
# - Adolescente (13-17 años)
# - Adulto (18-64 años)
# - Adulto mayor (65 años o más)