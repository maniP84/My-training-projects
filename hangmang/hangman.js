const secretphrases = ["never", "thanks", "bullet", "you", "break", "mani", "milad"];

let randomitem = "";
let clicked = [];
let result = "";
let mistakes = 0;
let id = []
let lose = document.getElementById("zoom")
let won = document.getElementById("score")
let loses = document.getElementById("loses")
let scores = document.getElementById("scores")
let return1 = document.getElementById("return")
let again = document.getElementById("again")
let letters = document.getElementById("letters")
let wons = 0
let T_loses = 0


function selectRandomItem() {
    randomitem = secretphrases[Math.floor(Math.random() * secretphrases.length)];
    document.getElementById("letters").addEventListener("click", buttomhandeler);
    window.addEventListener("keydown", keyHandeler)
    console.log(randomitem)
}

function setUnderScores() {
    let splitedword = randomitem.split("");
    let map = splitedword.map(letter => (clicked.indexOf(letter) >= 0 ? letter : "_"));
    result = map.join("")
    document.getElementById("clue").innerHTML = `<p>${result}</p>`
}

function checkIfWon() {
    if (randomitem === result) {
        document.getElementById("gameover").querySelector("p").style.disply = "block";
        document.getElementById("image").querySelector("img").src = "assets/winner.png";
        letters.style.pointerEvents = "none"
        lose.style.opacity = "0.8"
        wons++;
        won.innerText = wons
        scores.style.opacity = "1"
        return1.style.opacity = "0"
        again.style.opacity = "1"
        again.style.pointerEvents = "All"
    }
}

function checkIfLose() {
    if (mistakes === 6) {
        document.getElementById("gameover").querySelector("p").style.disply = "block";
        document.getElementById("clue").innerHTML = `<p>Random word is: ${randomitem}</p>`
        letters.style.pointerEvents = "none"
        lose.style.opacity = "0.8"
        T_loses++
        loses.innerText = T_loses
        scores.style.opacity = "1"
        return1.style.opacity = "0"
        again.style.opacity = "1"
        again.style.pointerEvents = "All"

    }
}

function updateHangmanPicture() {
    const image = document.getElementById("image").querySelector("img");
    image.src = `assets/hangman${mistakes}.png `
}

function letterHandler(letter) {
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className = "used";
    if (randomitem.indexOf(letter) >= 0) {
        setUnderScores();
        checkIfWon();
    } else if (randomitem.indexOf(letter) === -1) {
        mistakes++;
        checkIfLose();
        updateHangmanPicture();
    }
}

function buttomhandeler(event) {
    letterHandler(event.target.id)
    id = event.target.id
    console.log(event.target.className)


}

function keyHandeler(event) {
    // if (mistakes == !6) {
    //     letterHandler(event.key);

    // }
    letterHandler(event.key);

}

// function test(letter) {
//     letter = letter.toLowerCase();
//     clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
//     document.getElementById(letter.toUpperCase()).className = "used";
// }

function restart1() {
    randomitem = "";
    clicked = [];
    result = "";
    mistakes = 0;
    selectRandomItem();
    setUnderScores();
    document.getElementById("image").querySelector("img").src = "assets/hangman0.png";
    const som = document.getElementsByClassName("used")
    let i = som.length;
    for (i >= -1; i--;) {
        som[i].classList.remove('used')
    }
    lose.style.opacity = "0"
    again.style.opacity = "0"
    scores.style.opacity = "0"
    again.style.pointerEvents = "none"
    return1.style.opacity = "1"
    letters.style.pointerEvents = "All"

}
selectRandomItem();
setUnderScores();
console.log(id)