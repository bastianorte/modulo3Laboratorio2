// Lista de pacientes por defecto
let pacientes = [
    { nombre: "Juan", tiempoEspera: 15 },
    { nombre: "Ana", tiempoEspera: 25 },
    { nombre: "Luis", tiempoEspera: 10 }
  ];
  
  // Función para calcular el promedio de tiempos de espera
  const calcularTiempoPromedio = () => {
    const totalTiempo = pacientes.reduce((total, paciente) => total + paciente.tiempoEspera, 0);
    return totalTiempo / pacientes.length;
  };
  
  // Función para mostrar el tiempo promedio en la página
  const mostrarPromedio = () => {
    const promedio = calcularTiempoPromedio();
    document.getElementById('promedio').textContent = promedio.toFixed(2); // Muestra el promedio con 2 decimales
  };
  
  // Función para mostrar la lista de pacientes en la página
  const mostrarListaPacientes = () => {
    const listaPacientes = document.getElementById('listaPacientes');
    listaPacientes.innerHTML = ''; // Limpiar la lista actual
  
    pacientes.forEach((paciente) => {
      const nuevoPaciente = document.createElement('div');
      nuevoPaciente.className = "pt-2";
      nuevoPaciente.textContent = `${paciente.nombre} - ${paciente.tiempoEspera} minutos`;
      listaPacientes.appendChild(nuevoPaciente);
    });
  };
  
  // Manejar el envío del formulario para agregar un paciente
  document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que el formulario se recargue al enviarlo
    
    const nombrePaciente = document.getElementById('nombrePaciente').value;
    const tiempoEspera = parseInt(document.getElementById('tiempoEspera').value);
    
    if (isNaN(tiempoEspera) || tiempoEspera <= 0 || nombrePaciente.trim() === '') {
      alert("Por favor ingresa un nombre y un tiempo válido de espera.");
      return;
    }
    
    // Agregar el nuevo paciente al arreglo de pacientes
    pacientes.push({ nombre: nombrePaciente, tiempoEspera });
  
    // Mostrar el tiempo promedio actualizado
    mostrarPromedio();
    
    // Mostrar la lista actualizada
    mostrarListaPacientes();
    
    // Limpiar los campos de entrada
    document.getElementById('nombrePaciente').value = '';
    document.getElementById('tiempoEspera').value = '';
  });
  
  // Mostrar la lista de pacientes y el promedio al cargar la página
  window.onload = () => {
    mostrarListaPacientes();
    mostrarPromedio();
  };
  