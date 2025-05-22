// Función tradicional

function  celsiusToFahrenheit(c){
    c = Number(prompt("Ingrese grados celsius | Función tradicional"));
    return (c * 9/5) + 32;
}
console.log("Función tradicional | Grados celsius a fahrenheit: " + celsiusToFahrenheit());

// Función flecha

let celsiusHaciaFahrenheit = (c) => {
    c = Number(prompt("Ingrese grados celsius | Función flecha"));
    return (c * 9/5) + 32;
}
console.log("Función flecha | Grados celsius a fahrenheit: " + celsiusHaciaFahrenheit());

// Función tradicional

function fahrenheitToCelsius(f){
    f = (Number(prompt("Ingrese grados fahrenheit | Función tradicional")));
    return (f - 32) * 5/9;
}
console.log("Función tradicional | Grados fahrenheit a celsius: " + fahrenheitToCelsius());

// Función flecha

let fahrenheitHaciaCelsius = (f) => {
    f = (Number(prompt("Ingrese grados fahrenheit | Función flecha")));
    return (f - 32) * 5/9;
}

console.log("Función flecha | Grados fahrenheit a celsius: " + fahrenheitHaciaCelsius());