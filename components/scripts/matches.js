// matches.js
const matches = [
    {
        team1: "Gen.G",
        team2: "MIBR",
        date: "SAT, JUNE 7 2025",
        logo1: "https://owcdn.net/img/654cc858ea9f5.png",
        logo2: "https://owcdn.net/img/632be7626d6d9.png"
    },
    {
        team1: "Bilibili Gaming",
        team2: "Team Liquid",
        date: "SAT, JUNE 7 2025",
        logo1: "https://owcdn.net/img/63f25d72216c1.png",
        logo2: "https://owcdn.net/img/640c381f0603f.png"
    },
    {
        team1: "Sentinels",
        team2: "Wolves Esports", 
        date: "SUN, JUNE 8 2025",
        logo1: "https://owcdn.net/img/62875027c8e06.png",
        logo2: "https://owcdn.net/img/651d33f8e6a1f.png"
    },
    {
        team1: "Team Heretics",
        team2: "Paper Rex",
        date: "SUT, JUNE 8 2025",
        logo1: "https://owcdn.net/img/637b755224c12.png",
        logo2: "https://owcdn.net/img/62bbeba74d5cb.png"
    }
];

// Function to display matches with logos
function loadMatches() {
    const matchListContainer = document.querySelector(".match-list");

    // Clear existing content
    matchListContainer.innerHTML = '';

    matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.classList.add('match-card');
        
        // Create HTML for the match card
        const matchContent = `
            <div class="team">
                <div class="logo-team">
                    <img src="${match.logo1}" alt="${match.team1} Logo">
                </div>
                <span>${match.team1}</span> vs
                <span>${match.team2}</span>
                <div class="logo-team">
                    <img src="${match.logo2}" alt="${match.team2} Logo">
                </div>
            </div>
            <div class="date">${match.date}</div>
        `;

        matchCard.innerHTML = matchContent;
        matchListContainer.appendChild(matchCard);
    });
}
