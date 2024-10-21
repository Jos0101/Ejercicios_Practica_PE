const readline = require('readline');

 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 
rl.question("Introduce una cadena de texto: ", (cadena) => {
 
    rl.question("Introduce la letra a contar: ", (letraABuscar) => {
        // Inicializamos el contador de letras
        let contadorLetras = 0;
        let posicion = 0;

        // Usamos un bucle do...while para recorrer toda la cadena
        do {
            // Si encontramos la letra que buscamos (ignorando mayúsculas y minúsculas), incrementamos el contador
            if (cadena[posicion].toLowerCase() === letraABuscar.toLowerCase()) {
                contadorLetras++;
            }
            // Pasamos a la siguiente posición
            posicion++;
        } while (posicion < cadena.length);

        // Mostramos el número de veces que aparece la letra
        console.log(`La letra '${letraABuscar}' aparece ${contadorLetras} veces en la cadena.`);
        
        rl.close();
    });
});
