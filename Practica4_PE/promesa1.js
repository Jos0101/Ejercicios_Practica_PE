const doTask = (iteraciones)=>{
    return new Promise((resolve,reject)=>{

        
    const numeros = [];
    
    for(let i = 0; i < iteraciones;i++){

        const numero = 1 + Math.floor(Math.random() * 6);

           numeros.push(numero);
        
         if(numero === 6){
            reject({
                error: true,
                message: "Ha sacado 6"
            });
            return;
        }
    }
      resolve({
        error:false,
        value:numeros
      });

    }
  )
}


doTask(0)
.then(result => console.log("tiradas correctas: ", result.value))
.catch(err => console.log("Ha ocurrido un error: ", err.message ));