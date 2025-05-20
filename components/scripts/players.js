// players.js
const teams = [
    {
        name: "Gen.G",
        logo: "https://owcdn.net/img/654cc858ea9f5.png",
        players: [
            { name: "Munchkin", image: "https://owcdn.net/img/676ba055c7c74.png" },
            { name: "Foxy9", image: "https://owcdn.net/img/676ba0170dbab.png" },
            { name: "Ash", image: "https://www.vlr.gg/img/base/ph/sil.png" },
            { name: "t3xture", image: "https://owcdn.net/img/676ba04aee5f9.png" },
            { name: "Suggest", image: "https://www.vlr.gg/img/base/ph/sil.png" },
            { name: "Karon", image: "https://owcdn.net/img/676ba061b7251.png"},
            { name: "solo", image: "https://owcdn.net/img/676ba06a8c461.png" },
            { name: "HSK", image: "https://owcdn.net/img/676ba072a7070.png" },
            { name: "peri", image: "https://www.vlr.gg/img/base/ph/sil.png"}
        ]
    },
    {
        name: "MIBR",
        logo: "https://owcdn.net/img/632be7626d6d9.png",
        players: [
            { name: "artzin", image: "https://owcdn.net/img/64328a8010bd9.png" },
            { name: "xenom", image: "https://owcdn.net/img/65a6bddfe2c3a.png" },
            { name: "cortezia", image: "https://owcdn.net/img/680c49ca43fee.png" },
            { name: "Verno", image: "https://owcdn.net/img/664bd823278c5.png" },
            { name: "aspas", image: "https://owcdn.net/img/64169733ae9f1.png" },
            { name: "nzr", image: "https://owcdn.net/img/64b6590d6b004.png" },
            { name: "chivitz", image: "https://owcdn.net/img/6388fa2a357ed.png" },
            { name: "fRoD", image: "https://owcdn.net/img/6416970f1e605.png" },
            { name: "lara", image: "https://www.vlr.gg/img/base/ph/sil.png"}
        ]
    },
    {
        name: "Bilibili Gaming",
        logo: "https://owcdn.net/img/63f25d72216c1.png",
        players: [
            { name: "whzy", image: "https://owcdn.net/img/677fdfcb36dac.png" },
            { name: "Levius", image: "https://owcdn.net/img/677fdfe36d135.png" },
            { name: "rushia", image: "https://owcdn.net/img/677fdfeb6f40b.png" },
            { name: "nephh", image: "https://owcdn.net/img/677fdff5be5db.png" },
            { name: "Knight", image: "https://owcdn.net/img/677fdffe244c5.png" },
            { name: "Gandolf", image: "https://owcdn.net/img/67f0e602e4eb6.png" },
            { name: "bail", image: "https://owcdn.net/img/677fe01102263.png" },
            { name: "Jexen", image: "https://owcdn.net/img/677fe007f0a1c.png" },
            { name: "Rain", image: "https://owcdn.net/img/67f0e5faa0036.png" },
        ]
    },
    {
        name: "Team Liquid",
        logo: "https://owcdn.net/img/640c381f0603f.png",
        players: [
            { name: "nAts", image: "https://owcdn.net/img/60a0cf3460718.png" },
            { name: "paTiTek", image: "https://owcdn.net/img/665b77192b060.png" },
            { name: "Keiko", image: "https://owcdn.net/img/63c56bdfeb488.png" },
            { name: "kamo", image: "https://owcdn.net/img/65e74c504212c.png" },
            { name: "Serial", image: "https://www.vlr.gg/img/base/ph/sil.png" },
            { name: "Harmii", image: "https://www.vlr.gg/img/base/ph/sil.png" },
            { name: "cauzed", image: "https://www.vlr.gg/img/base/ph/sil.png" },
            { name: "LohaN", image: "https://owcdn.net/img/63b985373ea5b.png" },
            { name: "yaotziN", image: "https://owcdn.net/img/65ddf93f4578c.png" },
            { name: "Bacon9", image: "https://www.vlr.gg/img/base/ph/sil.png" }
        ]
    },
    {
        name: "Sentinels",
        logo: "https://owcdn.net/img/62875027c8e06.png",
        players: [
            { name: "johnqt", image: "https://owcdn.net/img/65622aa13dc03.png" },
            { name: "N4RRATE", image: "https://owcdn.net/img/63ffbd9ee57bd.png" },
            { name: "bang", image: "https://owcdn.net/img/64169245acebe.png" },
            { name: "Zellsis", image: "https://owcdn.net/img/671b20fca8019.png" },
            { name: "zekken", image: "https://owcdn.net/img/6416956f0da1e.png" },
            { name: "Reduxx", image: "https://owcdn.net/img/679c25daaa750.png" },
            { name: "Sick", image: "https://owcdn.net/img/6399a54fc4472.png" },
            { name: "Zyto", image: "https://owcdn.net/img/66c25238e898d.png" },
            { name: "Kez", image: "https://www.vlr.gg/img/base/ph/sil.png" },
            { name: "kaplan", image: "https://owcdn.net/img/627b460a3b85d.png" },
            { name: "GUNTER", image: "https://www.vlr.gg/img/base/ph/sil.png" }
        ]
    },
    {
        name: "Wolves Esports",
        logo: "https://owcdn.net/img/651d33f8e6a1f.png",
        players: [
            { name: "SiuFatBB", image: "https://owcdn.net/img/677d1d70cab8d.png" },
            { name: "Yuicaw", image: "https://owcdn.net/img/677d1d79e76fc.png" },
            { name: "Spring", image: "https://owcdn.net/img/677d1dbded193.png" },
            { name: "Lysoar", image: "https://owcdn.net/img/677d1df2d375a.png" },
            { name: "Juicy", image: "https://owcdn.net/img/677d1e0000b8e.png" },
            { name: "V1yA", image: "https://www.vlr.gg/img/base/ph/sil.png" },
            { name: "Simple", image: "https://www.vlr.gg/img/base/ph/sil.png" },
            { name: "Fayde", image: "https://owcdn.net/img/677d1e0897701.png" },
            { name: "Ominous", image: "https://owcdn.net/img/651eec809ffe3.png" },
            { name: "Jiaqi", image: "https://www.vlr.gg/img/base/ph/sil.png" }
        ]
    },
    {
        name: "Team Heretics",
        logo: "https://owcdn.net/img/637b755224c12.png",
        players: [
            { name: "Boo", image: "https://owcdn.net/img/665b77d7abe82.png" },
            { name: "MiniBoo", image: "https://owcdn.net/img/665b77a842328.png" },
            { name: "Wo0t", image: "https://owcdn.net/img/665b76ea6094c.png" },
            { name: "RieNs", image: "https://owcdn.net/img/665b76fb7ba5f.png" },
            { name: "benjyfishy", image: "https://owcdn.net/img/665b77ca4bc4d.png" },
            { name: "Niklas", image: "https://owcdn.net/img/665b775b3da55.png" },
            { name: "neilzinho", image: "https://owcdn.net/img/665b77b7b4d19.png" },
            { name: "weber", image: "https://owcdn.net/img/665b770c315bb.png" },
            { name: "EsportsRyan", image: "https://www.vlr.gg/img/base/ph/sil.png" },
            { name: "Pablo", image: "https://www.vlr.gg/img/base/ph/sil.png" }
        ]
    },
    {
        name: "Paper Rex",
        logo: "https://owcdn.net/img/62bbeba74d5cb.png",
        players: [
            { name: "mindfreack", image: "https://owcdn.net/img/67c70182b6186.png" },
            { name: "Jinggg", image: "https://owcdn.net/img/67c701558ae34.png" },
            { name: "f0rsakeN", image: "https://owcdn.net/img/67c7016159bd7.png" },
            { name: "d4v41", image: "https://owcdn.net/img/67c7016bb1f6a.png" },
            { name: "something", image: "https://owcdn.net/img/67c701797a51d.png" },
            { name: "PatMen", image: "https://owcdn.net/img/67c6d1461c5cf.png" },
            { name: "Tommy", image: "https://owcdn.net/img/60216671c7009.png" },
            { name: "alecks", image: "https://owcdn.net/img/67c7019332863.png" },
            { name: "Panda", image: "https://www.vlr.gg/img/base/ph/sil.png" }
        ]
    },
];

// Function to display the teams and their players
function displayTeams(callback) {
    const teamListContainer = document.getElementById("team-list");
    teamListContainer.innerHTML = '';

    teams.forEach(team => {
        const teamElement = document.createElement("div");
        teamElement.classList.add("team");
        teamElement.id = team.name.toLowerCase().replace(/\s+/g, '-');

        teamElement.innerHTML = `
            <div class="team-logo">
                <img src="${team.logo}" alt="${team.name} Logo">
            </div>
            <div class="player-list">
                <ul>
                    ${team.players.map(player => `
                        <li>
                            <img class="player-photo" src="${player.image}" alt="${player.name}" />
                            ${player.name}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;

        teamListContainer.appendChild(teamElement);
    });

    if (typeof callback === "function") {
        callback();
    }
}

window.onload = function() {
    displayTeams(loadMatches);
};
