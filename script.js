
const projects = [
    {
        title: "DIGITAL ROOT",
        category: "PUZZLE",
        engine: "UNITY",
        description:
            "A little game about numbers, logic and speed. Can you find the even digital root?",
        url: "games/DigitalRootBuild/",
        status: "AVAILABLE",
        cover: "cover-digital",
        symbol: "9"
    }

    // Добавляй новые игры сюда через запятую.
];

function renderProjects() {
    const gamesGrid = document.getElementById("games-grid");
    const projectCount = document.getElementById("project-count");

    if (!gamesGrid || !projectCount) {
        console.error(
            "IMDVKSSS GAME: Required HTML elements were not found."
        );
        return;
    }

    projectCount.textContent =
        `${String(projects.length).padStart(2, "0")} PROJECTS`;

    gamesGrid.innerHTML = projects.map((project) => {
        return `
            <article class="game-card">

                <div class="game-cover ${project.cover}">
                    <div class="cover-badge">
                        ${project.status}
                    </div>

                    <div class="cover-symbol">
                        ${project.symbol}
                    </div>
                </div>

                <div class="game-info">

                    <div class="game-meta">
                        <span>${project.category}</span>
                        <span>${project.engine}</span>
                    </div>

                    <h3 class="game-title">
                        ${project.title}
                    </h3>

                    <p class="game-description">
                        ${project.description}
                    </p>

                    <div class="game-actions">
                        <a
                            class="play-link"
                            href="${project.url}"
                            aria-label="Play ${project.title}"
                        >
                            PLAY GAME
                            <span>↗</span>
                        </a>
                    </div>

                </div>

            </article>
        `;
    }).join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);
