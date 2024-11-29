/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
    let persona={
        nombre: "Diego",
        edad: 18,
        país: "Perú"
    }
    console.log(persona)
// 2. Accede y muestra su valor
    console.log(persona["nombre"])
// 3. Agrega una nueva propiedad
    persona.github="Diego17cp"
    console.log(persona.github)
// 4. Elimina una de las 3 primeras propiedades
    delete persona.país
    console.log(persona)
// 5. Agrega una función e invócala
    persona.ocupación=function programar(){
        return "Programando en JS"
    };
    console.log(persona.ocupación())
// 6. Itera las propiedades del objeto
    for(let value in persona){
        console.log(value)
    }
// 7. Crea un objeto anidado
    persona.mascota={
        nombre: "Sköll",
        edad: 1.11
    }
    console.log(persona.mascota.nombre)
// 8. Accede y muestra el valor de las propiedades anidadas
    console.log(persona.mascota.edad)
// 9. Comprueba si los dos objetos creados son iguales
    console.log(persona==persona.mascota)
// 10. Comprueba si dos propiedades diferentes son iguales
    console.log(persona.nombre==persona.mascota.nombre)