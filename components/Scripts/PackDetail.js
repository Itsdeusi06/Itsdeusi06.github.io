// Funció per generar automàticament les dades de cada pack
function generatePackData(packName, weapons, numVariants, videoData = {}) {
    const basePath = `../../SkinsContent/${packName}`;
    return {
        weapons: weapons.map(weapon => {
            const variants = [];
            for (let i = 1; i <= numVariants; i++) {
                const videoUrl = videoData[weapon]?.[`variant${i}`] || "";
                variants.push({
                    thumb: `${basePath}/Variants${i}/${weapon}.png`,
                    video: videoUrl
                });
            }

            // Nuevo: video principal si no hay variantes
            const fallbackVideo = videoData[weapon]?.variant1 || "";

            return {
                name: `${packName} ${capitalize(weapon)}`,
                img: `${basePath}/${weapon}.png`,
                video: fallbackVideo,
                variants: variants
            };
        })
    };
}


// Capitalitza el nom de l'arma per mostrar-ho bonic
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

const arcaneVideos = {
    vandal: {
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/558feebc-4881-6bb5-dbe6-baa7aa80ac8d_default_universal.mp4"
    },
    knife: {
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/b1c0b1da-4b55-1b3c-a9cb-16b2d10e7ca9_default_universal.mp4"
    }
};

const kuronamiVideos = {
    vandal: {
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f31888a6-470e-5d91-eff2-5ba6cd4ea087_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f31888a6-470e-5d91-eff2-5ba6cd4ea087_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f31888a6-470e-5d91-eff2-5ba6cd4ea087_default_universal.mp4"
    },
    knife: {
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f478ae7c-427d-bf16-9b2f-268b209abefe_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f478ae7c-427d-bf16-9b2f-268b209abefe_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f478ae7c-427d-bf16-9b2f-268b209abefe_default_universal.mp4"
    },
    spectre: {
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/af7aacea-4d96-51bb-ebb2-f2b1f359401b_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/af7aacea-4d96-51bb-ebb2-f2b1f359401b_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/af7aacea-4d96-51bb-ebb2-f2b1f359401b_default_universal.mp4"
    },
    sheriff: {
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/628d02f0-4763-f56c-3683-538918b9e239_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/628d02f0-4763-f56c-3683-538918b9e239_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/628d02f0-4763-f56c-3683-538918b9e239_default_universal.mp4"
    },
    marshal: {
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f98b9f90-4ed1-3bd3-0cda-bdb507df57e4_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f98b9f90-4ed1-3bd3-0cda-bdb507df57e4_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f98b9f90-4ed1-3bd3-0cda-bdb507df57e4_default_universal.mp4"
    }
};
const divergenceVideos = {
    classic: {
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bed9ffd8-4db4-4fc7-a69d-31b6e92b814f_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bed9ffd8-4db4-4fc7-a69d-31b6e92b814f_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bed9ffd8-4db4-4fc7-a69d-31b6e92b814f_default_universal.mp4"
    },
    judge: {
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/13883b1b-496a-7533-0cba-4cbc5ab5c30b_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/13883b1b-496a-7533-0cba-4cbc5ab5c30b_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/13883b1b-496a-7533-0cba-4cbc5ab5c30b_default_universal.mp4"
    },
    knife: {
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/d472b5ee-4dcb-3d5a-1be7-d2ae00429e0b_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/d472b5ee-4dcb-3d5a-1be7-d2ae00429e0b_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/d472b5ee-4dcb-3d5a-1be7-d2ae00429e0b_default_universal.mp4"
    },
    operator: {
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a26714ea-4aac-fce4-7e5e-6bae38364510_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a26714ea-4aac-fce4-7e5e-6bae38364510_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a26714ea-4aac-fce4-7e5e-6bae38364510_default_universal.mp4"
    },
    vandal: {
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a646230c-4fbc-3014-0e35-e49d40b2f660_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a646230c-4fbc-3014-0e35-e49d40b2f660_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a646230c-4fbc-3014-0e35-e49d40b2f660_default_universal.mp4"
    }
};

