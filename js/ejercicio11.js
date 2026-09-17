function conversion() {
    var kilometros = document.getElementById("kilometros");
    if (kilometros.value === "") {
        alert("Por favor, ingresa un valor en kilómetros.");
        return;
    }
    var kilometros = parseFloat(kilometros.value);
    var millas = kilometros * 0.621371;
    document.getElementById("millas").value = millas.toFixed(2) + " mi";
}