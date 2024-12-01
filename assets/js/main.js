// Crear el evento personalizado
const eventoPaciente = new Event("nuevoPaciente");

// Escuchar el evento personalizado
document.addEventListener("nuevoPaciente", () => {
  // Mostrar la alerta de Bootstrap
  const alerta = document.getElementById("alerta");
  console.log("Nuevo paciente.");
  alerta.style.display = "block";
  setTimeout(() => {
    alerta.style.display = "none"; 
  }, 5000);
});

// Obtener el botón y añadirle un listener para disparar el evento cuando se haga clic
const boton = document.getElementById("btnNuevoPaciente");
boton.addEventListener("click", () => {
  // Disparar el evento "nuevoPaciente" cuando se haga clic en el botón
  document.dispatchEvent(eventoPaciente);
});

