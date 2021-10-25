//A, B, C,..,G deben de ser chistes
const jokes = ["Van dos y se cae el del medio", "Soy celíaca. Encantado, yo Antoniaco.",
    "Una pareja de ancianos está en la cama y ella le dice a su marido: Pareces un teléfono móvil. ¿Por qué? ¿Vibro mucho? Porque cuando entras en el túnel te quedas sin cobertura."
];

function getJoke() {
    document.getElementById("joke").innerHTML = '"' + jokes[parseInt(Math.random() * jokes.length)] + '"';
}