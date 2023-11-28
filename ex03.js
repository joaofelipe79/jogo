const words = ["elefante", "macaco", "leao", "zebra", "cavalo", "cachorro", "gato", "passaro", "tartaruga", "galinha"];
let selectedWord = "";
let guessedWord = [];
let incorrectLetters = [];
let hangmanImageIndex = 0;

const wordDisplayElement = document.getElementById("word-display");
const incorrectLettersElement = document.getElementById("incorrect-letters");
const hangmanImageElement = document.getElementById("hangman-image");
const gameOverElement = document.getElementById("game-over");

function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = Array(selectedWord.length).fill('_');
    incorrectLetters = [];
    hangmanImageIndex = 0;

    updateWordDisplay();
    updateIncorrectLetters();
    updateHangmanImage();
    gameOverElement.textContent = "";
}

function updateWordDisplay() {
    wordDisplayElement.textContent = guessedWord.join(' ');
}

function updateIncorrectLetters() {
    incorrectLettersElement.textContent = "Letras Erradas: " + incorrectLetters.join(', ');
}

function updateHangmanImage() {
    hangmanImageElement.style.backgroundPositionX = `-${hangmanImageIndex * 100}px`;
}

function checkGuess(letter) {
    if (selectedWord.includes(letter)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                guessedWord[i] = letter;
            }
        }

        if (!guessedWord.includes('_')) {
            gameOverElement.textContent = "Parabéns!";
        }
    } else {
        incorrectLetters.push(letter);

        hangmanImageIndex++;

        if (hangmanImageIndex === 6) {
            gameOverElement.textContent = "Você perdeu. A palavra era: " + selectedWord;
        }
    }

    updateWordDisplay();
    updateIncorrectLetters();
    updateHangmanImage();
}

function handleGuess(event) {
    const guess = event.key.toLowerCase();

    if (/^[a-z]$/.test(guess) && guessedWord.includes('_') && !guessedWord.includes(guess) && !incorrectLetters.includes(guess)) {
        checkGuess(guess);
    }
}

function resetGame() {
    startGame();
}

startGame();

document.addEventListener("keydown", handleGuess);
