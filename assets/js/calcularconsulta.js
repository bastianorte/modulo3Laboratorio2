let carrito = [];
let totalGlobal = 0; // Variable global para almacenar el total

// Medicos con precios
    const medicosDisponibles = {
      general: 100,
      neurologo: 200,
      pediatria: 120,
      psicologia: 50
    };

    // Currying para calcular el valor de diferentes consultas
    const agregarConsulta = (medicos) => (cantidad) => {
      const precio = medicosDisponibles[medicos];
      return cantidad * precio;
    };
    

// Función para calcular el total del carrito
const calcularTotal = (medicos) => {
  return medicos.reduce((total, medicos) => total + medicos.precioTotal, 0);
};

// Función para mostrar el carrito
function mostrarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  listaCarrito.innerHTML = "";
  carrito.forEach(medicos => {
    const div = document.createElement("div");
    div.classList.add('col-md-12');
    div.innerHTML = `
      <div class="text-center">
        <p>${medicos.nombre} $ ${medicos.precioTotal}</p>
      </div>  
    `;
    listaCarrito.appendChild(div);
  });
}

// Función para agregar un producto al carrito
function agregarAlCarrito() {
  const productoSeleccionado = document.getElementById("medicos").value;
  const cantidad = 1;

  if (cantidad > 0) {
    const precioTotal = agregarConsulta(productoSeleccionado)(cantidad);
    carrito.push({ 
      nombre: productoSeleccionado.charAt(0).toUpperCase() + productoSeleccionado.slice(1), // Capitalizar el nombre
      cantidad,
      precioTotal 
    });
    mostrarCarrito();
    actualizarTotal(); // Actualizamos el total después de agregar
  }
}

// Función para actualizar el total
function actualizarTotal() {
  totalGlobal = calcularTotal(carrito); // Guardamos el total en la variable global
  document.getElementById("total").textContent = `Total: $${totalGlobal}`;
}

// Función para obtener el valor total fuera de la función de actualización
function obtenerTotal() {
  console.log(totalGlobal); // Accedemos a la variable global para mostrar el total
  return totalGlobal; // Retornamos el total global
}

//Integra composición de funciones para aplicar descuentos a los costos de consultas
    let costoConDescuento;
    let descuento = 0
    // Función para aplicar el descuento
    function aplicarDescuento() {
      if (carrito.length < 1) {
        descuento = 0;  // Sin descuento si el carrito está vacío
      } else if (carrito.length >= 1 && carrito.length < 3) {
        descuento = 0.1;  // 10% de descuento si hay entre 1 y 2 productos
      } else if (carrito.length >= 3 && carrito.length < 5) {
        descuento = 0.2;  // 20% de descuento si hay entre 3 y 4 productos
      } else {
        descuento = 0.3;  // 30% de descuento si hay 5 o más productos
      }

    // Calcular el costo con descuento
    costoConDescuento = obtenerTotal() * (1 - descuento);

    document.getElementById('resultado').innerText = `El costo final después de aplicar el descuento es: $${costoConDescuento.toFixed(2)}`;
    }