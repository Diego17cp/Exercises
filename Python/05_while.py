# Ejercicio 1: Cuenta atrás
# Imprime los números del 10 al 1 usando un bucle while.
print("\nEjercicio 1:")
count = 10
while count >=1:
    print(f"Number: {count}")
    count-=1

# Ejercicio 2: Suma de números pares (while)
# Calcula la suma de los números pares entre 1 y 20 (inclusive) usando un bucle while.
print("\nEjercicio 2:")
tot = 0
count = 0
while count <= 20:
    if count!=0 and count % 2 == 0:
        tot += count
    count += 1
print(f"Sum of all pair numbers between 1 and 20:", tot)

# Ejercicio 3: Factorial de un número
# Pide al usuario que introduzca un número entero positivo.
# Calcula su factorial usando un bucle while.
# El factorial de un número entero positivo es el producto de todos los números del 1 al ese número. Por ejemplo, el factorial de 5
# 5! = 5 x 4 x 3 x 2 x 1 = 120.
print("\nEjercicio 3:")
num = int(input('Please enter a number greater than 0\n'))
count = 1
factorial = 1
while count <= num:
    factorial *= count
    count += 1
    if num < 0:
        print('Error: Cannot calc the factorial of negative numbers')
        break
print(f"The factorial of {num} is {factorial}")

# Ejercicio 4: Validación de contraseña
# Pide al usuario que introduzca una contraseña.
# La contraseña debe tener al menos 8 caracteres.
# Usa un bucle while para seguir pidiendo la contraseña hasta que cumpla con los requisitos.
# Si la contraseña es válida, imprime "Contraseña válida".
print("\nEjercicio 4:")
psw = input('Enter a password\n') 
while len(psw) < 8:
    psw = input("Enter a valid password\n")
    if len(psw) < 8:
        print('Enter a valid password greather than 8 characters')
print('Valid password')

# Ejercicio 5: Tabla de multiplicar
# Pide al usuario que introduzca un número.
# Imprime la tabla de multiplicar de ese número (del 1 al 10) usando un bucle while.
print("\nEjercicio 5:")
x = int(input('Enter a number for view its multiplication table\n'))
count = 0
print('Multiplication table of:', x)
while count <= 12: # I included the 12 to do more complete the exercise xd
    print(f'{x}x{count}={x*count}')
    count+=1

# Ejercicio 6: Números primos hasta N
# Pide al usuario que introduzca un número entero positivo N.
# Imprime todos los números primos menores o iguales que N usando un bucle while.
print("\nEjercicio 6:")
n = int(input('Enter a number\n'))
count = 2
print(f'Prime numbers less than {n}')

while count <= n:
    is_prime = True
    i = 2
    
    while i * i <= count:
        if count % i == 0:
            is_prime = False
            break
        i += 1
    if is_prime:
        print(count)
    count += 1
# Did it with help:(