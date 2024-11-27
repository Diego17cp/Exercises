/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let a, b;
sum=a+b
res=a-b
mul=a*b
div=a/b
mod=a%b
pot=a**b

aum=a++
dec=b--

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
a=10
b=2
sum=a+=b
res=a-=b
mul=a*=b
div=a/=b
mod=a%=b
pot=a**=b


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
    let =x=10, y=2, z=a*b
    x===10
    x==10
    y>1
    x<100
    x<=10

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

    x != 10
    x == y
    x==="10"
    y==undefined
    z==100

// 5. Utiliza el operador lógico and

    console.log(x==10 && b==2);

// 6. Utiliza el operador lógico or
console.log(x!==10 || b==2);

// 7. Combina ambos operadores lógicos

    console.log((x!=10 && b==2) || (x===10))

// 8. Añade alguna negación

    console.log(b!=20);

// 9. Utiliza el operador ternario
    const isStudent = true
    isStudent ? console.log("Es estudiante") : console.log("No es estudiante")
// 10. Combina operadores aritméticos, de comparáción y lógicas

    let n1, n2

    n1=10, n2=10
    
    suma = n1+n2

    console.log(suma==30 || suma==20)