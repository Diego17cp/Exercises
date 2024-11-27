/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
    let saludo = "Hola"
    let receptor ="Mundo"
    console.log(saludo + " "+receptor)
// 2. Muestra la longitud de una cadena de texto
    console.log(saludo.length)

// 3. Muestra el primer y último carácter de un string
    let language = "JavaScript"
    console.log(language[0], language[9])
// 4. Convierte a mayúsculas y minúsculas un string

    console.log(language.toUpperCase())
    console.log(language.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
    let date = `Noviembre
    de 2024`
// 6. Interpola el valor de una variable en un string
    console.log(`${saludo}, ${receptor} de ${language}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let presentacion="Hola, soy Diego"
    console.log(presentacion.replace(" ", "-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
    console.log(presentacion.includes("Diego"))
// 9. Comprueba si dos strings son iguales
    console.log(saludo==receptor)
// 10. Comprueba si dos strings tienen la misma longitud
    console.log(saludo.length==receptor.length)