//Ejercicio 5 - Recorrer un objeto con sus propiedades

const persona = {
    nombre : "Josue",
    edad: 20,
    ciudad: "San miguel"
};

for(let propiedad in persona){
    console.log(`${propiedad}: ${persona[propiedad]}`)
};