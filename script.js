document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Validación simple para el formulario
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name === "" || email === "") {
        alert("Por favor, complete todos los campos.");
        event.preventDefault(); // Evitar que el formulario se envíe
    } else {
        alert("Formulario enviado correctamente");
    }
});
