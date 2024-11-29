/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función

    export function suma(a, b){
        return a+b
    }
// 2. Exporta una constante
    export const PI=3.14
// 3. Exporta una clase
    export class perro{
        constructor (nombre, edad){
            this.nombre
            this.edad
        }
        ladrar(){
            return "Guau guau"
        }
    }
// 4. Importa una función

    import {suma} from "./31-modules-exercises.js"

// 5. Importa una constante

    import {PI} from "./31-modules-exercises.js"
// 6. Importa una clase
    import {perro} from "./31-modules-exercises.js"
// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

    // Solo permite exportar uno.
    export default function resta(a, b){
        return a-b
    }
    // export default const name="Diego"
    // export default class animal{
    //     constructor(){
    //     }
    // }
// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

    console.log(resta(10-2))
    console.log(name)
    let anim=new animal()
    // NO lo permite
// 9. Exporta una función, una constante y una clase desde una carpeta
    export function saludar(nombre) {
        return `¡Hola, ${nombre}!`;
    }

    export const age = 18;

    export class Persona {
        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
        saludar() {
            return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
        }
    }
// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
    import {saludar, age, Persona} from "../directorio/archivo"