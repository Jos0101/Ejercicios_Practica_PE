// Definición de la clase Articulo
class Articulo {
    // Constructor para inicializar los atributos nombre, precio y stock
    constructor(nombre, precio, stock) {
        this._nombre = nombre;  // Nombre del producto
        this._precio = precio;  // Precio del producto
        this._stock = stock;    // Stock disponible
    }

    // Método para gestionar la compra de un producto
    comprar(cantidad) {
        // Verificación si la cantidad es válida y si hay suficiente stock
        if (cantidad > 0 && this._stock >= cantidad) {
            this._stock -= cantidad;  // Reduce el stock por la cantidad comprada
            let total = cantidad * this._precio;  // Calcula el precio total

            // Mensaje en caso de compra de más de una unidad
            if (cantidad > 1) {
                console.log(`Usted ha comprado ${cantidad} unidades del producto ${this._nombre}. - Total: $${total}.`);
            } 
            // Mensaje en caso de compra de una sola unidad
            else {
                console.log(`Usted ha comprado ${cantidad} unidad del producto ${this._nombre}. - Total: $${total}.`);
            }
        } 
        // Mensaje si el stock es cero
        else if (this._stock === 0) {
            console.log(`El producto ${this._nombre} actualmente está agotado.`);
        } 
        // Mensaje si la cantidad deseada supera el stock disponible
        else {
            console.log(`La cantidad que quiere comprar es demasiada, actualmente solo hay ${this._stock} unidades del producto ${this._nombre}.`);
        }
    }

    // Método para reabastecer el producto
    reabastecer(cantidad) {
        // Verificar si la cantidad de reabastecimiento es válida
        if (cantidad > 0) {
            this._stock += cantidad;  // Aumentar el stock en la cantidad indicada
            console.log(`Reabasteciendo el stock - Cantidad disponible del producto ${this._nombre} = ${this._stock}.`);
        } else {
            console.log("La cantidad que desea reabastecer debe ser mayor a 0.");
        }
    }
}

// Crear una instancia de la clase Articulo
const ART = new Articulo("Jabón", 20, 10);  // Producto con nombre "Jabón", precio 20 y stock 10

// Llamadas al método comprar con diferentes cantidades
ART.comprar(11);  // Intentar comprar 11 unidades (esperado: mensaje de advertencia de stock)
ART.comprar(1);   // Comprar 1 unidad (esperado: mensaje de compra exitosa)

// Reabastecer el producto
ART.reabastecer(20);  // Reabastecer con 20 unidades (esperado: stock actualizado)

// Comprar una mayor cantidad
ART.comprar(15);  // Comprar 15 unidades (esperado: mensaje de compra exitosa)
