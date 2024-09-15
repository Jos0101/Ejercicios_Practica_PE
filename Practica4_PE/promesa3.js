
function solicitarDatosServidor(){
    return new Promise((resolve,reject)=>{
        let exito = true;

    setTimeout(() => {
        if(exito){
            resolve({
              id: 1,
              nombre: 'josue',
              edad: 20
             })

        }else{
            reject("Error al obtener datos del servidor")
        }
        
        }, 2000);
      }
   )};


solicitarDatosServidor()
.then((datos)=>{
    console.log("Datos recibidos:", datos)
})

.catch((error)=>{
    console.error(error)

 });