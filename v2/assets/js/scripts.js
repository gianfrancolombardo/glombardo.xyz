document.addEventListener('DOMContentLoaded', function() {
    fetch('assets/data/data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('project-container');
            data.forEach(project => {
                const card = document.createElement('div');
                card.className = 'card mb-3 ps-0';
                card.innerHTML = `
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${project.image}" class="img-fluid rounded-start" alt="${project.name}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${project.name}</h5>
                                <p class="card-text text-muted mb-4">${project.desc}</p>
                                <ul class="list-inline">${project.tags.map(tag => `<li class="list-inline-item"><span class="badge rounded-pill bg-secondary">${tag}</span></li>`).join('')}</ul>
                                <a href="${project.url}" class="btn btn-primary" target="_black"><i class="bi bi-arrow-up-right-circle"></i> View Project</a>
                                ${project.post ? `<a href="${project.post}" class="btn btn-outline-primary" target="_black"><i class="bi bi-eye-fill"></i> Read Post</a>` : ''}
                            </div>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        });
});