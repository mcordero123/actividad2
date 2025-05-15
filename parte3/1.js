function edad(añoDeNacimiento, añoActual=2025) {
    return añoActual - añoDeNacimiento;
}

fechaNacimiento = Number(prompt("¿En qué año naciste?"));
console.log("Función tradicidional: "+ edad(fechaNacimiento));

let fechaNacimiento2 = (fechaNacimiento) => {
    return 2025 - fechaNacimiento;
}
console.log("Función flecha: " + fechaNacimiento2(fechaNacimiento));
