const formularioClub = document.getElementById("formularioDeRegistroClub");
const formularioRoboBicicleta = document.getElementById("formularioDeRoboBicicleta");

formularioClub.addEventListener("submit", function (ev) {
    let valido = true;

    const nombre = formularioClub.elements["nombre"];
    const apellidos = formularioClub.elements["apellidos"];
    const edad = formularioClub.elements["edad"];
    const generoHombre = formularioClub.elements["hombre"];
    const generoMujer = formularioClub.elements["mujer"];
    const delClub = formularioClub.elements["delClub"];
    const algoSobreTi = formularioClub.elements["algoSobreTi"];
    const email = formularioClub.elements["email"];
    const telefono = formularioClub.elements["telefono"];

    // Validar nombre 
    if (nombre.value.length < 2) {
        alert("El nombre debe tener al menos 2 caracteres.");
        valido = false;
    }

    // Validar apellidos 
    if (apellidos.value.length < 3) {
        alert("Los apellidos deben tener al menos 3 caracteres.");
        valido = false;
    }

    // Validar edad 
    if (edad.value <= 0) {
        alert("Ingresa una edad válida.");
        valido = false;
    }

    // Validar género
    if (!generoHombre.checked && !generoMujer.checked) {
        alert("Selecciona un género.");
        valido = false;
    }

    // Validar el campo de 'Escribe algo sobre ti' 
    if (algoSobreTi.value.length < 10) {
        alert("Escribe algo sobre ti (mínimo 10 caracteres).");
        valido = false;
    }

    // Validar email 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert("Ingresa un correo electrónico válido.");
        valido = false;
    }

    // Validar teléfono 
    const telefonoRegex = /^[6|7|8|9]\d{8}$/;
    if (!telefonoRegex.test(telefono.value)) {
        alert("Ingresa un número de teléfono válido en España (debe contener 9 dígitos).");
        valido = false;
    }

    // Evitar el envío si hay errores de validación
    if (!valido) {
        ev.preventDefault();
    } else {
        formularioClub.submit(); 
    }
});

formularioRoboBicicleta.addEventListener("submit", function (ev) {
    let valido = true;

    const fecha = formularioRoboBicicleta.elements["fecha"];
    const hora = formularioRoboBicicleta.elements["hora"];
    const color = formularioRoboBicicleta.elements["color"];
    const precio = formularioRoboBicicleta.elements["precio"];
    const tipoBicicleta = formularioRoboBicicleta.elements["tipoBicicleta"];
    const accesorios = formularioRoboBicicleta.elements["accesorios"];
    const marca = formularioRoboBicicleta.elements["marca"];

    // Validar fecha
    if (!fecha.value) {
        alert("Selecciona una fecha.");
        valido = false;
    }

    // Validar hora
    if (!hora.value) {
        alert("Selecciona una hora.");
        valido = false;
    }

    // Validar color
    if (!color.value) {
        alert("Selecciona un color para la bicicleta.");
        valido = false;
    }

    // Validar precio
    if (precio.value < 0 || precio.value > 1000) {
        alert("Selecciona un rango de precio válido (0 a 1000).");
        valido = false;
    }

    // Validar tipo de bicicleta
    if (tipoBicicleta.value === "") {
        alert("Selecciona el tipo de bicicleta.");
        valido = false;
    }

    // Validar accesorios
    if (accesorios.selectedOptions.length === 0) {
        alert("Selecciona al menos un accesorio.");
        valido = false;
    }

    // Validar marca
    if (!marca.value) {
        alert("Indica la marca de la bicicleta.");
        valido = false;
    }

    // Evitar el envío si hay errores de validación
    if (!valido) {
        ev.preventDefault();
    } else {
        formularioRoboBicicleta.submit();
    }
});
