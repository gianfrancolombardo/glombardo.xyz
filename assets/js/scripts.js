document.addEventListener('DOMContentLoaded', function() {
    fetch('assets/data/data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('project-container');
            const row = document.createElement('div');
            row.className = 'row row-cols-1 row-cols-md-2 g-4';
            container.appendChild(row);
            data.projects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'col';
                card.innerHTML = `
                    <div class="card h-100 card-hover">
                        <img src="${project.image}" class="card-img-top" alt="${project.name}">
                        <div class="card-body">
                            <h5 class="card-title">${project.name}</h5>
                            <p class="text-muted mb-5">${project.desc}</p>
                            <ul class="list-inline">${project.tags.map(tag => `<li class="list-inline-item"><span class="badge rounded-pill bg-secondary">${tag}</span></li>`).join('')}</ul>   
                        </div>
                        <div class="card-footer py-3">
                        <a href="${project.url}" class="btn btn-primary" target="_black"><i class="bi bi-arrow-up-right-circle" aria-label="View project about ${project.title}"></i> View Project</a>
                        ${project.post ? `<a href="${project.post}" class="btn btn-outline-primary" target="_black" aria-label="Read Post about ${project.title}"><i class="bi bi-eye-fill"></i> Read Post</a>` : ''}
                        </div>
                    </div>
                `;
                const img = card.querySelector('img');
                img.addEventListener('click', function(event) {
                    if (!event.target.href) {
                        window.open(project.url, '_blank');
                    }
                });
                row.appendChild(card);
            });



            const postContainer = document.getElementById('posts-container');
            const postRow = document.createElement('div');
            postRow.className = 'row row-cols-1 row-cols-md-2 g-4';
            postContainer.appendChild(postRow);
            data.posts.forEach(post => {
                const card = document.createElement('div');
                card.className = 'col';
                card.innerHTML = `
                    <div class="card h-100 card-hover">
                        <img src="${post.image}" class="card-img-top" alt="${post.title}">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                        </div>
                        <div class="card-footer py-3 d-flex justify-content-between align-items-center">
                            <a href="${post.url}" class="btn btn-primary" target="_black" aria-label="Read Post about ${post.title}"><i class="bi bi-eye-fill"></i> Read Post</a>
                            <p class="text-muted mb-0">${post.date}</p>
                        </div>
                `;
                postRow.appendChild(card);
            });
        });
});

