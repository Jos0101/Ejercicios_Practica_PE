// Definición de la clase Coche
class Coche {
    // Constructor que inicializa la marca, el modelo y la velocidad del coche
    constructor(marca, modelo, velocidad = 0) {
      this._marca = marca; // Atributo privado para almacenar la marca del coche
      this._modelo = modelo; // Atributo privado para almacenar el modelo del coche
      this._velocidad = velocidad; // Atributo privado para almacenar la velocidad del coche
    }
  
    // Getter para obtener la velocidad actual del coche
    get velocidad() {
      return this._velocidad; // Devuelve la velocidad actual
    }
  
    // Método para acelerar el coche, aumentando su velocidad
    acelerar(incremento) {
      // Verificar que el incremento de velocidad sea positivo
      if (incremento > 0) {
        this._velocidad += incremento; // Aumentar la velocidad
        console.log(`El coche ha acelerado. Nueva velocidad: ${this._velocidad} km/h`); // Mensaje de confirmación
      } else {
        console.log("El incremento de velocidad debe ser mayor a 0."); // Mensaje de error si el incremento es inválido
      }
    }
  
    // Método para frenar el coche, disminuyendo su velocidad
    frenar(decremento) {
      // Verificar que el decremento de velocidad sea positivo y no exceda la velocidad actual
      if (decremento > 0 && this._velocidad - decremento >= 0) {
        this._velocidad -= decremento; // Disminuir la velocidad
        console.log(`El coche ha frenado. Nueva velocidad: ${this._velocidad} km/h`); // Mensaje de confirmación
      } else if (this._velocidad - decremento < 0) {
        console.log("El decremento de velocidad es demasiado alto, el coche se detendrá."); // Mensaje si el decremento es demasiado alto
      } else {
        console.log("El decremento de velocidad debe ser mayor a 0."); // Mensaje de error si el decremento es inválido
      }
    }
  
    // Método para mostrar la información del coche
    mostrarInformacion() {
      console.log(`Coche: ${this._marca} ${this._modelo}, Velocidad actual: ${this._velocidad} km/h`); // Mensaje mostrando la información del coche
    }
  }
  
  // Crear una instancia de la clase Coche con marca y modelo iniciales
  const miCoche = new Coche("Toyota", "Corolla");
  
  // Mostrar información inicial del coche
  miCoche.mostrarInformacion(); // Muestra la información inicial
  
  // Acelerar el coche en 20 km/h
  miCoche.acelerar(20); // Acelerar el coche
  miCoche.mostrarInformacion(); // Muestra la información actualizada del coche
  
  // Intentar frenar el coche con un decremento inválido
  miCoche.frenar(10); // Se intenta frenar, mostrando un mensaje si el decremento es demasiado alto
  miCoche.frenar(15)
  
  // Mostrar información final del coche
  miCoche.mostrarInformacion(); // Muestra la información actualizada del coche
  