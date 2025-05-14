const packsData = {
    Arcane: {
        weapons: [
            {
                name: "Arcane Vandal",
                img: "../SkinsContent/Arcane/vandal.png",
                variants: []
            },
            {
                name: "Arcane Knife",
                img: "../SkinsContent/Arcane/knife.png",
                variants: []
            }
        ]
    },
    Divergence: {
        weapons: [
            {
                name: "Divergence Vandal",
                img: "../SkinsContent/Divergence/vandal.png",
                variants: [
                    "../SkinsContent/Divergence/Variants1/vandal.png",
                    "../SkinsContent/Divergence/Variants2/vandal.png",
                    "../SkinsContent/Divergence/Variants3/vandal.png"
                ]
            },
            {
                name: "Divergence Operator",
                img: "../SkinsContent/Divergence/operator.png",
                variants: [
                    "../SkinsContent/Divergence/Variants1/operator.png",
                    "../SkinsContent/Divergence/Variants2/operator.png",
                    "../SkinsContent/Divergence/Variants3/operator.png"
                ]
            },
            {
                name: "Divergence Knife",
                img: "../SkinsContent/Divergence/knife.png",
                variants: [
                    "../SkinsContent/Divergence/Variants1/knife.png",
                    "../SkinsContent/Divergence/Variants2/knife.png",
                    "../SkinsContent/Divergence/Variants3/knife.png"
                ]
            },
            {
                name: "Divergence Judge",
                img: "../SkinsContent/Divergence/judge.png",
                variants: [
                    "../SkinsContent/Divergence/Variants1/judge.png",
                    "../SkinsContent/Divergence/Variants2/judge.png",
                    "../SkinsContent/Divergence/Variants3/judge.png"
                ]
            },
            {
                name: "Divergence Classic",
                img: "../SkinsContent/Divergence/classic.png",
                variants: [
                    "../SkinsContent/Divergence/Variants1/classic.png",
                    "../SkinsContent/Divergence/Variants2/classic.png",
                    "../SkinsContent/Divergence/Variants3/classic.png"
                ]
            }
        ]
    },
    Kuronami: {
        weapons: [
            {
                name: "Kuronami Spectre",
                img: "../SkinsContent/Kuronami/spectre.png",
                variants: [
                    "../SkinsContent/Kuronami/Variants1/spectre.png"
                ]
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
