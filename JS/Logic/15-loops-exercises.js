/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

    for(let i=0; i<21; i++){
        console.log(i)
    }
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
    let x=1
    let tot=0
    while(x<=100){
        tot+=x
        x++
        console.log(tot)
    }
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
    for(let z=2; z<=50; z+=2){
        console.log(z)
    }
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
    // Forma 1
    let nombres=["Diego", "Julian", "David", "Alejandro"]
    for(let index=0; index < nombres.length; index++){
        console.log(nombres[index]);
    }

    // Forma 2

    for (let value of nombres){
        console.log(value)
    }

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
    let string="Hola mundo de JavaScript"
    let vocales=["a", "e", "i", "o", "u"]
    let cont=0
    let index=0
    while(index<string.length){
        if(vocales.includes(string[index].toLowerCase())){
            cont++
        }
        index++
    }
    console.log(`La string cuenta con ${cont} vocales`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

    let numbers=[1, 2, 10, 20, 20, 40]
    let producto=1
    for (let number of numbers){
        producto*=number
        console.log(producto)
    }

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
    let multiplo=0
    let count=0
    while (count<=11){
        count++
        tabla=5*count
        console.log(tabla)
    }

// 8. Usa un bucle para invertir una cadena de texto

    let string2="Hola, mundo"
    let reversa=""
    for(let i=string2.length -1; i>=0; i--){
        reversa+=string2[i]
        // console.log(string2[i])
    }
    console.log(reversa)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
    // Lo admito, usé chatgpt
    let fibonacci=[0,1]
    for(let i=2;i<10;i++){
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    console.log(fibonacci)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numeros = [1, 2, 5, 10, 20, 8, 40, 320, 100]
let counter=0
let mayores=[]
while(counter <= numeros.length){
    counter++
    if (numeros[counter]>10){
        mayores.push(numeros[counter])
    }
}
console.log(mayores)