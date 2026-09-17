function calcular() {
    let cadena = document.getElementById("cadena");
    if (cadena.value === "") {
        alert("Por favor, ingresa los numeros separados por una coma.");
        return;
    }
    
    let arreglo = cadena.value.split(",");
    let numeros = arreglo.map(Number);
    let nmayor = Math.max(...numeros);
    let nmenor = Math.min(...numeros);
    let suma = numeros.reduce((acc, valor) => acc + valor, 0);
    let promedio = suma / numeros.length;
    document.getElementById("nmayor").value = "Numero mayor: " + nmayor;
    document.getElementById("nmenor").value = "Numero menor: " + nmenor;
    document.getElementById("promedio").value = "Promedio: " + promedio;
}