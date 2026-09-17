function conversion(){
    var pesos = document.getElementById("pesos");
    if (pesos.value === "") {
        alert("Por favor, ingresa un valor en Pesos Mexicanos.");
        return;
    }
    var pesos = parseFloat(pesos.value);
    var dolares = pesos * 0.055;
    document.getElementById("dolares").value = dolares.toFixed(2) + " USD";
}