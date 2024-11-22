const readline = require('readline');

// Llamamos las funciones
const create = require('./create');
const add = require('./add');
const read = require('./read');
const modify = require('./modify');
const deleteVehicle = require('./delete');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log('\n——— Menú ———');
    console.log('1. Crear archivo JSON');
    console.log('2. Leer archivo JSON');
    console.log('3. Agregar vehículo');
    console.log('4. Modificar vehículo');
    console.log('5. Eliminar vehículo');
    console.log('6. Salir');
}

function handleMenuOption(option) {
    switch (option) {
        case '1':
            create(); // Llamada a la función crear
            break;
        case '2':
            read(); // Llamada a la función leer
            break;
        case '3':
            add(); // Llamada a la función agregar
            break;
        case '4':
            modify(); // Llamada a la función modificar
            break;
        case '5':
            deleteVehicle(); // Llamada a la función eliminar
            break;
        case '6':
            rl.close();
            break;
        default:
            console.log('Opción no válida. Intentelo de nuevo');
            break;
    }

    setTimeout(promptMenu, 1000)
}

function promptMenu(){
    showMenu();
    rl.question('Seleccione una opcion: ', handleMenuOption)
}


promptMenu();