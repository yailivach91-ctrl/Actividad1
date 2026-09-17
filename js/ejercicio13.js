function calcular() {
    var edad = document.getElementById("edad");
    if (edad.value === "" ) {
        alert("Por favor, ingresa tu edad.");
        return;
    }
    if(edad.value>110){
        alert("Por favpr ingresa una edad valida.");
        return;
    }
    if (edad.value < 18) {
        document.getElementById("resultado").value = "No puedes votar.";
        return;
    }   
    document.getElementById("resultado").value = "Puedes votar.";
}

