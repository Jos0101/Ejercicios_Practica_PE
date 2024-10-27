
class CuentaBancaria {
    constructor(saldo) {
        this._saldo = saldo;
        
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(cantidad){
        if(cantidad > 0){
            this._saldo = cantidad;
        }else{
            console.log(`Saldo: $${cantidad}, no se puede establecer un saldo menor o igual a 0 o negativo`);
        }
    }
}

    const cuenta = new CuentaBancaria(100);
    console.log(`Saldo inicial: $${cuenta.saldo}`)

    cuenta.saldo = 50;
    console.log(`Movimiento: $${cuenta.saldo}`);

    cuenta.saldo = -90
    console.log(`Saldo actual: $${cuenta.saldo}`);