// Dades automàtiques de cada pack (afegeix més aquí si vols)
const packsData = {
    Arcane: generatePackData("Arcane", ["vandal", "knife"], 0, arcaneVideos),
    Divergence: generatePackData("Divergence", ["classic", "judge", "knife", "operator", "vandal"], 3, divergenceVideos),
    Kuronami: generatePackData("Kuronami", ["spectre","vandal","marshal","sheriff","knife",], 3, kuronamiVideos),
    Glitchpop: generatePackData("Glitchpop", ["frenzy", "bulldog", "judge", "odin", "axe", "dagger", "classic", "phantom", "vandal", "operator"], 3),
    // Afegeix més packs aquí si cal
};


// Mostra els detalls d’un pack seleccionat
function showPackDetail(packName) {
    const pack = packsData[packName];
    if (!pack) return;

    document.getElementById('packTitle').textContent = packName;
    const weaponsGallery = document.querySelector('.weapons-gallery');
    const variantGallery = document.querySelector('.variant-gallery');
    weaponsGallery.innerHTML = '';
    variantGallery.innerHTML = '';

    pack.weapons.forEach(weapon => {
        const img = document.createElement('img');
        img.src = weapon.img;
        img.alt = weapon.name;
        img.style.width = '150px';
        img.style.margin = '10px';
        img.style.cursor = 'pointer';
        img.onclick = () => {
            showVariants(weapon.variants);
            showWeaponInfo(weapon.name, packName);
        
            // Si no hay variantes, muestra el video principal (si existe)
            if (!weapon.variants.length && weapon.video) {
                showWeaponPreview(weapon.video);
            }
        };
        weaponsGallery.appendChild(img);
    });

    document.getElementById('packDetail').style.display = 'block';
}

// Mostra les variants quan es clica una arma
function showVariants(variants) {
    const variantGallery = document.querySelector('.variant-gallery');
    variantGallery.innerHTML = '';

    variants.forEach(variant => {
        const img = document.createElement('img');
        img.src = variant.thumb;
        img.alt = 'Variante';
        img.style.cursor = 'pointer';
        img.onclick = () => showWeaponPreview(variant.video);
        variantGallery.appendChild(img);
    });
}


function showWeaponPreview(videoUrl) {
    const preview = document.getElementById('weaponPreview');
    preview.innerHTML = `
        <video autoplay loop muted playsinline style="width: 100%; height: 100%; border-radius: 10px; object-fit: contain;">
            <source src="${videoUrl}" type="video/mp4">
            Tu navegador no soporta el video.
        </video>
    `;
}


function showWeaponInfo(weaponName, packName) {
    document.getElementById('weaponInfoTitle').textContent = weaponName;
    document.getElementById('weaponInfoDetails').innerHTML = `
        <p>Pack: ${packName}</p>
        <p>Precio: ${getWeaponPrice(weaponName)} VP</p>
        <p>Rareza: Exclusiva</p>
    `;
}

// Simula precios por ejemplo
function getWeaponPrice(name) {
    if (name.toLowerCase().includes('knife')) return 4350;
    return 2175;
}


// Clica en el thumbnail d’un pack per carregar-lo
document.addEventListener('DOMContentLoaded', () => {
    const row = document.getElementById('thumbnailRow');
    Object.keys(packsData).forEach((packName, index) => {
        const container = document.createElement('div');
        container.className = 'thumbnail-container';

        const img = document.createElement('img');
        img.className = 'demo w3-opacity w3-hover-opacity-off';
        img.src = `../SkinsContent/${packName}/${packName}.png`;
        img.onclick = () => currentDiv(index + 1); // només si uses la funció de slides
        container.appendChild(img);

        const caption = document.createElement('p');
        caption.className = 'caption';
        caption.textContent = packName;
        container.appendChild(caption);

        container.addEventListener('click', () => {
            showPackDetail(packName);
        });

        row.appendChild(container);
    });
});
