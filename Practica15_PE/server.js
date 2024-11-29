
const express = require('express');

const app = express();

const PORT =  process.env.PORT || 3000;



/*
 -configuracion de rutas
 -ruta principal (root) que responde con un mensaje
*/

app.get('/', (req, res) =>{
    res.send('Hola, este es mi servidor Express');
});

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);  
});