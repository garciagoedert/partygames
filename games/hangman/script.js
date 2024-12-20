const words = [
    'JAVASCRIPT', 'PYTHON', 'PROGRAMACAO', 'DESENVOLVIMENTO',
    'COMPUTADOR', 'TECNOLOGIA', 'INTERNET', 'INOVACAO',
    'ALGORITMO', 'DADOS', 'SISTEMA', 'REDE'
];

class HangmanGame {
    constructor() {
        this.canvas = document.getElementById('hangmanCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.word = '';
        this.guessedLetters = new Set();
        this.remainingGuesses = 6;
        this.keyboard = document.getElementById('keyboard');
        this.wordDisplay = document.getElementById('word');
        this.message = document.getElementById('message');
        this.guessesDisplay = document.getElementById('guesses');
        
        this.setupKeyboard();
        document.getElementById('newGame').addEventListener('click', () => this.startNewGame());
        this.startNewGame();
    }

    setupKeyboard() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.keyboard.innerHTML = '';
        letters.split('').forEach(letter => {
            const button = document.createElement('button');
            button.textContent = letter;
            button.addEventListener('click', () => this.makeGuess(letter));
            this.keyboard.appendChild(button);
        });
    }

    startNewGame() {
        this.word = words[Math.floor(Math.random() * words.length)];
        this.guessedLetters.clear();
        this.remainingGuesses = 6;
        this.message.textContent = '';
        this.message.className = 'message';
        this.updateDisplay();
        this.resetKeyboard();
        this.clearCanvas();
        this.drawGallows();
    }

    makeGuess(letter) {
        if (this.guessedLetters.has(letter)) return;

        this.guessedLetters.add(letter);
        const button = Array.from(this.keyboard.children).find(btn => btn.textContent === letter);
        button.disabled = true;

        if (!this.word.includes(letter)) {
            this.remainingGuesses--;
            this.drawHangman(6 - this.remainingGuesses);
        }

        this.updateDisplay();
        this.checkGameEnd();
    }

    updateDisplay() {
        this.wordDisplay.textContent = this.word
            .split('')
            .map(letter => this.guessedLetters.has(letter) ? letter : '_')
            .join(' ');

        this.guessesDisplay.textContent = `Tentativas restantes: ${this.remainingGuesses}`;
    }

    checkGameEnd() {
        const won = this.word.split('').every(letter => this.guessedLetters.has(letter));
        if (won) {
            this.message.textContent = 'Parabéns! Você venceu!';
            this.message.className = 'message success';
            this.disableKeyboard();
        } else if (this.remainingGuesses === 0) {
            this.message.textContent = `Game Over! A palavra era: ${this.word}`;
            this.message.className = 'message error';
            this.disableKeyboard();
        }
    }

    resetKeyboard() {
        Array.from(this.keyboard.children).forEach(button => {
            button.disabled = false;
        });
    }

    disableKeyboard() {
        Array.from(this.keyboard.children).forEach(button => {
            button.disabled = true;
        });
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawGallows() {
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 2;
        
        // Base
        this.ctx.beginPath();
        this.ctx.moveTo(20, 230);
        this.ctx.lineTo(180, 230);
        this.ctx.stroke();
        
        // Poste vertical
        this.ctx.beginPath();
        this.ctx.moveTo(40, 230);
        this.ctx.lineTo(40, 20);
        this.ctx.stroke();
        
        // Topo
        this.ctx.beginPath();
        this.ctx.moveTo(40, 20);
        this.ctx.lineTo(120, 20);
        this.ctx.stroke();
        
        // Corda
        this.ctx.beginPath();
        this.ctx.moveTo(120, 20);
        this.ctx.lineTo(120, 40);
        this.ctx.stroke();
    }

    drawHangman(step) {
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 2;

        switch(step) {
            case 1: // Cabeça
                this.ctx.beginPath();
                this.ctx.arc(120, 60, 20, 0, Math.PI * 2);
                this.ctx.stroke();
                break;
            case 2: // Corpo
                this.ctx.beginPath();
                this.ctx.moveTo(120, 80);
                this.ctx.lineTo(120, 150);
                this.ctx.stroke();
                break;
            case 3: // Braço esquerdo
                this.ctx.beginPath();
                this.ctx.moveTo(120, 100);
                this.ctx.lineTo(80, 120);
                this.ctx.stroke();
                break;
            case 4: // Braço direito
                this.ctx.beginPath();
                this.ctx.moveTo(120, 100);
                this.ctx.lineTo(160, 120);
                this.ctx.stroke();
                break;
            case 5: // Perna esquerda
                this.ctx.beginPath();
                this.ctx.moveTo(120, 150);
                this.ctx.lineTo(90, 190);
                this.ctx.stroke();
                break;
            case 6: // Perna direita
                this.ctx.beginPath();
                this.ctx.moveTo(120, 150);
                this.ctx.lineTo(150, 190);
                this.ctx.stroke();
                break;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new HangmanGame();
});
