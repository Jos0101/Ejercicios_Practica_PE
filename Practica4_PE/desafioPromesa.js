
function realizarPedido(pedido) {
    return new Promise((resolve, reject) => {
      console.log('procesando su pedido de', pedido, "...");
  
      setTimeout(() => {
  
        if (pedido) {
          resolve(`el pedido fue realizado correctamente`);
        } else {
          reject('Hubo un problema al realizar su pedido');
        }
      }, 3000);
    });
  }
  
  realizarPedido("Pollo asado")
    .then((mensaje) => {
      console.log(mensaje);
    })
    .catch((error) => {
      console.error(error);
    });
  
