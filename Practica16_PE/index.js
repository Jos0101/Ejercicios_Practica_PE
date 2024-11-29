
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));



 // ** Rutas **

// Ruta principal (página de inicio)
app.get('/', (req, res) => {
    // Enviar el archivo 'index.html' cuando el usuario accede a '/'
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Ruta "Acerca de" (página secundaria)
app.get('/about', (req, res) => {
    // Enviar el archivo 'about.html' cuando el usuario accede a '/about'
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Manejo de rutas no existentes (404)
// Este middleware captura cualquier ruta no definida previamente
app.use((req, res) => {
    // Configurar el código de estado como 404 (No encontrado)
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});



// **iniciar el servidor

app.listen(PORT, () =>{
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});


