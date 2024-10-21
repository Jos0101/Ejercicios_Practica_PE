
class Auto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }


    arrancar(){
        console.log(this.marca, this.modelo, 'esta arrancando');
    }

    detener(){
        console.log(this.marca, this.modelo, 'se ha detenido.');
    }
}


const auto1 = new Auto('Toyota', 'Landcruiser');

auto1.arrancar();
auto1.detener();



 