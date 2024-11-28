/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
    let animals = ["perro", "gato","pollo", "loro", "caballo"]
    console.log(animals)
// 2. Añade dos más. Uno al principio y otro al final
    animals.unshift("pato")
    animals.push("lobo")
    console.log(animals)
// 3. Elimina el que se encuentra en tercera posición
    animals.splice(2, 1)
    console.log(animals)
// 4. Crea un set que almacene cinco libros
    let set=new Set(["El principito", "La ciudad y los perros", "Harry Potter", "IT", "El gallo Carmelo"])
    console.log(set)
// 5. Añade dos más. Uno de ellos repetido
    set.add("Los heraldos negros")
    set.add("El gallo Carmelo")
    console.log(set)
// 6. Elimina uno concreto a tu elección
    set.delete("El gallo Carmelo")
    console.log(set)
// 7. Crea un mapa que asocie el número del mes a su nombre
    let map = new Map([
        ["Enero", 1],
        ["Febrero",2],
        ["Marzo",3],
        ["Abril",4],
        ["Mayo",5],
        ["Junio",6],
        ["Julio",7],
        ["Agosto",8],
        ["Septiembre",9],
        ["Octubre",10],
        ["Noviembre",11],
        ["Diciembre",12]
    ])
    console.log(map)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
    console.log(map.has("Mayo"))
    console.log(map.get("Mayo"))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
    map.set("Verano", ["Enero", "Febrero", "Marzo"])
    console.log(map.get("Verano"))
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
    let nPares=[2, 4, 6, 8, 10]
    console.log(nPares)
    const setPares=new Set(nPares)
    console.log(setPares)
    const mapPares=new Map(nPares.map((numero, indice) => [indice, numero]))
    console.log(mapPares)