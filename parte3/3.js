// Función tradicional
function TotalAPagar(monto, propina){
    monto = Number(prompt("Ingrese el monto a pagar | Función tradicional"));
    propina = Number(prompt("Ingrese el monto de la propina | Función tradicional"));
    return "Función tradicional | Propina: " + propina + " | Monto total a pagar: " + (monto + propina);

}
console.log(TotalAPagar());

// Función flecha

let totalPagar = (monto, propina) => {
    monto = Number(prompt("Ingrese el monto a pagar | Función flecha"));
    propina = Number(prompt("Ingrese el monto de la propina | Función flecha"));
    return "Función flecha | Propina: " + propina + " | Monto total a pagar: " + (monto + propina);
}
console.log(totalPagar());
