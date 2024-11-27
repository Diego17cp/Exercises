/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Hola mundo de JS

// 2. Escribe un comentario en varias líneas

/*Practicando con
JavaScript */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let number = 5;
let string = "Hola, mundo";
let boolean = true;
let nullValue = null;
let undefinedValue;
let symbol = Symbol("JavaScript");
let bI=10000000000000000000000000000000000n;

// 4. Imprime por consola el valor de todas las variables

console.log(number);
console.log(string);
console.log(boolean);
console.log(nullValue);
console.log(undefinedValue);
console.log(symbol);
console.log(bI);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean)
console.log(typeof nullValue)
console.log(typeof undefinedValue)
console.log(typeof symbol)
console.log(typeof bI)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

number=10;
string="Hola, JS"
boolean=false
nullValue=null
undefinedValue=undefined;
symbol=Symbol("Hola")
bI=1221323123123213123123213n;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

number="11";
string=120
boolean=null
nullValue=undefined
undefinedValue=Symbol("simbolo");
symbol=12321421421424343n
bI=false;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const PI = 3.14
const language ="JavaScript"
const isStudent = true
const isNull=null
const isUndefined=undefined;
const languageSymbol=Symbol("JS")
const bigInt=1777777777777777777777777777777n

// 9. A continuación, modifica los valores de las constantes

PI=3.1416;
language="TypeScript"
isStudent=false
isNull=12
isUndefined="Hola"
languageSymbol=Symbol("TS")
bigInt=10


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// PI=3.1416;
// language="TypeScript"
// isStudent=false
// isNull=12
// isUndefined="Hola"
// languageSymbol=Symbol("TS")
// bigInt=10
