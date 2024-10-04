const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num;
function contarVocalesyDigitos(){
    rl.question('ingresa una mensaje: ',(mensaje)=>{
       

        let vocales = ['a', 'e', 'i', 'o', 'u'];
         let contarVocales = 0;
          let contarDigitos = 0;
                
          while (mensaje.trim().length === 0) {
            console.log("el mensaje no puede puede estar vacio")
            break;
          }

        for (let i = 0; i < mensaje.length; i++) {
            let letra = mensaje[i];
            if (vocales.includes(letra)) {
                contarVocales++;
            } else if (letra >= '0' && letra <= '9') {
                contarDigitos++;
            }
        }

        console.log(`Número de vocales: ${contarVocales}`);
        console.log(`Número de dígitos: ${contarDigitos}`);
        rl.close();
    });
}

contarVocalesyDigitos();