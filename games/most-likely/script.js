const questions = [
    "ter um perfil secreto em app de relacionamento",
    "ter um fetiche inusitado",
    "fazer sexo em local público",
    "ter um crush no trabalho/escola",
    "ter um ex que ninguém sabe",
    "ter uma fantasia com alguém do grupo",
    "ter mentido sobre experiência sexual",
    "ter ficado com alguém famoso",
    "ter um histórico comprometedor no navegador",
    "ter um brinquedo erótico escondido",
    "ter mandado nude para a pessoa errada",
    "ter um caso com pessoa comprometida",
    "ter feito algo e se arrependido na manhã seguinte",
    "ter uma queda por pessoa mais velha",
    "ter uma história picante que ninguém sabe",
    "ter um talento secreto na cama",
    "ter uma experiência em lugar inusitado",
    "ter uma história embaraçosa em festa",
    "ter um segredo que ninguém pode saber",
    "ter uma experiência com mais de uma pessoa",
    "ter uma tatuagem em lugar escondido",
    "ter uma história com pessoa proibida",
    "ter uma experiência com algemas",
    "ter uma experiência com comida",
    "ter uma história em motel",
    "ter uma experiência no chuveiro",
    "ter uma história em viagem",
    "ter uma experiência com stripper",
    "ter uma história em casamento",
    "ter uma experiência em elevador"
];

class MostLikelyGame {
    constructor() {
        this.players = [];
        this.usedQuestions = new Set();
        this.currentVotes = new Map();
        
        this.setupElements();
        this.setupEventListeners();
    }

    setupElements() {
        this.questionElement = document.getElementById('question');
        this.nextButton = document.getElementById('nextQuestion');
        this.resetButton = document.getElementById('resetGame');
        this.setupPlayersButton = document.getElementById('setupPlayers');
        this.numPlayersInput = document.getElementById('numPlayers');
        this.playersListElement = document.getElementById('playersList');
    }

    setupEventListeners() {
        this.nextButton.addEventListener('click', () => this.nextQuestion());
        this.resetButton.addEventListener('click', () => this.resetGame());
        this.setupPlayersButton.addEventListener('click', () => this.setupPlayers());
    }

    setupPlayers() {
        const numPlayers = parseInt(this.numPlayersInput.value);
        if (numPlayers < 3 || numPlayers > 10) {
            alert('Por favor, escolha entre 3 e 10 jogadores.');
            return;
        }

        this.players = [];
        for (let i = 1; i <= numPlayers; i++) {
            this.players.push({
                name: `Jogador ${i}`,
                votes: 0,
                totalVotes: 0
            });
        }

        this.updatePlayersDisplay();
        this.nextButton.disabled = false;
    }

    updatePlayersDisplay() {
        this.playersListElement.innerHTML = '';
        this.players.forEach((player, index) => {
            const playerCard = document.createElement('div');
            playerCard.className = 'player-card';
            if (this.currentVotes.has(index)) {
                playerCard.classList.add('voted');
            }
            
            const playerName = document.createElement('div');
            playerName.className = 'player-name';
            playerName.textContent = player.name;
            
            const playerVotes = document.createElement('div');
            playerVotes.className = 'player-votes';
            playerVotes.textContent = `${player.votes} 🍷`;
            
            playerCard.appendChild(playerName);
            playerCard.appendChild(playerVotes);
            
            playerCard.addEventListener('click', () => {
                if (!this.currentVotes.has(index)) {
                    this.vote(index);
                }
            });
            
            this.playersListElement.appendChild(playerCard);
        });
    }

    vote(playerIndex) {
        this.currentVotes.set(playerIndex, true);
        this.players[playerIndex].votes++;
        this.players[playerIndex].totalVotes++;
        this.updatePlayersDisplay();

        if (this.currentVotes.size === this.players.length - 1) {
            setTimeout(() => {
                const mostVoted = this.findMostVoted();
                alert(`${this.players[mostVoted].name} recebeu mais votos! Hora de beber! 🍷`);
                this.nextQuestion();
            }, 500);
        }
    }

    findMostVoted() {
        let maxVotes = -1;
        let mostVotedIndex = -1;
        
        this.players.forEach((player, index) => {
            if (player.votes > maxVotes) {
                maxVotes = player.votes;
                mostVotedIndex = index;
            }
        });
        
        return mostVotedIndex;
    }

    getRandomQuestion() {
        const availableQuestions = questions.filter(q => !this.usedQuestions.has(q));
        if (availableQuestions.length === 0) {
            this.usedQuestions.clear();
            return this.getRandomQuestion();
        }
        
        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        const question = availableQuestions[randomIndex];
        this.usedQuestions.add(question);
        return question;
    }

    nextQuestion() {
        if (this.players.length === 0) {
            alert('Por favor, configure os jogadores primeiro!');
            return;
        }

        this.currentVotes.clear();
        this.players.forEach(player => player.votes = 0);
        
        const question = this.getRandomQuestion();
        this.questionElement.textContent = question;
        
        this.updatePlayersDisplay();
    }

    resetGame() {
        this.players = [];
        this.usedQuestions.clear();
        this.currentVotes.clear();
        this.questionElement.textContent = 'Clique em "Próxima" para começar!';
        this.playersListElement.innerHTML = '';
        this.numPlayersInput.value = 3;
        this.nextButton.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MostLikelyGame();
});
