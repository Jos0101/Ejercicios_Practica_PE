let readline = require('readline')

let rl = readline.createInterface(
  process.stdin,
  process.stdout

)

rl.question('Ingrese su edad: ', (edad) => {  
    edad = parseInt(edad);

    if(edad >= 0 && edad <= 12){
        console.log('Eres un niño, estas dentro de la categoria (0-12)')

    } else if(edad >= 13 && edad <= 17){
        console.log('Eres un adolescente, estas dentro de la categoria (13-17)')

    } else if(edad >=18 && edad <= 35){
        console.log('Eres un adulto joven, estas dentro de la categoria (18-35)')

    }else if(edad >= 36 && edad <= 59){
        console.log('Eres un adulto, estas dentro de la categoria (36-59)')
        
    }else{
        console.log('Eres un adulto mayor')
    }

   rl.close();
});