// Función tradicional
function TotalAPagar(monto, propina){
    return "Propina: " + propina + " Monto total a pagar: " + (monto + propina);

}

// Función flecha

let totalPagar = (monto, propina) => {
    return "Propina: " + propina + " Monto total a pagar: " + (monto + propina);
}

totalPagar(10000, 3000);