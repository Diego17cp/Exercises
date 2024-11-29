/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
    let array
    try{
        console.log(array[1])
    }
    catch{
        console.log("Hubo un error")
    }

// 2. Captura una excepción utilizando try-catch y finally
    try{
        console.log(array[1])
    }catch{
        console.log("Hubo un error")
    }finally{
        console.log("Este codigo siempre se ejecuta")
    }
// 3. Lanza una excepción genérica
    function sum (a, b){
        if(typeof a!=="number"){
            // throw new TypeError("Un elemento no es un numero") 
        }
    }
    sum("1", 12)
// 4. Crea una excepción personalizada
    class divZero extends Error {
        constructor(message, a, b){
            super(message)
            this.a=a
            this.b=b
        }
    }
    const dividir = (a, b)=>{
        if(b==0){
            throw new divZero("No se puede dividir entre 0", a, b)
        }
        else if(typeof b!=="number" || typeof a!=="number"){
            throw new TypeError("Un elemento no es un numero")
        }
        return a/b
    }
// 5. Lanza una excepción personalizada

    try{
        console.log(dividir(10, 0))
    }
    catch (error) {
        if (error instanceof divZero) {
            console.log("Se ha generado un error:", error.message);
            console.log(`Detalles: No se puede dividir ${error.a} entre ${error.b}`);
        } else {
            console.log("Error desconocido:", error.message);
        }
    }
// 6. Lanza varias excepciones según una lógica definida
    class mulZero extends Error {
        constructor(message, a, b){
            super(message)
            this.a=a
            this.b=b
        }
    }
    const mult = (a, b)=>{
        if(b==0){
            throw new mulZero("Multiplicar por 0 siempre es 0", a, b)
        }
        else if(typeof b!=="number" || typeof a!=="number"){
            throw new TypeError("Un elemento no es un numero")
        }
        return a/b
    }
// 7. Captura varias excepciones en un mismo try-catch
    try{
        console.log(dividir("10", 2))
        // console.log(dividir(10, 0))
    }
    catch(error){
        if(error instanceof TypeError){
            console.log("Ha habido un error: ", error.message)
        }
        else if(error instanceof divZero){
            console.log("Ha habido un error: ", error.message)
        }
    }
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

    // Hecho con chatgpt :,v
    const valores = ["3.14", "42", "NaN", "abc", true, null, undefined];

    valores.forEach((valor, index) => {
        try {
            const numero = parseFloat(valor);
            if (isNaN(numero)) {
                throw new Error(`El valor en el índice ${index} no se puede convertir a float: ${valor}`);
            }
            console.log(`El valor en el índice ${index} se convirtió exitosamente: ${numero}`);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    });

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

    // Hecho con chatgpt :,v
    class noEncontrado extends Error {
        constructor(message, property) {
            super(message);
            this.property = property;
        }
    }
    const verificar = (obj, propiedad) => {
        if (!obj.hasOwnProperty(propiedad)) {
            throw new noEncontrado(`La propiedad '${propiedad}' no existe en el objeto.`, propiedad);
        }
        return `La propiedad '${propiedad}' existe en el objeto.`;
    };

    let persona={
        nombre:"Diego",
        edad:18
    }

    try {
        console.log(verificar(persona, "nombre")); 
        console.log(verificar(persona, "altura")); 
    } catch (error) {
        if (error instanceof noEncontrado) {
            console.log(`Error: ${error.message} (Propiedad: ${error.property})`);
        } else {
            console.log("Error desconocido:", error.message);
        }
    }
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
    class noLog extends Error {
        constructor(message, user, pass){
            super(message)
            this.user=user
            this.pass=pass
        }
    }
    const attempts = (user, pass)=>{
        const cUser="Diego17"
        const cPass="1234"
        let attempts=0
        for(let i=0;i<=10;i++){
            attempts++
            try {
                if (user !== cUser || pass !== cPass) {
                    throw new noLog("El usuario o contraseña son incorrectos", user, pass);
                }
                console.log("Inicio de sesión exitoso");
                return attempts; // Salir del bucle si el inicio de sesión es exitoso
            } catch (error) {
                console.log(`Intento ${attempts}: ${error.message}`);
                if (attempts === 10) {
                    console.log("Has alcanzado el número máximo de intentos.");
                    return attempts;
                }
            }
            return attempts
        }
    }
    console.log(attempts("Diego12", "1234"))