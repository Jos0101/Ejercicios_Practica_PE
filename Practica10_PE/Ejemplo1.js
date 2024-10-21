
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        
    }
    
    mostrarInfo(){
        console.log('Nombre:' , this.nombre, 'Edad:', this.edad);
    }
}


const persona1 = new Persona('Stan', 20);
persona1.mostrarInfo();