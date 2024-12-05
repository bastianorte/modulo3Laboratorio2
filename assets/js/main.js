// Crear el evento personalizado
const eventoPaciente = new Event("nuevoPaciente");

// Escuchar el evento personalizado
document.addEventListener("nuevoPaciente", () => {
  const alerta = document.getElementById("alerta");
  console.log("Nuevo paciente.");
  alerta.style.display = "block";
  setTimeout(() => {
    alerta.style.display = "none"; 
  }, 10000);
});

// Obtener el botón y añadirle un listener para disparar el evento cuando se haga clic
const boton = document.getElementById("btnNuevoPaciente");
boton.addEventListener("click", () => {

document.dispatchEvent(eventoPaciente);
});

