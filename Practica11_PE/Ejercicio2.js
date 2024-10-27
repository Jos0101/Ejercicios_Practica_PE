
class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        
    }

     get nombreCompleto(){
        return `${this._nombre} ${this._apellido}`;

    }

    set nombreCompleto(nuevoNombre){
        [this._nombre, this._apellido] = nuevoNombre.split(" ");
    }
}

   const persona1 = new Persona("pedriño", "Peña");
   persona1.nombreCompleto = "Josue Argueta";

 console.log(persona1.nombreCompleto)