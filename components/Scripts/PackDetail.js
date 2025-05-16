// Funció per generar automàticament les dades de cada pack
function generatePackData(packName, weapons, numVariants) {
    const basePath = `../../SkinsContent/${packName}`;
    return {
        weapons: weapons.map(weapon => {
            const variants = [];
            for (let i = 1; i <= numVariants; i++) {
                variants.push(`${basePath}/Variants${i}/${weapon}.png`);
            }
            return {
                name: `${packName} ${capitalize(weapon)}`,
                img: `${basePath}/${weapon}.png`,
                variants: variants
            };
        })
    };
}

// Capitalitza el nom de l'arma per mostrar-ho bonic
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// Dades automàtiques de cada pack (afegeix més aquí si vols)
const packsData = {
    Arcane: generatePackData("Arcane", ["vandal", "knife"], 0),
    Divergence: generatePackData("Divergence", ["classic", "judge", "knife", "operator", "vandal"], 3),
    Kuronami: generatePackData("Kuronami", ["spectre","vandal","marshal","sheriff","knife",], 3),
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
            showWeaponInfo(weapon.name, packName); // ← para la info del arma
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
        img.src = variant;
        img.style.cursor = 'pointer';
        img.onclick = () => showWeaponPreview(variant);
        variantGallery.appendChild(img);
    });
}

function showWeaponPreview(variantUrl) {
    const preview = document.getElementById('weaponPreview');
    preview.innerHTML = `<img src="${variantUrl}" style="max-height: 100%; max-width: 100%;">`;
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
