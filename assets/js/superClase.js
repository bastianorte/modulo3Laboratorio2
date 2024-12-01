// Actividad Constructores
// Clase base: Doctor
class Doctor {
    constructor(nombre, especialidad, experiencia) {
      this.nombre = nombre;
      this.especialidad = especialidad;
      this._experiencia = experiencia; 
    }
  
    // Getter para la propiedad 'experiencia'
    get experiencia() {
      return this._experiencia;
    }
  
    // Setter para la propiedad 'experiencia'
    set experiencia(valor) {
      if (valor < 0) {
        console.log("Los años de experiencia no pueden ser negativos.");
      } else {
        this._experiencia = valor;
      }
    }
  
    // Método para mostrar información del doctor
    mostrarInfo() {
      console.log(`Doctor: ${this.nombre}, ${this.especialidad} con ${this._experiencia} años de experiencia`);
    }
  
    // Método para calcular el total de pacientes atendidos (se asume que es un valor ficticio)
    calcularPacientesAtendidos() {
      return this._experiencia * 10; 
    }
  }
  
  // Subclase: Cirujano
  class Cirujano extends Doctor {
    // Constructor de la subclase Cirujano
    constructor(nombre, experiencia) {
      super(nombre, 'Cirugía', experiencia);
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
  
  // Cambiar los años de experiencia usando el setter
  doctor1.experiencia = 12; // Actualiza los años de experiencia
  doctor1.mostrarInfo();
  