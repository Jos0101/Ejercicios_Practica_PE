const readline = require('readline');

 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function preguntarNumero() {
    rl.question("Adivina el número (entre 1 y 100): ", (respuesta) => {
        const numeroUsuario = parseInt(respuesta);
        intentos++;

        if (numeroUsuario === numeroAleatorio) {
            console.log(`¡Felicidades! Has adivinado el número en ${intentos} intentos.`);
            rl.close();
        } else if (numeroUsuario < numeroAleatorio) {
            console.log("El número es mayor.");
            preguntarNumero();  
        } else {
            console.log("El número es menor.");
            preguntarNumero();  
        }
    });
}

preguntarNumero();
