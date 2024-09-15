
function pedidoComida(comida, bebida){
       return new Promise((resolve,reject)=>{
           
        if(comida && bebida){
            resolve("pedido de comida exitoso : " + comida + " y " + bebida)
          }else{
            reject("ha ocurrido un error con su pedido, eliga una comida y bebida")
          }
       }
    )

}

pedidoComida("hamburguesa", "cocacola")
 .then((mensaje)=>{
    console.log(mensaje,)
 })
 .catch((error)=>{
    console.error(error)
 }
)