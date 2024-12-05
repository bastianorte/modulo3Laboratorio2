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
  
  const mostrarPromedio = () => {
    const promedio = calcularTiempoPromedio();
    document.getElementById('promedio').textContent = promedio.toFixed(2); // Muestra el promedio con 2 decimales
  };
  
  const mostrarListaPacientes = () => {
    const listaPacientes = document.getElementById('listaPacientes');
    listaPacientes.innerHTML = ''; 
  
    pacientes.forEach((paciente) => {
      const nuevoPaciente = document.createElement('div');
      nuevoPaciente.className = "pt-2";
      nuevoPaciente.textContent = `${paciente.nombre} - ${paciente.tiempoEspera} minutos`;
      listaPacientes.appendChild(nuevoPaciente);
    });
  };
  

  document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    const nombrePaciente = document.getElementById('nombrePaciente').value;
    const tiempoEspera = parseInt(document.getElementById('tiempoEspera').value);
    
    if (isNaN(tiempoEspera) || tiempoEspera <= 0 || nombrePaciente.trim() === '') {
      alert("Por favor ingresa un nombre y un tiempo válido de espera.");
      return;
    }
    
    pacientes.push({ nombre: nombrePaciente, tiempoEspera });
  
    mostrarPromedio();

    mostrarListaPacientes();
    

    document.getElementById('nombrePaciente').value = '';
    document.getElementById('tiempoEspera').value = '';
  });
  

  window.onload = () => {
    mostrarListaPacientes();
    mostrarPromedio();
  };
  