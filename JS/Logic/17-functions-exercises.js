/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

    function suma(a, b){
        return a+b
    }
    console.log(suma(10,5))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
    let arrayNum=[1, 2, 3, 4, 5]
    function mayorNum(arrayx){
        // Aqui se usa el operador de propagacion para descomponer el array y poder usar la funcion de Math
        // Forma 1
        // let mayor=Math.max(...arrayx)
        // return mayor

        // Forma 2
        let mayor=arrayx[0]
        for(let i=0; i<= arrayx.length;i++){
            if (arrayx[i]>mayor){
                mayor=arrayx[i]
            }
        }
        return mayor
    }
    console.log(mayorNum(arrayNum))
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene


    // Reciclado del bloque anterior xdd

    let string="Hola, mundo"
    let vocales=["a", "e", "i", "o", "u"]
    let cont=0
    let i=0
    function hallarVocales(frase){
        while(i<=frase.length){
            if(vocales.includes(string[i])){
                cont++
            }
            i++
        }
        return cont
    }
    console.log(`La string cuenta con `+hallarVocales(string)+ ` vocales`)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

    let array=["Hola","mundo","JavaScript"]

    function mayusculas(arrayString){
        let arrayMayus=[]
        for(let valor of arrayString){
            arrayMayus.push(valor.toUpperCase())
        }
        return arrayMayus
    }
    console.log(mayusculas(array))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

    function primos(number){
        for (let i=2; i<number; i++){
            if(number%i===0) return false
        }
        return true
    }
    console.log(primos(5))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

    let array1=["Hola", 1, 4, 5, 10]
    let array2=["Hola", "Mundo", 10]
    function newArray(ar1, ar2){
        let comun=[]
        for(let value of array1){
            if(array2.includes(value)){
                comun.push(value)
            }
        }
        return comun
    }
    console.log(newArray(array1, array2))
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

    let nums=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    function numsSum(arnums){
        let suma=0
        for (let value of arnums){
            if(value%2==0){
                suma+=value
            }
        }
        return suma
    }
    console.log(numsSum(nums));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

    // Usaré el array anterior llamado nums
    function pot(arnums){
        let cuadrado=[]
        for (let value of arnums){
            cuadrado.push(value**2)
        }
        return cuadrado
    }
    console.log(pot(nums))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
    let string2="Hola Mundo de Javascript"
    function invertir(str){
        let words=str.split(" ")
        let inversa=words.reverse()
        let result=inversa.join(" ")
        return result
    }
    console.log(invertir(string2));
    //  Se usó chatgpt
// 10. Crea una función que calcule el factorial de un número dado
    function fact(n){
        let result=1
        for(let i=1; i<=n; i++){
            result*=i
        }

        return result
    }
    console.log(fact(7))