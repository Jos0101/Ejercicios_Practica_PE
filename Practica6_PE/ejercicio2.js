let readline = require('readline')

let rl = readline.createInterface(
  process.stdin,
  process.stdout

)

rl.question('Ingrese un numero (1-12): ', (numero) => {  
     numero = parseInt(numero)

     let nombreMes;

     switch (numero) {
        case 1:  
            nombreMes = 'Enero';
            break;
        case 2:  
            nombreMes = 'Febrero';
            break;
        case 3:
            nombreMes = 'Marzo';
            break;
        case 4: 
            nombreMes = 'Abril';
            break;
        case 5:  
             nombreMes = 'Mayo';
            break;
        case 6:  
            nombreMes = 'Junio';
            break;
        case 7:  
            nombreMes = 'Julio';
            break;
        case 8:  
            nombreMes = 'Agosto';
            break;
        case 9:  
            nombreMes = 'Septiembre';
            break;
        case 10:  
            nombreMes = 'Octubre';
            break;
        case 11:  
             nombreMes = 'Noviembre';
            break;
        case 12:  
            nombreMes = 'Diciembre';
            break;
     
        default:
            nombreMes = 'Numero de mes no valido';
            break;
     }

     console.log("El mes es:" ,nombreMes)

     

   rl.close();
});



 
    