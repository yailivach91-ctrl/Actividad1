let estudiantes = [];
function Agregar() {
    let inputNombre = document.getElementById("nombre");
    let inputCalificacion = document.getElementById("calificacion");
    let nombre = inputNombre.value.trim();
    let calificacion = parseFloat(inputCalificacion.value);

    if (nombre === "" || inputCalificacion.value.trim() === "") {
        alert("Por favor, completa ambos campos.");
        return;
    }
    if (isNaN(calificacion)) {
        alert("Por favor, ingresa una calificación válida.");
        return;
    }
    let estudiante = {
        nombre: nombre,
        calificacion: calificacion
    };
    estudiantes.push(estudiante);
    alert("Estudiante agregado  correctamente: " + nombre);
    inputNombre.value = "";
    inputCalificacion.value = "";
    inputNombre.focus();
}
function Resultados() {
    if (estudiantes.length === 0) {
        alert("Primero debes agregar al menos un estudiante.");
        return;
    }
    let sumaTotal = estudiantes.reduce((total, est) => total + est.calificacion, 0);
    let promedio = sumaTotal / estudiantes.length;
    let calificacionMaxima = Math.max(...estudiantes.map(est => est.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(est => est.calificacion));
    let estudianteMayor = estudiantes.find(est => est.calificacion === calificacionMaxima);
    let estudianteMenor = estudiantes.find(est => est.calificacion === calificacionMinima);
    document.getElementById("califprom").value = "Promedio: " + promedio.toFixed(2);
    document.getElementById("ecalifmayor").value = "Mayor nota: " + estudianteMayor.nombre + " (" + estudianteMayor.calificacion + ")";
    document.getElementById("ecalifmenor").value = "Menor nota: " + estudianteMenor.nombre + " (" + estudianteMenor.calificacion + ")";
}