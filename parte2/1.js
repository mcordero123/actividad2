let arreglo = [1, 2, 3, 4, 5];
let maximo = arreglo[0];

for (let i = 0; i < arreglo.length; i++) {
    if (maximo < arreglo[i]){
        maximo = arreglo[i];
    }
}
console.log("El número mayor es: " + maximo)