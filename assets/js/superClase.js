// Actividad Constructores
// Clase base: Doctor
class Doctor {
    constructor(nombre, especialidad, experiencia) {
      this.nombre = nombre;
      this.especialidad = especialidad;
      this._experiencia = experiencia; 
    }
  
    // Getter 
    get experiencia() {
      return this._experiencia;
    }
  
    // Setter 
    set experiencia(valor) {
      if (valor < 0) {
        console.log("Los años de experiencia no pueden ser negativos.");
      } else {
        this._experiencia = valor;
      }
    }
  

    mostrarInfo() {
      console.log(`Doctor: ${this.nombre}, ${this.especialidad} con ${this._experiencia} años de experiencia`);
    }

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
  
  
  // Ejemplo doctor
  const doctor1 = new Doctor("Dr. Pérez", "Cardiología", 10);
  doctor1.mostrarInfo();
  console.log(`Pacientes atendidos: ${doctor1.calcularPacientesAtendidos()}`);
  
  // Ejemplo Cirujano
  const cirujano1 = new Cirujano("Dr. García", 15);
  cirujano1.mostrarInfo();
  console.log(`Operaciones realizadas: ${cirujano1.calcularPacientesAtendidos()}`);
  

  doctor1.experiencia = 12; 
  doctor1.mostrarInfo();
  