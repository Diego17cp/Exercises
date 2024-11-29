/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

    class perro{
        constructor(nombre, edad){
            this.nombre=nombre
            this.edad=edad
        }
    }
    let myDog= new perro("Sköll", 1)
    console.log(myDog)
// 2. Añade un método a la clase que utilice las propiedades
    class programador{
        constructor(nombre, edad, github){
            this.nombre=nombre
            this.edad=edad
            this.github=github
        }
        programar(){
            return `${this.nombre} (${this.edad} años) está programando en JS. Puedes ver su trabajo en GitHub: ${this.github}`;
        }
    }
    let programmer=new programador("Diego", 18, "Diego17cp")
    console.log(programmer)
    
// 3. Muestra los valores de las propiedades e invoca a la función
    console.log(programmer.nombre)
    console.log(programmer.edad)
    console.log(programmer.github)
    console.log(programmer.programar())
// 4. Añade un método estático a la primera clase
    class programador2{
        constructor(nombre, edad, github){
            this.nombre=nombre
            this.edad=edad
            this.github=github
        }
        programar(){
            return `${this.nombre} (${this.edad} años) está programando en JS. Puedes ver su trabajo en GitHub: ${this.github}`;
        }
        static acariciarPerro(name){
            return `Acariciando a ${name}`
        }
    }
    
// 5. Haz uso del método estático
    console.log(programador2.acariciarPerro("Sköll"))
// 6. Crea una clase que haga uso de herencia
    class animal{
        constructor(nombre, especie){
            this.nombre=nombre
            this.especie=especie
        }
        describir(){
            return `Este animal es un(a) ${this.nombre} y su especie es ${this.especie}`
        }
    }
    class dog extends animal{
        ladrar(){
            return "Soy la mejor mascota B)"
        }
    }
    let perrito=new dog("Sköll", "perro")
    console.log(perrito.ladrar())
// 7. Crea una clase que haga uso de getters y setters

    class persona{
        #nombre
        #ocupacion
        constructor(nombre, ocupacion){
            this.#nombre=nombre
            this.#ocupacion=ocupacion
        }
        get nombre(){
            return this.#nombre
        }
        set nombre(nombre){
            this.#nombre=nombre
        }
    }
    let person = new persona("Diego", "Programador")
    console.log(person.nombre)
// 8. Modifica la clase con getters y setters para que use propiedades privadas

    class persona2{
        #nombre
        #ocupacion
        constructor(nombre, ocupacion){
            this.#nombre=nombre
            this.#ocupacion=ocupacion
        }
        get nombre(){
            return this.#nombre
        }
        set nombre(nombre){
            this.#nombre=nombre
        }
        get ocupacion(){
            return this.#ocupacion
        }
        set ocupacion(ocupacion){
            this.#ocupacion=ocupacion
        }
}
    let person2 = new persona2("Diego", "Programador")
// 9. Utiliza los get y set y muestra sus valores

    console.log(person2.nombre)
    console.log(person2.ocupacion)
    person2.nombre="Julian"
    person2.ocupacion="Plomero"
    console.log(person2.nombre)
    console.log(person2.ocupacion)

// 10. Sobrescribe un método de una clase que utilice herencia 
    
    class lobo extends animal{
        constructor(nombre, especie, tamaño){
            super(nombre, especie)
            this.tamaño=tamaño
        }
        describir(){
            return `Este animal es ${this.nombre}, su especie es ${this.especie} y mide ${this.tamaño}`
        }
    }
    let lobox=new lobo("Hati", "lobo", "10mts")
    console.log(lobox.nombre)
    console.log(lobox.describir())