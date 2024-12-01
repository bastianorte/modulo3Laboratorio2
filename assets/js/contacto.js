// Capturamos el formulario
const formulario = document.getElementById("miFormulario");

// Añadimos un listener al evento submit del formulario
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    alert("¡Formulario enviado con éxito!");
});
