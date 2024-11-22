const fs = require('fs')
const fileName = 'vehiculos.json'


function read(){
fs.readFile(fileName, 'utf8',(err,content) =>{
    if(err){
      console.error("erro al leer el archivo Json", err)
      return;

  }
  const vehiculos = JSON.parse(content);
  console.log('contenido del archivo Json:', vehiculos)
 
 });
}

module.exports = read;