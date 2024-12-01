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


// Clase base: Doctor
class Doctor {
    // Constructor de la clase
    constructor(nombre, especialidad, anosExperiencia) {
      this.nombre = nombre;
      this.especialidad = especialidad;
      this._experiencia = experiencia; // Encapsulando la propiedad
    }
  
    // Getter para la propiedad 'anosExperiencia'
    get anosExperiencia() {
      return this._anosExperiencia;
    }
  
    // Setter para la propiedad 'anosExperiencia'
    set anosExperiencia(value) {
      if (value < 0) {
        console.log("Los años de experiencia no pueden ser negativos.");
      } else {
        this._anosExperiencia = value;
      }
    }
  
    // Método para mostrar información del doctor
    mostrarInfo() {
      console.log(`Doctor: ${this.nombre}`);
      console.log(`Especialidad: ${this.especialidad}`);
      console.log(`Años de experiencia: ${this._anosExperiencia}`);
    }
  
    // Método para calcular el total de pacientes atendidos (se asume que es un valor ficticio)
    calcularPacientesAtendidos() {
      return this._anosExperiencia * 50; // Supongamos que cada año atiende a 50 pacientes
    }
  }
  
  // Subclase: Cirujano
  class Cirujano extends Doctor {
    // Constructor de la subclase Cirujano
    constructor(nombre, anosExperiencia) {
      super(nombre, 'Cirugía', anosExperiencia);
    }
  
    // Sobrescribimos el método calcularPacientesAtendidos para calcular operaciones realizadas
    calcularPacientesAtendidos() {
      return this._anosExperiencia * 30; // Supongamos que cada año realiza 30 operaciones
    }
  
    // Método adicional exclusivo para Cirujano
    realizarOperacion() {
      console.log(`${this.nombre} está realizando una operación.`);
    }
  }
  
  // Ejemplo de uso de las clases
  
  // Crear un objeto de la clase Doctor
  const doctor1 = new Doctor("Dr. Pérez", "Cardiología", 10);
  doctor1.mostrarInfo();
  console.log(`Pacientes atendidos: ${doctor1.calcularPacientesAtendidos()}`);
  
  // Crear un objeto de la clase Cirujano
  const cirujano1 = new Cirujano("Dr. García", 15);
  cirujano1.mostrarInfo();
  console.log(`Operaciones realizadas: ${cirujano1.calcularPacientesAtendidos()}`);
  cirujano1.realizarOperacion();
  
  // Cambiar los años de experiencia usando el setter
  doctor1.anosExperiencia = 12; // Actualiza los años de experiencia
  doctor1.mostrarInfo();