document.addEventListener("DOMContentLoaded", function () {
    const proyectosContainer = document.getElementById("proyectos-container");

    // Cargar el archivo JSON
    fetch("assets/data.json")
        .then(response => response.json())
        .then(data => {
            // Iterar sobre la colección de proyectos
            data.forEach(proyecto => {
                // Crear elemento de proyecto
                const proyectoElement = document.createElement("div");
                proyectoElement.classList.add("col-md-12");
                proyectoElement.innerHTML = `
                    <div class="card bg-dark text-light">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${proyecto.imagen}" class="img-fluid rounded-start" alt="${proyecto.nombre}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${proyecto.nombre}</h5>
                                    <p class="card-text">${proyecto.descripcion}</p>
                                    <a href="${proyecto.urlProyecto}" class="btn btn-primary" target="_blank">Visit Site</a>
                                    ${proyecto.urlPost ? `<a href="${proyecto.urlPost}" class="btn btn-outline-secondary" target="_blank">View Post</a>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Agregar el elemento del proyecto al contenedor
                proyectosContainer.appendChild(proyectoElement);
            });
        })
        .catch(error => console.error("Error al cargar el archivo JSON:", error));
});