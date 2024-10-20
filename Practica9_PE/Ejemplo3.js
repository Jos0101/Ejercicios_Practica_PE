
class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    //metodo estatico
    static tipoCuenta(){
        return 'cuenta de ahorros';
    }

    mostrarInfo(){
        console.log(`Titular: ${this.titular}, Saldo: $${this.saldo}`);


    }
}
  //creacion de objeto
  const cuenta1 = new CuentaBancaria('Josue', 100);
  cuenta1.mostrarInfo();
console.log('tipo de cuenta:', CuentaBancaria.tipoCuenta());
