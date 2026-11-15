
const tips = [
    {
        game: "Roblox",
        title: "Improve Your Aim",
        description: "Practise your aim regularly and experiment with comfortable sensitivity settings."
    },
    {
        game: "Roblox",
        title: "Learn Game Mechanics",
        description: "Understand movement, abilities and maps before competitive matches."
    },
    {
        game: "Roblox",
        title: "Play Smart",
        description: "Pay attention to your surroundings and adapt your strategy."
    },
    {
        game: "Minecraft",
        title: "First-Day Survival",
        description: "Collect wood, craft basic tools and prepare a safe shelter."
    },
    {
        game: "Minecraft",
        title: "Mining Tips",
        description: "Carry torches, food and spare tools when exploring caves."
    },
    {
        game: "Minecraft",
        title: "Better Building",
        description: "Experiment with different blocks, shapes and lighting."
    },
    {
        game: "Free Fire India",
        title: "Aim Practice",
        description: "Practise aiming and experiment with comfortable sensitivity settings."
    },
    {
        game: "Free Fire India",
        title: "Map Awareness",
        description: "Learn the map and plan your rotations around the safe zone."
    },
    {
        game: "Free Fire India",
        title: "Teamwork",
        description: "Communicate with teammates and coordinate your strategy."
    },
    {
        game: "Free Fire India",
        title: "Character Skills",
        description: "Learn how character abilities work and choose combinations that suit your playstyle."
    }
];

const searchBox = document.getElementById("searchBox");
const searchResults = document.getElementById("searchResults");

if (searchBox && searchResults) {

    searchBox.addEventListener("input", function () {

        const query = this.value.trim().toLowerCase();

        searchResults.innerHTML = "";

        if (query === "") {
            return;
        }

        const filteredTips = tips.filter(tip =>
            tip.game.toLowerCase().includes(query) ||
            tip.title.toLowerCase().includes(query) ||
            tip.description.toLowerCase().includes(query)
        );

        if (filteredTips.length === 0) {
            const message = document.createElement("p");
            message.textContent = "No tips found. Try another search!";
            searchResults.appendChild(message);
            return;
        }

        filteredTips.forEach(tip => {

            const result = document.createElement("div");
            result.className = "search-result";

            const heading = document.createElement("h3");
            heading.textContent = tip.title;

            const game = document.createElement("small");
            game.textContent = tip.game.toUpperCase();

            const description = document.createElement("p");
            description.textContent = tip.description;

            result.append(heading, game, description);
            searchResults.appendChild(result);

        });
    });
}
