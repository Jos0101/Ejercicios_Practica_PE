
class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        
    }

    get nombreCompleto(){
        return `${this._nombre} ${this._apellido}`;

    }
}

    const persona1 = new Persona("pedriño", "Peña");
    console.log(persona1.nombreCompleto)