const temporizadorTresSegundos = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("tiempo completado despues de 3 segundos");
    },3000)
});


temporizadorTresSegundos
.then((mensaje) =>{
    console.log(mensaje)
})
.catch((error)=>{
    console.error(error)
})

