const medicosTableBody = document.getElementById('medicosTable')


let medicos = [];
let sortAscendente = true; 
let ordenAscendenteExperiencia = true;

// Async
async function obtenerMedicos() {
  try {
    const medicosResponse = await fetch('assets/js/medicos.json');  // Obtiene el primer JSON (médicos iniciales)


    if (!medicosResponse.ok) {
        return Promise.reject('Error al obtener los datos.');  
      }

    const medicosData = await medicosResponse.json();  

    medicos = medicosData;

    renderizarMedicos();
  } catch (error) {
    console.error('Error al obtener los médicos:', error);
  }
}


function renderizarMedicos() {
    const medicosParaRenderizar = arguments.length > 0 ? arguments[0] : medicos;
  
    medicosTableBody.innerHTML = '';  // Limpiar tabla
  
    medicosParaRenderizar.map(({ id, nombre, especialidad, imagen, experiencia, genero }) => {
      const card = document.createElement('div');
      card.classList.add('col-md-4', 'my-2');
  
                  // Condicional segun genero para llamar dr o dra
                  if (genero === "m") {
                    genero = "Dr."
                } else {
                    genero = "Dra."
                }
  
      card.innerHTML = `
                      <div class="card">
                          <div class="card-head pt-4 text-center">
                            <img src="${imagen}" width="100" height="100" class="rounded-circle">
                          </div>
                          <div class="card-body text-center">
                              <h5 class="card-title">${genero} ${nombre}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">${especialidad}</h6>
                              <p class="card-text">Experiencia: ${experiencia} años </p>
                          </div>
                      </div>  
      `;
      medicosTableBody.appendChild(card);
    });
  }

  // Inicializar la tabla con los médicos cuando se carga la página
obtenerMedicos();