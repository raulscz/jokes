//A, B, C,..,G deben de ser chistes
const jokes = ["A", "B", "C", "D", "E", "F", "G"];

function getJoke() {
    document.getElementById("joke").innerHTML = '"' + jokes[parseInt(Math.random() * jokes.length)] + '"';
}