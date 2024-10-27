
class Clima {
    constructor(celcius) {
        this._celcius = celcius;
    }


    get fahrenheit(){
        return (this._celcius * 9)/ 5 + 32;
    }

    set fahrenheit(nuevoFahrenheit){
        this._celcius = ((nuevoFahrenheit - 32) * 5 )/9;
    }

    get celcius(){
        return this._celcius
    }

    set celcius(nuevoCelcius){
        this._celcius = nuevoCelcius;
    }

}

    const clima1 = new Clima(25);
    
    console.log(`Clima en grado Fahrenheit: ${clima1.fahrenheit}°F`)
    clima1.fahrenheit = 86;

    console.log(`Clima en grado Celcius: ${clima1.celcius}°C`)