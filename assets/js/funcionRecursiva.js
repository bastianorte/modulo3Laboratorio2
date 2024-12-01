    // Función recursiva para calcular el total de horas de consulta en una semana
    const calcularHorasTotales = (horas, index = 0) => {
        if (index === horas.length) return 0; // Caso base: cuando se han recorrido todos los días
        return horas[index] + calcularHorasTotales(horas, index + 1); // Recursión sumando las horas
      };
  
      // Función para mostrar el modal y agregar un nuevo médico
      function agregarMedico() {
        // Mostrar el modal
        const myModal = new bootstrap.Modal(document.getElementById('modalMedico'));
        myModal.show();
      }
  
      // Función para guardar las horas ingresadas
      function guardarHoras() {
        const nombreMedicoInput = document.getElementById("nombreMedico");
        const horasInputs = document.querySelectorAll(".hora-dia");
        
        // Obtener las horas del médico
        const horasSemana = Array.from(horasInputs).map(input => parseInt(input.value) || 0); // Convertir los valores a números
  
        console.log(horasSemana)

        // Llamar a la función recursiva para calcular el total
        const totalHoras = calcularHorasTotales(horasSemana);
  
        // Mostrar el resultado en una alerta
        alert(`El total de horas de consulta de ${nombreMedicoInput.value} es: ${totalHoras} horas.`);
  
        // Cerrar el modal
        const myModal = bootstrap.Modal.getInstance(document.getElementById('modalMedico'));
        myModal.hide();
      }