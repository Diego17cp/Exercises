// Enums 
const enum Error_Types {
    NOT_FOUND,
    SERVER_ERROR,
    BAD_REQUEST 
}
const errorMsg = (error: Error_Types): string => {
    switch(error){
        case Error_Types.NOT_FOUND:
            return 'Not Found';
        case Error_Types.SERVER_ERROR:
            return 'Server Error';
        case Error_Types.BAD_REQUEST:
            return 'Bad Request';
    }
}

// Aserciones de tipo

// Le estamos indicando a TS que estamos recuperando un elemento específico
const canvas = document.getElementById('canvas-random') // as HTMLCanvasElement;

// Otra forma sería: realizar una validación para asegurarnos de que el elemento existe 
// Y luego asignar el tipo de dato que esperamos
// El problema de esto, es que si se cambia el tipo de dato, TS no lo detectará y se generará un error

// if(canvas!==null){
//     const ctx = (canvas as HTMLCanvasElement).getContext('2d');
// }

// La forma correcta sería verificar todo en la validación
// Esta es la forma recomendada de hacerlo
if(canvas instanceof HTMLCanvasElement){
    const ctx = canvas.getContext('2d');
}

// Fetching con TypeScript

const API_URL = 'https://api.github.com/search/repositories?q=javascript';

// para poder usar await en ts debe ser un modulo
const request = await fetch(API_URL)
if(!request.ok){
    throw new Error('Failed to fetch data');
}
// aqui falta validar la data que se espera
const data = await request.json(); 

const repos = data.items.map(
    repo => {
        console.log(repo);
    }
)

// Interfaces

// Son una forma de definir la estructura de un objeto

interface Product {
    id: string,
    name: string,
    precio: number,
    quantity: number
}
interface Shoe extends Product {
    size: number
}

interface Cart{
    totalPrice: number,
    products: (Product | Shoe)[]
}
interface CartOps {
    add: (product: Product) => void, // Esta es una forma de definir funciones dentro de una interfaz
    remove(id: string): void, // Otra forma de definir funciones
    clear(): void
}

const cartShop: Cart = {
    totalPrice: 100,
    products: [
        {
            id: '1',
            name: 'Producto 1',
            precio: 30,
            quantity: 3
        },
        {
            id: '2',
            name: 'Producto 2',
            precio: 40,
            quantity: 2
        }
    ]
}
// Interfaces o Tipos
// La interfaz siempre será un objeto, mientras que el tipo es más flexible
// Las interfaces son más recomendadas para objetos

// Narrowings
// Son una forma de reducir el tipo de un objeto a un tipo más específico para cada cosa

const showLength = (object: number | string) => {
    if(typeof object === 'string'){
        return object.length;
    }
    return object;
}

interface Mario {
    company: 'Nintendo',
    name: string,
    jump: () => void
}
interface Sonic {
    company: 'Sega',
    name: string,
    spin: () => void
}

type Character = Mario | Sonic;

// Si tenemos la company
// const play = (character: Character) => {

//     if(character.company === 'Nintendo'){
//         character.jump();
//         return
//     } 

//     character.spin();

    
// }


// Type Guards 

// Deben evitarse en la medida de lo posible, ya que hace el codigo mas dificil de leer
const checkIsSonic = (character: Character): character is Sonic => {
    return (character as Sonic).spin !== undefined;  
}

const play = (character: Character) => {
    if(checkIsSonic(character)){
        character.spin();
        return
    } else{
        character.jump();
        return
    }
}

// understand never 
// El tipo never significa que nunca se puede alcanzar ese punto del código

function fn(x: string | number) {
    if (typeof x === 'string') {
        // do something
    } else if (typeof x === 'number') {
        // do something else
    } else {
        x; // has type 'never'!
    }
}


// Classes

interface Avenger {
    name: string,
    power: number,
    wonBattles: number
}

class Avenger implements Avenger {

    constructor(name: string, power: number){
        this.name = name;
        this.power = power;
    }

    get fullName(){
        return `${this.name}, de poder ${this.power}`;
    }
    set powerScore(newPower: number){
        if(newPower <= 100){
            this.power = newPower;
        }
        else{
            throw new Error('Power must be less than 100');
        }
    }
}

const avengers = new Avenger('Spiderman', 50);
