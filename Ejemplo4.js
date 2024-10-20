
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
        
    }

    hacerSonido(){
        console.log(this.nombre, 'Hace un sonido');
    }
}

 class Perro extends Animal{
    hacerSonido(){
        console.log(this.nombre, 'Ladra');
        }
     }

  const perro1 = new Perro('Rocky')
  perro1.hacerSonido();