/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
    let array1=["Hola", "Mundo", "JS"]
    let [miHola, miMundo]=array1
    console.log(`${miHola}, ${miMundo}`)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
    let array2=[1, 2, 3, 4]
    let [n1, n2, n3, n4, n5=0]=array2
    console.log(n1)
    console.log(n2)
    console.log(n3)
    console.log(n4)
    console.log(n5)
// 3. Usa desestructuración para extraer dos propiedades de un objeto
    let perro={
        nombre:"Sköll",
        edad: 1.11,
        cumpleaños: "03/01/23",
        dueño: {
            name:"Diego",
            age:18
        }
    }
    let {nombre, edad}=perro
    console.log(nombre)
    console.log(edad)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
    let {nombre: nPe, edad:ePe}=perro
    console.log(nPe)
    console.log(ePe)
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
    let {dueño: {name: nD}, dueño: {age: eD}}=perro
    console.log(nD)
    console.log(eD)
// 6. Usa propagación para combinar dos arrays en uno nuevo
    let array3=[...array1, ...array2]
    console.log(array3)
// 7. Usa propagación para crear una copia de un array
    let array4=[...array3]
    console.log(array4)
// 8. Usa propagación para combinar dos objetos en uno nuevo
    let programador={
        nPro:"Diego",
        ePro:18,
        github:"Diego17cp"
    }
    let perfectCouple={...perro, ...programador}
    console.log(perfectCouple)
// 9. Usa propagación para crear una copia de un objeto
    let persona={...programador}
    console.log(persona)
// 10. Combina desestructuración y propagación
    let handsomeThing={...perro}
    console.log(handsomeThing)
    let {nombre: nameDog, edad: edadDog, cumpleaños: birthday}=handsomeThing
    console.log(nameDog)
    console.log(edadDog)
    console.log(birthday)
