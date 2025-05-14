const packsData = {
    Arcane: {
        weapons: [
            {
                name: "Arcane Vandal",
                img: "../SkinsContent/Arcane/Vandal.png",
                variants: [
                    "../SkinsContent/Arcane/Vandal_variant1.png",
                    "../SkinsContent/Arcane/Vandal_variant2.png"
                ]
            },
            {
                name: "Arcane Knife",
                img: "../SkinsContent/Arcane/knife.png",
                variants: [
                    "../SkinsContent/Arcane/knife_variant1.png"
                ]
            }
        ]
    },
    Divergence: {
        weapons: [
            {
                name: "Divergence Phantom",
                img: "../SkinsContent/Divergence/Phantom.png",
                variants: [
                    "../SkinsContent/Divergence/Phantom_variant1.png"
                ]
            }
        ]
    },
    Kuronami: {
        weapons: [
            {
                name: "Kuronami Spectre",
                img: "../SkinsContent/Kuronami/Spectre.png",
                variants: []
            }
        ]
    }
};

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
        img.onclick = () => showVariants(weapon.variants);
        weaponsGallery.appendChild(img);
    });

    document.getElementById('packDetail').style.display = 'block';
}

function showVariants(variants) {
    const variantGallery = document.querySelector('.variant-gallery');
    variantGallery.innerHTML = '';
    variants.forEach(variant => {
        const img = document.createElement('img');
        img.src = variant;
        img.style.width = '100px';
        img.style.margin = '5px';
        variantGallery.appendChild(img);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.thumbnail-container').forEach(container => {
        container.addEventListener('click', () => {
            const packName = container.querySelector('.caption').textContent.trim();
            showPackDetail(packName);
        });
    });
});
