const actions = [
    "dar um beijo no pescoço",
    "fazer uma massagem por 30 segundos",
    "dar um selinho",
    "fazer um elogio picante",
    "dar um abraço sensual",
    "fazer uma dança provocante",
    "contar uma fantasia",
    "fazer uma carícia suave",
    "dar um beijo na bochecha",
    "fazer um carinho no cabelo",
    "sussurrar algo no ouvido",
    "dar um beijo na mão",
    "fazer uma pose sensual",
    "dar um beijo demorado",
    "fazer uma declaração picante",
    "dar um abraço por trás",
    "fazer uma massagem nos ombros",
    "dar um beijo surpresa",
    "fazer um strip-tease de 30 segundos",
    "dar um beijo francês",
    "fazer uma mordida leve",
    "dar um beijo no pescoço",
    "fazer uma carícia no rosto",
    "dar um beijo apaixonado",
    "fazer uma dança no colo",
    "dar um chupão no pescoço",
    "fazer uma massagem nas costas",
    "dar um beijo com mordida",
    "fazer uma pose provocante",
    "dar um beijo de tirar o fôlego"
];

class SpinBottleGame {
    constructor() {
        this.players = [];
        this.isSpinning = false;
        this.usedActions = new Set();
        
        this.setupElements();
        this.setupEventListeners();
    }

    setupElements() {
        this.bottle = document.getElementById('bottle');
        this.spinButton = document.getElementById('spinBottle');
        this.resetButton = document.getElementById('resetGame');
        this.setupPlayersButton = document.getElementById('setupPlayers');
        this.numPlayersInput = document.getElementById('numPlayers');
        this.playersListElement = document.getElementById('playersList');
        this.selectedPlayersElement = document.getElementById('selectedPlayers');
        this.actionElement = document.getElementById('action');
    }

    setupEventListeners() {
        this.spinButton.addEventListener('click', () => this.spinBottle());
        this.resetButton.addEventListener('click', () => this.resetGame());
        this.setupPlayersButton.addEventListener('click', () => this.setupPlayers());
    }

    setupPlayers() {
        const numPlayers = parseInt(this.numPlayersInput.value);
        if (numPlayers < 2 || numPlayers > 10) {
            alert('Por favor, escolha entre 2 e 10 jogadores.');
            return;
        }

        this.players = [];
        for (let i = 1; i <= numPlayers; i++) {
            this.players.push(`Jogador ${i}`);
        }

        this.updatePlayersDisplay();
        this.spinButton.disabled = false;
    }

    updatePlayersDisplay() {
        this.playersListElement.innerHTML = '';
        this.players.forEach((player, index) => {
            const playerCard = document.createElement('div');
            playerCard.className = 'player-card';
            playerCard.textContent = player;
            this.playersListElement.appendChild(playerCard);
        });
    }

    getRandomDegree() {
        return Math.floor(Math.random() * 360) + 1440; // At least 4 full rotations
    }

    getRandomAction() {
        const availableActions = actions.filter(a => !this.usedActions.has(a));
        if (availableActions.length === 0) {
            this.usedActions.clear();
            return this.getRandomAction();
        }
        
        const randomIndex = Math.floor(Math.random() * availableActions.length);
        const action = availableActions[randomIndex];
        this.usedActions.add(action);
        return action;
    }

    selectPlayers() {
        const player1Index = Math.floor(Math.random() * this.players.length);
        let player2Index;
        do {
            player2Index = Math.floor(Math.random() * this.players.length);
        } while (player2Index === player1Index);

        return [this.players[player1Index], this.players[player2Index]];
    }

    spinBottle() {
        if (this.isSpinning || this.players.length < 2) {
            return;
        }

        this.isSpinning = true;
        this.spinButton.disabled = true;
        
        const spinDegree = this.getRandomDegree();
        this.bottle.style.setProperty('--spin-degree', `${spinDegree}deg`);
        this.bottle.classList.add('spinning');

        setTimeout(() => {
            this.bottle.classList.remove('spinning');
            this.isSpinning = false;
            this.spinButton.disabled = false;

            const [player1, player2] = this.selectPlayers();
            const action = this.getRandomAction();

            this.selectedPlayersElement.textContent = `${player1} deve...`;
            this.actionElement.textContent = `${action} em ${player2}`;

            // Highlight selected players
            const playerCards = this.playersListElement.children;
            Array.from(playerCards).forEach(card => {
                card.classList.remove('selected');
                if (card.textContent === player1 || card.textContent === player2) {
                    card.classList.add('selected');
                }
            });
        }, 3000);
    }

    resetGame() {
        this.players = [];
        this.usedActions.clear();
        this.isSpinning = false;
        this.bottle.style.transform = 'rotate(0deg)';
        this.selectedPlayersElement.textContent = '';
        this.actionElement.textContent = 'Clique em "Girar" para começar!';
        this.playersListElement.innerHTML = '';
        this.numPlayersInput.value = 2;
        this.spinButton.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SpinBottleGame();
});
