    // Función recursiva 
    const calcularHorasTotales = (horas, index = 0) => {
        if (index === horas.length) return 0;
        return horas[index] + calcularHorasTotales(horas, index + 1); 
      };
  
      // Modal bootstrap
      function agregarMedico() {
        const myModal = new bootstrap.Modal(document.getElementById('modalMedico'));
        myModal.show();
      }
  
      // Función para guardar las horas ingresadas
      function guardarHoras() {
        const nombreMedicoInput = document.getElementById("nombreMedico");
        const horasInputs = document.querySelectorAll(".hora-dia");
        
        // Obtener las horas del médico
        const horasSemana = Array.from(horasInputs).map(input => parseInt(input.value) || 0); 
  
        console.log(horasSemana)


        const totalHoras = calcularHorasTotales(horasSemana);
  
        // Mostrar el resultado en una alerta
        alert(`El total de horas de consulta de ${nombreMedicoInput.value} es: ${totalHoras} horas.`);
  
        const myModal = bootstrap.Modal.getInstance(document.getElementById('modalMedico'));
        myModal.hide();
      }