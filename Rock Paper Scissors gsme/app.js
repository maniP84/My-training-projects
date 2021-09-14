let userChoice = [paper2, rock2, scissors2]
let pTag = document.getElementById("ptag");
let pCam = document.getElementById('pCam');
let paper = document.getElementById('paper');
let rock = document.getElementById('rock');
let scissors = document.getElementById('scissors');
let paper2 = document.getElementById('paper2');
let rock2 = document.getElementById('rock2');
let scissors2 = document.getElementById('scissors2');
let paper3 = document.getElementById('paper3');
let rock3 = document.getElementById('rock3');
let scissors3 = document.getElementById('scissors3');
const choices = [paper3, rock3, scissors3];

function onClick() {
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');
    let rock = document.getElementById('rock');
    let score = document.getElementById('score');
    let myscore = score.innerHTML;
    let Cscore = document.getElementById('C-score');
    let comScore = Cscore.innerHTML;
    paper.style.display = "block";
    scissors.style.display = "none"
    rock.style.display = "none";
    let paper3 = document.getElementById('paper3');
    let rock3 = document.getElementById('rock3');
    let scissors3 = document.getElementById('scissors3');
    let win = document.getElementById('win');
    const choices = [paper3, rock3, scissors3];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerCoice = choices[randomNumber];
    computerCoice.style.display = "block";
    computerCoice.style.marginTop = "7rem";
    if (computerCoice === paper3) {
        win.style.display = "flex"
        paper.style.color = "#9d9fa5"
        paper3.style.color = "#9d9fa5"
        rock3.style.display = "none"
        scissors3.style.display = "none"
        win.style.color = "#ffffff";
        win.innerHTML = "It's a tie";
    }
    if (computerCoice === rock3) {
        rock3.style.color = "red"
        paper.style.color = "green"
        paper3.style.display = "none"
        scissors3.style.display = "none"
        win.innerHTML = "You win"
        win.style.color = "green"
        win.style.display = "flex"
        myscore++;
        score.innerHTML = myscore;
    }
    if (computerCoice === scissors3) {
        paper.style.color = "red"
        scissors3.style.color = "green"
        paper3.style.display = "none"
        rock3.style.display = "none"
        win.innerHTML = "You lose"
        win.style.color = "red"
        win.style.display = "flex"
        comScore++;
        Cscore.innerHTML = comScore
    }
}

function onClick2() {
    let scissors = document.getElementById('scissors');
    let paper = document.getElementById('paper');
    let rock = document.getElementById('rock');
    let score = document.getElementById('score');
    let myscore = score.innerHTML;
    let Cscore = document.getElementById('C-score');
    let comScore = Cscore.innerHTML;
    scissors.style.display = "block";
    paper.style.display = "none";
    rock.style.display = "none";
    let paper3 = document.getElementById('paper3');
    let rock3 = document.getElementById('rock3');
    let scissors3 = document.getElementById('scissors3');
    let win = document.getElementById('win');
    const choices = [paper3, rock3, scissors3];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerCoice = choices[randomNumber];
    computerCoice.style.display = "block";
    computerCoice.style.marginTop = "7rem";
    if (computerCoice === scissors3) {
        win.style.display = "flex"
        scissors.style.color = "#9d9fa5";
        scissors3.style.color = "#9d9fa5"
        rock3.style.display = "none"
        paper3.style.display = "none"
        win.style.color = "#ffffff"
        win.innerHTML = "It's a tie"
    }
    if (computerCoice === paper3) {
        win.style.display = "flex"
        paper3.style.color = "red"
        scissors.style.color = "green"
        rock3.style.display = "none"
        scissors3.style.display = "none"
        win.innerHTML = "You win"
        win.style.color = "green"
        myscore++;
        score.innerHTML = myscore;
    }
    if (computerCoice === rock3) {
        win.style.display = "flex"
        scissors.style.color = "red"
        rock3.style.color = "green"
        paper3.style.display = "none"
        scissors3.style.display = "none"
        win.innerHTML = "You lose"
        win.style.color = "red"
        comScore++;
        Cscore.innerHTML = comScore
    }
}

function onClick3() {
    let scissors = document.getElementById('scissors');
    let paper = document.getElementById('paper');
    let rock = document.getElementById('rock');
    let score = document.getElementById('score');
    let myscore = score.innerHTML;
    let Cscore = document.getElementById('C-score');
    let comScore = Cscore.innerHTML;
    scissors.style.display = "none";
    paper.style.display = "none";
    rock.style.display = "block";
    let paper3 = document.getElementById('paper3');
    let rock3 = document.getElementById('rock3');
    let scissors3 = document.getElementById('scissors3');
    let win = document.getElementById('win');
    const choices = [paper3, rock3, scissors3];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerCoice = choices[randomNumber];
    computerCoice.style.display = "block";
    computerCoice.style.marginTop = "7rem";
    if (computerCoice === rock3) {
        win.style.display = "flex"
        rock3.style.color = "#9d9fa5"
        rock.style.color = "#9d9fa5"
        scissors3.style.display = "none"
        paper3.style.display = "none"
        win.style.color = "#ffffff"
        win.innerHTML = "It's a tie"
    }
    if (computerCoice === scissors3) {
        win.style.display = "flex";
        scissors3.style.color = "red";
        rock.style.color = "green";
        paper3.style.display = "none";
        rock3.style.display = "none";
        win.innerHTML = "You win";
        win.style.color = "green";
        myscore++;
        score.innerHTML = myscore;
    }
    if (computerCoice === paper3) {
        win.style.display = "flex"
        rock.style.color = "red"
        paper3.style.color = "green"
        rock3.style.display = "none"
        scissors3.style.display = "none"
        win.innerHTML = "You lose"
        win.style.color = "red"
        comScore++;
        Cscore.innerHTML = comScore
    }
}

const randomNumber = Math.floor(Math.random() * 3);
const computerCoice = choices[randomNumber];
computerCoice.style.display = "block";
computerCoice.style.marginTop = "7rem";

// if (userChoice === computerCoice) {

//