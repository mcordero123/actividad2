let frase = "Esto es pensamiento computacional y programación";
let palabraBuscada = "pensamiento";
let cantidadLetras = palabraBuscada.length;


if (frase.includes(palabraBuscada) == true){
    console.log("La palabra buscada " + "(" + palabraBuscada + ")" + " sí está en la frase");
}else{
    console.log("La palabra buscada no está en la frase");
}

console.log("La cantidad de letras en la palabra es de: " + cantidadLetras);