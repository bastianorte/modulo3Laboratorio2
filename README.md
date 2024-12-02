# Evaluacion Modulo 3 Laboratorio 2

## 📖 Descripción
En este taller, los estudiantes deberán aplicar los tres paradigmas de programación en
JavaScript: funcional, orientada a eventos y orientada a objetos. Estos conceptos se
utilizarán para mejorar la funcionalidad y la estructura del sitio web del hospital, añadiendo
eventos, asincronía, y estructuras basadas en clases para modelar la información del sitio.


## 👁️ Acceso al proyecto
  Para visualizar el archivo HTML y poder modificar el archivo SASS

  Si tienes Git instalado en tu máquina, puedes clonar el repositorio usando el siguiente comando en tu terminal o línea de comandos:

  ```
  git clone https://github.com/bastianorte/Modulo3Laboratorio2.git
  ```

  #### Para poder ver la Web de forma correcta debes generar un servidor con "Live Server" de Visual Studio Code o similar
  
  Para modificar los archivos SASS, abre la carpeta descargada en Visual Studio Code

  Utiliza la extension "Live SASS Compiler" para modificar los archivos SCSS

## 📁 Proyecto 
```
├── assets      
│   ├── scss (Organización SASS 7-1.)
│   │     ├── abstracts
│   │     │     ├── _mixins.scss
│   │     │     └── _variables.scss
│   │     ├── component
│   │     │     ├── _buttons.scss
│   │     │     ├── _cart.scss
│   │     │     └── _slider.scss
│   │     ├── core
│   │     │     ├── _reset.scss
│   │     │     └── _typography.scss
│   │     ├── layout
│   │     │     ├── _banner.scss
│   │     │     ├── _footer.scss
│   │     │     └── _header.scss
│   │     ├── pages
│   │     │     ├── _contacto.scss
│   │     │     ├── _equipo.scss
│   │     │     └── _home.scss
│   │     ├── themes
│   │     │     └── _dark.scss
│   │     ├── vendors
│   │     │     └── carpeta bootstrap
│   │     └── styles.scss
│   ├── css
│   │     ├── styles.css
│   │     └── styles.css.map
│   ├── images
│   │     └── ..images.jpg
│   └──  js    
│         ├── calcularConsula.js
│         ├── contacto.js
│         ├── equipo.js
│         ├── funcionRecursiva.js
│         ├── superClase.js
│         ├── tiempoEspera.js
│         ├── medicos.json
│         └── main.js       
│
├── contacto.html  
├── equipo.html 
├── index.html 
├── readme.md                  
```

##  Objetos JSON

<picture>
  <img src="https://github.com/bastianorte/Modulo3Laboratorio1/blob/main/assets/images/cap1.png">
</picture>

Función que use currying en página de equipos para calcular el costo total de los servicios de un paciente en función del número de consultas realizadas
```
calcularConsulta.js

    const agregarConsulta = (medicos) => (cantidad) => {
      const precio = medicosDisponibles[medicos];
      return cantidad * precio;
    };
```

<picture>
  <img src="https://github.com/bastianorte/Modulo3Laboratorio1/blob/main/assets/images/cap1.png">
</picture>

Función flecha en página de equipos para simplificar la sintaxis en una función que calcule el tiempo promedio de espera de los pacientes.
```
tiempoEspera.js

  const calcularTiempoPromedio = () => {
    const totalTiempo = pacientes.reduce((total, paciente) => total + paciente.tiempoEspera, 0);
    return totalTiempo / pacientes.length;
  };
```

<picture>
  <img src="https://github.com/bastianorte/Modulo3Laboratorio1/blob/main/assets/images/cap1.png">
</picture>

Recursión en página de equipos para calcular de forma recursiva el total de horas de consulta de un doctor a lo largo de la semana.

```
funcionRecursiva.js

  const calcularHorasTotales = (horas, index = 0) => {
      if (index === horas.length) return 0; 
      return horas[index] + calcularHorasTotales(horas, index + 1); 
    };
```

<picture>
  <img src="https://github.com/bastianorte/Modulo3Laboratorio1/blob/main/assets/images/cap1.png">
</picture>

Listener en página de contacto para capturar el envío del formulario y muestra un mensaje de confirmación.

```
contacto.js

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    alert("¡Formulario enviado con éxito!");
});
```

<picture>
  <img src="https://github.com/bastianorte/Modulo3Laboratorio1/blob/main/assets/images/cap1.png">
</picture>

Dispara un evento en toda la página personalizado que simule la llegada de un nuevo paciente, mostrando una notificación en la página.

```
main.js

document.addEventListener("nuevoPaciente", () => {
  // Mostrar la alerta de Bootstrap
  const alerta = document.getElementById("alerta");
  console.log("Nuevo paciente.");
  alerta.style.display = "block";
  setTimeout(() => {
    alerta.style.display = "none"; 
  }, 5000);
});
```

<picture>
  <img src="https://github.com/bastianorte/Modulo3Laboratorio1/blob/main/assets/images/cap1.png">
</picture>

Implementación de una función async/await con promise

```
async function obtenerMedicos() {
  try {
    const medicosResponse = await fetch('assets/js/medicos.json');  // Obtiene el primer JSON (médicos iniciales)

    // Usamos Promise.reject() para manejar el error si la respuesta no es exitosa
    if (!medicosResponse.ok) {
        return Promise.reject('Error al obtener los datos.');  // Rechaza la promesa si no es exitosa
      }

    const medicosData = await medicosResponse.json();  // Datos iniciales

    // Fusionar los dos JSON
    medicos = medicosData;


    // Renderizar los médicos
    renderizarMedicos();
  } catch (error) {
    console.error('Error al obtener los médicos:', error);
  }
}
```


Implementación una clase Doctor con las propiedades nombre, especialidad, y años de experiencia con getter y setter

```
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
```

Crea una subclase de Doctor, por ejemplo Cirujano, que extienda las funcionalidades de la clase base.

```
  class Cirujano extends Doctor {
    // Constructor de la subclase Cirujano
    constructor(nombre, experiencia) {
      super(nombre, 'Cirugía', experiencia);
    }
```



## 🔧 Tecnologías utilizadas
* Bootstrap
* BoxIcons
* GoogleFonts
* Sass


## :pencil2: Autor
Bastian Ortega Fuenzalida