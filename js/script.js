// Array: productos de cuidado de la piel y precios
const productos = [
    { id: 1, tipoDePiel: 'seca', edadMin: 0, edadMax: 29, nombre: 'Crema Hidratante Sferine', precio: 80 },
    { id: 2, tipoDePiel: 'seca', edadMin: 30, edadMax: 100, nombre: 'Crema Hidratante Sferine con SPF', precio: 80 },
    { id: 3, tipoDePiel: 'grasa', edadMin: 0, edadMax: 29, nombre: 'Gel Ultra Limpiador', precio: 57 },
    { id: 4, tipoDePiel: 'grasa', edadMin: 30, edadMax: 100, nombre: 'Gel Ultra Limpiador con SPF', precio: 57 },
    { id: 5, tipoDePiel: 'mixta', edadMin: 0, edadMax: 29, nombre: 'Crema de día Fresh', precio: 70 },
    { id: 6, tipoDePiel: 'mixta', edadMin: 30, edadMax: 100, nombre: 'Crema de día Fresh con SPF', precio: 70 },
];

// Función para recomendar un producto, según el tipo de piel, edad y precio.
function recomendarProducto(tipoDePiel, edad) {
    const productoRecomendado = productos.find(producto => 
        producto.tipoDePiel === tipoDePiel && edad >= producto.edadMin && edad <= producto.edadMax
    );
    return productoRecomendado ? productoRecomendado : { nombre: 'No se encontró un producto adecuado para ti.', precio: 0 };
}

// Función para ejecutar el consultor/simulador de cuidado de la piel.
function simuladorCuidadoPiel() {
    let tipoDePiel;
    let edad;
    let continuar = true;

    do {
        tipoDePiel = prompt("¿Cuál es tu tipo de piel? (seca, grasa, mixta)");
        edad = parseInt(prompt("¿Cuál es tu edad?"));

        if (tipoDePiel && !isNaN(edad)) {
            const productoRecomendado = recomendarProducto(tipoDePiel, edad);
            const resultado = `Basado en tu tipo de piel y edad, te recomendamos usar: ${productoRecomendado.nombre}. Precio: $${productoRecomendado.precio}`;
            console.log(resultado);
            document.getElementById('resultado').innerText = resultado;
            continuar = false;
        } else {
            alert("Por favor, ingrese información válida.");
        }
    } while (continuar);
}
