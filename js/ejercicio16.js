const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    const input1 = document.getElementById("numero1").value.trim();
    const input2 = document.getElementById("numero2").value.trim();
    const campoResultado = document.getElementById("resultado");

    if (input1 === "" || input2 === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Por favor, ingresa ambos números para operar.'
        });
        return;
    }

    const n1 = parseFloat(input1);
    const n2 = parseFloat(input2);

    if (isNaN(n1) || isNaN(n2)) {
        Swal.fire({
            icon: 'error',
            title: 'Entrada inválida',
            text: 'Asegúrate de ingresar solo valores numéricos.'
        });
        return;
    }
    if (operacion === 'dividir' && n2 === 0) {
        campoResultado.value = "";
        Swal.fire({
            icon: 'error',
            title: 'Operación no válida',
            text: 'No es posible dividir un número entre cero.'
        });
        return;
    }
    let total = 0;
    switch (operacion) {
        case 'sumar':
            total = sumar(n1, n2);
            break;
        case 'restar':
            total = restar(n1, n2);
            break;
        case 'multiplicar':
            total = multiplicar(n1, n2);
            break;
        case 'dividir':
            total = dividir(n1, n2);
            break;
    }
    campoResultado.value = total;
};