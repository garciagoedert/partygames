const statements = [
    "beijei alguém do mesmo sexo",
    "fiquei com mais de uma pessoa na mesma noite",
    "mandei nudes para a pessoa errada",
    "fiz sexo em um lugar público",
    "transei no primeiro encontro",
    "fiquei com alguém do trabalho",
    "tive um sonho erótico com alguém presente aqui",
    "fiz strip-tease para alguém",
    "usei brinquedos eróticos",
    "fiquei com ex de amigo(a)",
    "participei de um ménage",
    "fiz sexo por videochamada",
    "fui para um motel sozinho(a)",
    "fiquei com alguém famoso",
    "tive uma experiência BDSM",
    "fiz roleplay sexual",
    "fui em uma festa de swing",
    "fiz tatuagem em lugar íntimo",
    "fiquei com mais de 3 pessoas em um mês",
    "tive uma experiência com algemas",
    "fiz sexo em uma festa",
    "usei aplicativo de relacionamento",
    "fiquei com alguém bem mais velho",
    "fiz sexo na praia",
    "tive uma experiência com comida na cama",
    "fiz sexo em um carro",
    "fiquei com alguém do signo de escorpião",
    "me apaixonei por alguém proibido",
    "fiz uma loucura por amor",
    "tive uma experiência com chocolate"
];

class NeverHaveIEverGame {
    constructor() {
        this.players = [];
        this.currentPlayer = 0;
        this.usedStatements = new Set();
        
        this.setupElements();
        this.setupEventListeners();
    }

    setupElements() {
        this.statementElement = document.getElementById('statement');
        this.nextButton = document.getElementById('nextStatement');
        this.resetButton = document.getElementById('resetGame');
        this.setupPlayersButton = document.getElementById('setupPlayers');
        this.numPlayersInput = document.getElementById('numPlayers');
        this.playersListElement = document.getElementById('playersList');
    }

    setupEventListeners() {
        this.nextButton.addEventListener('click', () => this.nextStatement());
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
            this.players.push({
                name: `Jogador ${i}`,
                score: 0
            });
        }

        this.currentPlayer = 0;
        this.updatePlayersDisplay();
        this.nextButton.disabled = false;
    }

    updatePlayersDisplay() {
        this.playersListElement.innerHTML = '';
        this.players.forEach((player, index) => {
            const playerCard = document.createElement('div');
            playerCard.className = `player-card ${index === this.currentPlayer ? 'active' : ''}`;
            
            const playerName = document.createElement('div');
            playerName.className = 'player-name';
            playerName.textContent = player.name;
            
            const playerScore = document.createElement('div');
            playerScore.className = 'player-score';
            playerScore.textContent = `${player.score} 🍷`;
            
            playerCard.appendChild(playerName);
            playerCard.appendChild(playerScore);
            
            playerCard.addEventListener('click', () => {
                player.score++;
                this.updatePlayersDisplay();
            });
            
            this.playersListElement.appendChild(playerCard);
        });
    }

    getRandomStatement() {
        const availableStatements = statements.filter(s => !this.usedStatements.has(s));
        if (availableStatements.length === 0) {
            this.usedStatements.clear();
            return this.getRandomStatement();
        }
        
        const randomIndex = Math.floor(Math.random() * availableStatements.length);
        const statement = availableStatements[randomIndex];
        this.usedStatements.add(statement);
        return statement;
    }

    nextStatement() {
        if (this.players.length === 0) {
            alert('Por favor, configure os jogadores primeiro!');
            return;
        }

        const statement = this.getRandomStatement();
        this.statementElement.textContent = statement;
        
        this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
        this.updatePlayersDisplay();
    }

    resetGame() {
        this.players = [];
        this.currentPlayer = 0;
        this.usedStatements.clear();
        this.statementElement.textContent = 'Clique em "Próxima" para começar!';
        this.playersListElement.innerHTML = '';
        this.numPlayersInput.value = 2;
        this.nextButton.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new NeverHaveIEverGame();
});
