function aplicarDescuento(categoriaCliente, compraTotal) {
    let descuento = 0;   
     let porcentajeDescuento = 0;   
      let producto_1 = "pescado";
       let producto_2 = "carne";
         let producto_3 = "pollo";

    if (categoriaCliente === producto_1) {
        if (compraTotal >= 45) {
            descuento = 0.25;
            porcentajeDescuento = 25;
        } else {
            console.log("Necesita tener un monto mayor o igual a $45 para obtener el 25% de descuento.");
            return compraTotal;
        }
    } else if (categoriaCliente === producto_2) {
        if (compraTotal >= 30) {
            descuento = 0.20;
            porcentajeDescuento = 20;
        } else {
            console.log("Necesita tener un monto mayor o igual a $30 para obtener el 20% de descuento.");
            return compraTotal;
        }
    } else if (categoriaCliente === producto_3) {
        if (compraTotal >= 20) {
            descuento = 0.10;
            porcentajeDescuento = 10;
        }
    } else {
        console.log("No se ha encontrado una categoría válida.");
        return compraTotal;
    }

    let totalDescuento = compraTotal - (compraTotal * descuento);
    console.log(`Se ha aplicado un descuento del ${porcentajeDescuento}%. El total a pagar con descuento es:  $${totalDescuento}`);

    return totalDescuento;
}
 aplicarDescuento("carne", 30);
