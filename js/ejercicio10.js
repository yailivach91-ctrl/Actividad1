function conversion() {
    var celsius = document.getElementById("celsius");
    if (celsius.value === "") {
        alert("Por favor, ingresa un valor en grados Celsius.");
        return;
    }
    var celsius = parseFloat(celsius.value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2) + " °F";
}