let img;

let traits = [
    'assets/boobs.png',
    'assets/dumb.png',
    'assets/teacher.png',
    'assets/hitler.png',
]

let traitImages = [];

function preload() {
    img = loadImage('assets/girl.png');

    for (let i = 0; i < traits.length; i++) {
        traitImages[i] = loadImage(traits[i]);
    }
}

function setup() {
    createCanvas(350, 350);
    background('#99dada');

    image(img, 0, 0, 350, 350);

    const mainElement = document.getElementById('main');

    mainElement.appendChild(document.createElement('br'));

    let btn = document.createElement('button');
    btn.innerText = 'Add Random Trait';
    btn.addEventListener('click', addRandomTrait);

    mainElement.appendChild(btn);

    //mainElement.innerHTML += `<button onclick="addRandomTrait()">Add Random Trait</button>`;
}

function addRandomTrait() {
    const randomTrait = random(traits);

    const traitIndex = traits.indexOf(randomTrait);

    image(traitImages[traitIndex], 0, 0, 350, 350);

    traits.splice(traitIndex, 1);
    traitImages.splice(traitIndex, 1);
}