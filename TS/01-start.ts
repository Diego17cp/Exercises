// Typescript es un lenguaje de programación que se compila a Javascript
// Incluye tipado estático y fuerte

// TS puede inferir automáticamente el tipo de una variable o podemos especificarlo
// Esto solo para los tipos primitivos
const x = 10; // TS infiere que x es de tipo number
const y: number = 5; // especificamos a TS que y es de tipo number

// Tipo de dato Any
// En TS podemos usar el tipo de dato any para indicar que una variable puede ser de cualquier tipo, lo cual conlleva a que se ignore el tipado
// El Any debe evitarse en la medida de lo posible, de lo contrario estaríamos trabajando con JS puro
let anyValue: any = 4; // El autocomplete no mostrará de un tipo number porque está ignorando ese tipado aún así le estemos especificando el valor del dato

// Funciones

// Se le tiene que especificar el tipo de dato de los parametros que recibe
function saludar(name: string) { 
    console.log(`Hola ${name}`);
}

// Funcion con params tipados
// function presentacion(name: string, age: number) {
//     console.log(`Hola ${name}, tienes ${age} años`);
// }

// Funcion que recibe objetos como params 
// ({name: string, age:number}) estaría mal, ya que está colisionando con la desustructuración de objetos en JS

// Forma 1 de solución
// 
function presentacion({name, age}: {name: string, age: number}) {
    console.log(`Hola ${name}, tienes ${age} años`);
}

// Forma 2 de solución

function presentacion2(person: { name: string, age: number }) {
    const { name, age } = person; // Destructuración de objetos para poder utilizarlo, es obligatorio
    console.log(`Hola ${name}, tienes ${age} años`);
}

// Funciones con returns tipados

// TS infiere que el return es de tipo number
function sum(a: number, b: number) {
    return a + b;
}

let result: string
// result=sum(5, 2); Esto dará error porque el return de la función sum es de tipo number y la variable result es de tipo string

// En esta función se especifica que el return es de tipo number
function sum2(a: number, b: number): number {
    return a + b;
}

// Tipar una funcion como parametro
// Error: tipar una función como parametro como Function se debe evitar

// El tipado de esta funcion es especificar el parametro que obtiene y el valor que va a retornar
// void significa que la función no retorna nada
const sayHiFromTS = (fn: (name:string) => void ) => {
    return fn('Diego')
}
const sayHi = (name: string) => {
    console.log(`Hola ${name}`)
}
sayHiFromTS(sayHi)

// never
// Se usa para funciones que nunca retornan un valor o que lanzan un error
function throwError(message: string): never {
    throw new Error(message);
}

// inferencia en funciones anonimas segun el contexto

// infiere que todos los elementos del array son de tipo string
const avengers = ['Thor', 'Ironman', 'Spiderman', 'Capitan America'];

// infiere que cada avenger es de tipo string, por lo tanto, si permite usar métodos de strings
avengers.forEach(
    (avenger) => {
        console.log(avenger.toUpperCase());
    }
)

// Objetos
// TS puede inferir el tipo de cada clave de un objeto

let user = {
    name: 'Diego', // TS infiere que name es de tipo string
    age: 18
}

// Type Alias
// Se utiliza para crear un tipo de dato personalizado

type User = {
    name: string,
    age: number
}

let user2: User = {
    name: 'Diego',
    age: 18
}

// Template Union Types

// Se utiliza para definir un tipo de dato que puede ser muy específico 
type HeroId = `${string}-${string}-${string}-${string}-${string}`; 

// Optional Properties

// type Hero = {
//     readonly id?: HeroId, // readonly indica que la propiedad no puede ser modificada 
//     name: string,
//     age: number,
//     isActive?: boolean // ? indica que la propiedad es opcional
// }

// let hero: Hero = {
//     name: 'Ironman',
//     age: 45
// }

// const createHero = (hero: Hero): Hero => {
//     const { name, age } = hero;
//     return {
//         id: crypto.randomUUID(),
//         name,
//         age,
//         isActive: true
//     }
// }

// let ironMan = createHero({  name: 'Ironman', age: 45 });

// Union Types

type HeroPowerScale = 'local' | 'global' | 'universal' | 'cosmic';


type Hero = {
    readonly id?: HeroId, // readonly indica que la propiedad no puede ser modificada 
    name: string,
    age: number,
    isActive?: boolean // ? indica que la propiedad es opcional
    powerScale?: HeroPowerScale
}

let hero: Hero = {
    name: 'Ironman',
    age: 45
}

const createHero = (hero: Hero): Hero => {
    const { name, age } = hero;
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    }
}

const spiderman = createHero({  name: 'Spiderman', age: 18 });
spiderman.powerScale = 'universal'; // Esto es correcto porque cumple con los valores del tipo HeroPowerScale


// Intersection Types

type HeroBasicInfo = {
    name: string,
    age: number
}

type HeroProps = {
    readonly id?: HeroId, 
    isActive?: boolean,
    powerScale?: HeroPowerScale
}

type Heroes = HeroBasicInfo & HeroProps;

function createHeroes (basic: HeroBasicInfo):Heroes{
    const {  name, age } = basic;
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    }
}

// Type indexing

type HeroProperties = {
    isActive: boolean,
    address: {
        planet: string,
        city: string
    }
}

const addressHero: HeroProperties['address'] = {
    planet: 'Tierra',
    city: 'New York'
}

// Type from value

const address = {
    planet: 'Tierra',
    city: 'Lima'
}

type Address = typeof address; // Esto es lo mismo que type Address = { planet: string, city: string }

const address2: Address = {
    planet: 'Tierra',
    city: 'LimaYork',
}

// Type from function return

function createAddress(){
    return {
        planet: 'Tierra',
        city: 'Chiclayo'
    }
}

type Address2 = ReturnType<typeof createAddress>; // Esto es lo mismo que type Address2 = { planet: string, city: string }

// Arrays

// Se puede especificar el tipo de dato que contendrá el array

const languages= [] // Esto es un array de tipo never, o sea, siempre quedará vacío porque TS no puede inferir el tipo de dato

const languages2: string[] = [] // Esto es un array de tipo string

const multipleTypeArr: (string | number)[] = ['Diego', 18, 'Lima', 3]; // Esto es un array que puede contener strings o números

const heroes: HeroBasicInfo[] = []


// Tipar lo siguiente:

/*
[
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X']
]
 */

type CellValue = 'X' | 'O' | '';

// Tupla: es un array con un número fijo de elementos cuyos tipos son conocidos, pero no necesariamente del mismo tipo
type Gameboard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: Gameboard = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X']
]

type RGB = [number, number, number]; // Esto es una tupla de exactamente 3 elementos de tipo number
const rgbColor: RGB = [255, 0, 0]; 