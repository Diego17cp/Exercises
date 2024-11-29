/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
    const dividir = (a, b)=>{
        if(b==0){
            return "No se puede dividir entre 0"
        }
        return a/b
    }
    console.error(dividir(10,0))
// 2. Crea una función que utilice warn correctamente
    const trabajo=(work)=>{
        if (work=="Programador"){
            return "Ten cuidado con la espalda"
        }
    }
    console.warn(trabajo("Programador"))
// 3. Crea una función que utilice info correctamente
    const lang=(lenguaje)=>{
        if (lenguaje=="Javascript"){
            return "Sabías que JS es el mejor lenguaje de programación"
        }
    }
    console.info(lang("Javascript"))
// 4. Utiliza table
    let plantilla = [{nombre:"Diego", edad:18},{nombre:"Julian", edad:19}, {nombre:"David", edad:19}]
    console.table(plantilla)
// 5. Utiliza group
    console.group("Programador:")
    console.log("Diego Castro")
    console.log("Ingeniero de Software")
    console.groupEnd()
// 6. Utiliza time
    console.time("Tiempo: 1")
    for (let i=0;i<=100000009; i++){

    }
    console.timeEnd("Tiempo: 1")
// 7. Valida con assert si un número es positivo
    const menorque0=-1
    console.assert(menorque0>0, "Tu número es negativo")
// 8. Utiliza count
    console.count("Hola mundo")
    console.count("Hola mundo")
// 9. Utiliza trace
    function nivel1() {
        nivel2();
    }

    function nivel2() {
        nivel3();
    }

    function nivel3() {
        console.log("Estamos en el nivel 3.");
    }
    nivel1()
// 10. Utiliza clear
    console.clear()