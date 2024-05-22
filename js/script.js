// Definición: variables y constantes
const productos = [
    {
        tipo: "seca",
        nombre: "Crema hidratante intensiva"
    },
    {
        tipo: "grasa",
        nombre: "Gel limpiador facial"
    },
    {
        tipo: "mixta",
        nombre: "Crema de día"
    }
];

let resultado = "";

// Algoritmo con un condicional
function sugerirLimpiezaPiel(tipoPiel, momentoDia) {
    let limpiezaSugerida = "";

    if (tipoPiel === "grasa") {
        limpiezaSugerida = "Lavar tu rostro con un limpiador facial profundo para piel grasa, recomendamos nuestro Kit para piel oleosa";
    } else if (tipoPiel === "seca") {
        limpiezaSugerida = "Usar aceite desmaquillante, seguido de una crema hidratante intensa";
    } else {
        limpiezaSugerida = "Usar un limpiador suave para piel mixta";
    }

    if (momentoDia === "noche") {
        limpiezaSugerida += "1 hora antes de ir a dormir";
    } else {
        limpiezaSugerida += "Lavar rostro con agua fría a la mañana";
    }
    
    return limpiezaSugerida;
}

// Algoritmo usando un ciclo/bucle

function listarProductos() {
    const productosDisponibles = [
        "Crema Hidratante Sferine",
        "Gel Ultra Limpiador",
        "Crema de día Fresh"
    ];

    let mensaje = "Nuestros productos disponibles son:\n";
    for (let i = 0; i < productosDisponibles.length; i++) {
        mensaje += (i + 1) + ". " + productosDisponibles[i] + "\n";
    }
    alert(mensaje);
}

// Simulador interactivo de SkinCare

function recomendarProducto(tipoDePiel, edad) {
    let productoRecomendado;

    if (tipoDePiel === 'seca') {
        productoRecomendado = 'Crema Hidratante Sferine';
    } else if (tipoDePiel === 'grasa') {
        productoRecomendado = 'Gel Ultra Limpiador';
    } else if (tipoDePiel === 'mixta') {
        productoRecomendado = 'Crema de día Fresh';
    }

    if (edad >= 30) {
        productoRecomendado += ' con SPF';
    }

    return productoRecomendado;
}

function simuladorCuidadoPiel() {
    let tipoDePiel;
    let edad;
    let continuar = true;

    do {
        tipoDePiel = prompt("¿Cuál es tu tipo de piel? (seca, grasa, mixta)");
        edad = parseInt(prompt("¿Cuál es tu edad?"));

        if (tipoDePiel && !isNaN(edad)) {
            const productoRecomendado = recomendarProducto(tipoDePiel, edad);
            const resultado = `Basado en tu tipo de piel y edad, te recomendamos usar: ${productoRecomendado}`;
            alert(resultado);
            continuar = false;
        } else {
            alert("Por favor, ingrese información válida.");
        }
    } while (continuar);
}

simuladorCuidadoPiel(); 

