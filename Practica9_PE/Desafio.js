

class Libro {
    constructor(titulo, autor,anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
    }


     mostrarResumen(){
        console.log(this.titulo, 'de', this.autor, 'Publicado en', this.anio)
     }
}

const libro1 = new Libro("'Astrofisica para gente con prisa'", 'Neil deGrasse Tyson,', 2017);
libro1.mostrarResumen();