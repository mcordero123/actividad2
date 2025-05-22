// Función tradicional

function  celsiusToFahrenheit(c){
    c = Number(prompt("Ingrese grados celsius"));
    return (c * 9/5) + 32;
}

// Función flecha

let celsiusHaciaFahrenheit = (c) => {
    c = Number(prompt("Ingrese grados celsius"));
    return (c * 9/5) + 32;
}

celsiusHaciaFahrenheit(25)

// Función tradicional

function fahrenheitToCelsius(f){
    f = (Number(prompt("Ingrese grados fahrenheit")));
    return (f - 32) * 5/9;
}

// Función flecha

let fahrenheitHaciaCelsius = (f) => {
    f = (Number(prompt("Ingrese grados fahrenheit")));
    return (f - 32) * 5/9;
}

fahrenheitHaciaCelsius(68)

console.log("Grados celsius a fahrenheit: " + celsiusToFahrenheit());
console.log("Grados fahrenheit a celsius: " + fahrenheitToCelsius());