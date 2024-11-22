const fs = require('fs')
const fileName = 'vehiculos.json'
 
function add(){
fs.readFile(fileName, 'utf8',(err,data) =>{
    if(err){
      console.error("erro al leer el archivo Json", err)
      return;

  }

  const vehiculos = JSON.parse(data);
  const nuevoVehiculo = {id: 4, marca: 'Toyota', modelo: 'Corolla', anio: 2020}
  vehiculos.push(nuevoVehiculo);

  
  fs.writeFile(fileName, JSON.stringify(vehiculos,null,2),(err) =>{
    if(err){
      console.error("error al escribir el archivo json", err)
      return;

  }else{
      console.log("Nuevo vehiculo agregado al archivo JSON")
    }
   });
 });

}

module.exports = add;