/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
    let myName="Diego"
    if(myName.includes(myName)){
        console.log(`Tu nombre es ${myName}`)
    }
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
    let user="Diego17"
    let password="1234"
    if(user=="Diego17" && password=="1234"){
        console.log(`Bienvenido nuevamente, ${user}`);
    }
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
    let positive=10
    let negative=-1
    let zero=0
    if(positive>zero){
        console.log("Tu numero es positivo")
    }
    else if(negative<zero){
        console.log("Tu numero es negativo")
    }
    else{
        console.log("Tu numero es 0")
    }
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

    let edad=15
    if(edad>=18){
        console.log("Eres mayor de edad")
    }
    else{
        console.log("Eres menor de edad, todavía te faltan "+(18-edad)+" años para ser mayor de edad")
    }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

    let age
    edad>=18 ? age="adulto" : age="menor" 
    console.log(age)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

    let mes="Noviembre"

    if (mes=="Enero" || mes=="Febrero" || mes=="Marzo"){
        console.log("Es verano")
    }
    else if (mes=="Abril"|| mes=="mayo" || mes=="Junio"){
        console.log("Es otoño")
    }
    else if (mes=="Julio" || mes=="Septiembre"){
        console.log("Es invierno")
    }
    else if (mes=="Octubre" || mes=="Noviembre" || mes=="Diciembre"){
        console.log("Es primavera")
    }
    else{
        console.log("Algo salió mal")
    }

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if(mes=="Enero"){
    console.log("Tu mes tiene 31 días")
}
else if(mes=="Febrero"){
    console.log("Tu mes tiene 29 días, pero normalmente son 28")
}
else if(mes=="Marzo"){
    console.log("Tu mes tiene 31 días")
}
else if(mes=="Abril"){
    console.log("Tu mes tiene 30 días")
}
else if(mes=="Mayo"){
    console.log("Tu mes tiene 31 días")
}
else if(mes=="Junio"){
    console.log("Tu mes tiene 30 días")
}
else if(mes=="Julio"){
    console.log("Tu mes tiene 31 días")
}
else if(mes=="Agosto"){
    console.log("Tu mes tiene 31 días")
}
else if(mes=="Septiembre"){
    console.log("Tu mes tiene 30 días")
}
else if(mes=="Octubre"){
    console.log("Tu mes tiene 31 días")
}
else if(mes=="Noviembre"){
    console.log("Tu mes tiene 30 días")
}
else if(mes=="Diciembre"){
    console.log("Tu mes tiene 31 días")
}
else{
    console.log("")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
    let idioma="español"
    switch (idioma){
        case "español":
            console.log("Hola, Mundo");
        break
        case "english":
            console.log("Hello, World")
        break
        default:
            console.log("Algo salió mal...")
    }

// 9. Usa un switch para hacer de nuevo el ejercicio 6

    // Primer intento (Fallido por sintaxis)
    // switch (mes){
    //     case "Enero" || "Febrero" || "Marzo":
    //         console.log("Es verano")
    //     break
    //     case "Abril" || "Mayo" || "Junio":
    //         console.log("Es otoño")
    //     break
    //     case "Julio" || "Septiembre":
    //         console.log("Es invierno")
    //     break
    //     case "Octubre" || "Noviembre" || "Diciembre":
    //         console.log("Es primavera")
    //     break
    //     default:
    //         console.log("Algo salió mal")
    // }

    // Corrección 
    switch (mes) {
        case "Enero":
        case "Febrero":
        case "Marzo":
            console.log("Es verano");
        break;
        case "Abril":
        case "Mayo":
        case "Junio":
            console.log("Es otoño");
        break;
        case "Julio":
        case "Agosto":
        case "Septiembre":
            console.log("Es invierno");
        break;
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            console.log("Es primavera");
        break;
        default:
            console.log("Algo salió mal");
    }
// 10. Usa un switch para hacer de nuevo el ejercicio 7
    switch (mes) {
        case "Enero":
            console.log("Tu mes tiene 31 días");
        break;
        case "Febrero":
            console.log("Tu mes tiene 29 días, pero normalmente son 28");
        break;
        case "Marzo":
            console.log("Tu mes tiene 31 días");
        break;
        case "Abril":
            console.log("Tu mes tiene 30 días");
        break;
        case "Mayo":
            console.log("Tu mes tiene 31 días");
        break;
        case "Junio":
            console.log("Tu mes tiene 30 días");
        break;
        case "Julio":
            console.log("Tu mes tiene 31 días");
        break;
        case "Agosto":
            console.log("Tu mes tiene 31 días");
        break;
        case "Septiembre":
            console.log("Tu mes tiene 30 días");
        break;
        case "Octubre":
            console.log("Tu mes tiene 31 días");
        break;
        case "Noviembre":
            console.log("Tu mes tiene 30 días");
        break;
        case "Diciembre":
            console.log("Tu mes tiene 31 días");
        break;
        default:
            console.log("Algo salió mal");
    }