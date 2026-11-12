
const projects = [
    {
        title: "DIGITAL ROOT",
        category: "PUZZLE",
        engine: "UNITY",
        description: "A little game about numbers, logic and speed. Can you make the right choice?",
        status: "AVAILABLE SOON",
        cover: "digital",
        symbol: "09",
        itchUrl: ""
    }

    // Чтобы добавить следующую игру, скопируй объект выше
    // и вставь его сюда через запятую.
    //
    // {
    //     title: "MY NEXT GAME",
    //     category: "ARCADE",
    //     engine: "UNITY",
    //     description: "Your game description.",
    //     status: "PLAY NOW",
    //     cover: "placeholder",
    //     symbol: "✳",
    //     itchUrl: "https://yourname.itch.io/your-game"
    // }
];

const gamesGrid = document.getElementById("games-grid");
const projectCount = document.getElementById("project-count");

function createGameCard(project) {
    const isAvailable = Boolean(project.itchUrl);

    const card = document.createElement("article");
    card.className = "game-card";

    const coverClass = project.cover === "digital"
        ? "cover-digital"
        : "cover-placeholder";

    const action = isAvailable
        ? `<a class="play-link" href="${project.itchUrl}" target="_blank" rel="noopener noreferrer">
               PLAY GAME <span>↗</span>
           </a>`
        : `<div class="play-link disabled">
               COMING SOON <span>—</span>
           </div>`;

    card.innerHTML = `
        <div class="game-cover ${coverClass}">
            <div class="cover-badge">${project.status}</div>
            <div class="cover-symbol">${project.symbol}</div>
        </div>

        <div class="game-info">
            <div class="game-meta">
                <span>${project.category}</span>
                <span>${project.engine}</span>
            </div>

            <h3 class="game-title">${project.title}</h3>

            <p class="game-description">${project.description}</p>

            <div class="game-actions">
                ${action}
            </div>
        </div>
    `;

    return card;
}

function renderProjects() {
    gamesGrid.innerHTML = "";

    projects.forEach(project => {
        gamesGrid.appendChild(createGameCard(project));
    });

    projectCount.textContent =
        `${String(projects.length).padStart(2, "0")} PROJECTS`;
}

renderProjects();
