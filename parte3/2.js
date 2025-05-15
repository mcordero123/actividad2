function  celsiusToFahrenheit(c){
    c = Number(prompt("Ingrese grados celsius"));
    return (c * 9/5) + 32;
}



function fahrenheitToCelsius(f){
    f = (Number(prompt("Ingrese grados fahrenheit")));
    return (f - 32) * 5/9;
}

console.log("Grados celsius a fahrenheit: " + celsiusToFahrenheit());
console.log("Grados fahrenheit a celsius: " + fahrenheitToCelsius());