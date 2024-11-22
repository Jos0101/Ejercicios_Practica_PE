const fs = require('fs');
const fileName = 'vehiculos.json';

function create(){
const vehiculos = [
    { id: 1,  marca: 'Toyota', modelo: 'Hilux', anio: 2020},
    { id:1,  marca: 'Ford', modelo:'Ranger', anio: 2020},
    { id:1,  marca: 'Honda', modelo: 'Civic', anio: 2020}
]

fs.writeFile(fileName, JSON.stringify(vehiculos,null,2),(err) =>{
          if(err){
            console.error("error al crear el archivo Json", err)
            return;

        }else{
            console.log("archivo creado con exito")
          }
    });
}

 module.exports = create;