const fs = require('fs');
const fileName = 'vehiculos.json';

function modify(){
fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
        console.log("Error al leer el archivo JSON: ", err);
        return;
    }

    try {
        const vehiculos = JSON.parse(data);
        // Eliminar el id 2
        const idEliminar = 2;

        // Buscamos el índice
        const indice = vehiculos.findIndex((vehiculo) => vehiculo.id === idEliminar);
 
        vehiculos[indice].anio = 2022;

        // Guardar los cambios en el archivo
        fs.writeFile(fileName, JSON.stringify(vehiculos, null, 2), (err) => {
            if (err) {
                console.log("Error al escribir archivo JSON: ", err);
            } else {
                console.log("Año del vehículo actualizado exitosamente");
            }
        });

    } catch (error) {
        console.error("Error al parsear el JSON: ", error);
    }
});
};

module.exports = modify;