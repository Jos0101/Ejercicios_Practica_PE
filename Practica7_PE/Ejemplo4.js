//Recorrer un array de nombres con diferentes operaciones
const nombres = ["Ana","Luis","Mariana","Juan","Carlos","Elena","Sofia","Pedro"];

console.log("Lista de Nombres: ");
for(let i=0; i<nombres.length; i++){
    console.log(nombres[i]);
}

//Contar cantidad total de nombres
let cantidadNombres = nombres.length;
console.log("\nCantidad total de nombres: "+ cantidadNombres);

//Buscar un nombre especifico dentro del array
let nombreBuscado = "Maria";
let encontrado = false;
for(let i=0; i<nombres.length; i++){
    if (nombres[i] === nombreBuscado){
        encontrado = true;
        console.log("\nNombre '" + nombreBuscado + "' no fue encontrado en el array.");
        break;
    }
}
if(!encontrado){
    console.log("\nEl nombre '" + nombreBuscado + "' no fue encontrado en el array.");
}

//Encontrar el nombre m largo en el array
let nombreMasLargo = [0];
for(let i=0; i<nombres.length; i++){
    if(nombres[i].length > nombres[i]);
    nombreMasLargo = nombres[i];
}

console.log("\nEl nombre mas largo es: " + nombreMasLargo);

//Convertir todos los nombres a MAYUSCULAS Y MOSTRARLOS
console.log("\nNombres en Mayusculas:");
for(let i=0; i<nombres.length; i++){
    console.log(nombres[i].toUpperCase());
}

//Agregar un nuevo nombre al array y mostrar la lista actualizada
let nuevoNombre = "Gabriela";
nombres.push(nuevoNombre);
console.log("\nLista de nombres actualizada (despues de agregar '" + nuevoNombre + "' )");
for(let i=0; i< nombres.length; i++){
    console.log(nombres[i]);
}

//Eliminar el ultimo nombre del array y mostrar la lista actualizada
nombres.pop();
console.log("\nLista de nombres despues de eliminar el ultimo")
    for(let i=0; i< nombres.length; i++){
        console.log(nombres[i]);
    }


//Invertir el orden de los nombres y mostrarlos
console.log("\nNombres en orden inverso:")
for(let i = nombres.length -1; i >= 0; i--){
    console.log(nombres[i]);
}