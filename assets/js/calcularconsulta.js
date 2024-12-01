    // Medicos con precios
    const medicosDisponibles = {
      general: 100,
      neurologo: 200,
      pediatria: 120,
      psicologia: 50
    };

    // Currying para calcular el valor de diferentes consultas
    const agregarProducto = (medicos) => (cantidad) => {
      const precio = medicosDisponibles[medicos];
      return cantidad * precio;
    };

    // Función para calcular el total del carrito
    const calcularTotal = (medicos) => {
      return medicos.reduce((total, medicos) => total + medicos.precioTotal, 0);
    };


    // Carrito de productos
    let carrito = [];

    // Mostrar los productos en el carrito en el DOM
    function mostrarCarrito() {
      const listaCarrito = document.getElementById("lista-carrito");
      listaCarrito.innerHTML = "";
      carrito.forEach(medicos => {
        const div = document.createElement("div");
        div.classList.add('col-md-12');
  
          // Agregar datos a la tarjeta
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
        const precioTotal = agregarProducto(productoSeleccionado)(cantidad);
        carrito.push({ 
          nombre: productoSeleccionado.charAt(0).toUpperCase() + productoSeleccionado.slice(1), // Capitalizar el nombre
          cantidad,
          precioTotal 
        });
        mostrarCarrito();
        actualizarTotal();
      }
    }

    // Actualizar el total después de agregar productos
    function actualizarTotal() {
      let total = calcularTotal(carrito);
      document.getElementById("total").textContent = `Total: $${total}`;
    }

