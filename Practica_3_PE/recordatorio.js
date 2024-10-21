function establecerRecordatorio(fechaHoraRecordatorio, mensaje) {

    const ahora = new Date();
 
  
    // Convertir texto de fecha y hora del recordatorio en un objeto Date
    const horaRecordatorio = new Date(fechaHoraRecordatorio);
    console.log('Fecha y hora del recordatorio:', horaRecordatorio);
  
    const diferenciaTiempo = horaRecordatorio.getTime() - ahora.getTime();
    console.log('Diferencia de tiempo en milisegundos:', diferenciaTiempo);
  
    // Comprobar si la diferencia es positiva, significa que el recordatorio es para el futuro
    if (diferenciaTiempo > 0) {
  
      setTimeout(() => { 
  
        const anio = horaRecordatorio.getFullYear();
        const mes = horaRecordatorio.getMonth() + 1;
        const dia = horaRecordatorio.getDate();
        const horas = horaRecordatorio.getHours();
        const minutos = horaRecordatorio.getMinutes();
        const segundos = horaRecordatorio.getSeconds();
  
        console.log(`El recordatorio es para el ${dia}/${mes}/${anio} a las ${horas}:${minutos}:${segundos} - ${mensaje}`);
      }, diferenciaTiempo);
  
    } else {
      console.log('La fecha y hora ya han pasado');
    }
  }
  
  establecerRecordatorio('2024-09-06T10:40:50', 'Es hora de la práctica');
  