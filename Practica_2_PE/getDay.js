//crearemos un objeto date para recibir la fecha actual
let fechaActual = new Date();

//obtener el dia de la semana (0 = domingo, hasta el 6 = sabado)
let diaSemana = fechaActual.getDay();

//creamos un arreglo (array) para separar los numeros de dias a los nombres de los dias
let nombreDias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

//obtener el nombre del dia correspoondiente el numero obtenido
let nombreDia = nombreDias[diaSemana];

//mostrar nombre del dia 
console.log(`hoy es: ${nombreDia}`);