// Arrays de cartas
const blackCards = [
    "O que me fez perder meu último relacionamento?",
    "O que é que o meu psiquiatra realmente pensa de mim?",
    "O que é que eu encontrei debaixo da minha cama?",
    "Por que eu acordo gritando toda noite?",
    "O que é que os idosos cheiram?",
    "O que é que me mantém acordado à noite?",
    "O que é que me faz suar incontrolavelmente?",
    "O que é que eu vi no banheiro da balada?",
    "O que é que minha mãe esconde de mim?",
    "Como eu perdi minha virgindade?",
    "O que é que causou meu último divórcio?",
    "O que é que eu encontrei no histórico do navegador?",
    "Por que fui banido do Tinder?",
    "O que é que meu vizinho faz às 3 da manhã?",
    "O que é que eu encontrei na geladeira?",
    "Qual é o segredo do sucesso do BBB?",
    "Por que meu Uber me deu 1 estrela?",
    "O que aconteceu depois da décima caipirinha?",
    "Por que fui expulso do grupo da família?",
    "O que tem dentro da bolsa da minha vó?",
    "Por que o padre me bloqueou no WhatsApp?",
    "O que aconteceu na despedida de solteiro?",
    "Por que fui demitido do meu último emprego?",
    "O que encontrei nas pesquisas do Google do meu pai?",
    "Por que minha ex ainda me persegue?",
    "O que tem embaixo daquele sofá do bar?",
    "Por que nunca mais voltei naquele motel?",
    "O que aconteceu na viagem para Balneário?",
    "Por que deletei todas as fotos do meu Instagram?",
    "O que encontrei na mochila do meu irmão?",
    "Por que minha mãe não me aceita no Facebook?",
    "O que aconteceu naquela festa de formatura?",
    "Por que mudei meu número de telefone?",
    "O que tem no porão da casa da vovó?",
    "Por que não posso mais entrar naquele shopping?",
    "O que aconteceu depois do karaokê?",
    "Por que apaguei meu histórico do navegador?",
    "O que encontrei na gaveta do meu chefe?",
    "Por que fui banido daquele grupo do Telegram?",
    "O que aconteceu na última consulta médica?"
];

const whiteCardOptions = [
    "Um vibrador quebrado.",
    "Nudes acidentais no grupo da família.",
    "Uma ressaca moral.",
    "Fetiches questionáveis.",
    "Um ex stalker profissional.",
    "Decisões ruins depois de 5 shots de tequila.",
    "Uma tatuagem bêbada de emoji.",
    "Mensagens constrangedoras para o ex.",
    "Uma coleção suspeita de fotos de pés.",
    "Um perfil fake no Instagram.",
    "Uma playlist só de Luan Santana.",
    "Um OnlyFans secreto.",
    "Uma conta do Tinder fake.",
    "Uma obsessão por reality shows.",
    "Indiretas no Twitter.",
    "Um grupo de WhatsApp tóxico.",
    "Uma dieta baseada em miojo.",
    "Uma coleção de memes questionáveis.",
    "Um histórico de navegação suspeito.",
    "Uma festa que deu muito errado.",
    "Um vídeo comprometedor no Stories.",
    "Uma tatuagem do ex.",
    "Um álbum secreto de selfies.",
    "Uma coleção de figurinhas eróticas.",
    "Um perfil anônimo no Reddit.",
    "Uma conta premium no Xvideos.",
    "Uma fanfic erótica do Harry Potter.",
    "Uma foto bêbada no LinkedIn.",
    "Um comentário polêmico no Facebook.",
    "Uma DM para a crush de 2015.",
    "Um grupo de sugar daddies.",
    "Uma playlist de músicas vergonhosas.",
    "Um álbum de fotos da fase emo.",
    "Uma conta secreta no BeReal.",
    "Um TikTok dançando Barbie Girl.",
    "Uma coleção de indiretas do Twitter.",
    "Um grupo de 'amizade colorida'.",
    "Uma bio super cringe no Instagram.",
    "Um perfil no Orkut ainda ativo.",
    "Uma pasta suspeita no computador.",
    "Um vídeo karaokê bêbado.",
    "Uma carteira de vacinação fake.",
    "Um teste de gravidez positivo.",
    "Uma conta no Ashley Madison.",
    "Um grupo de apostas ilegais.",
    "Uma foto comprometedora no iCloud.",
    "Um áudio vazado no WhatsApp.",
    "Uma lista de crushes do trabalho.",
    "Um blog secreto de fanfics.",
    "Uma coleção de memes do Bolsonaro.",
    "Um grupo de fofoca da empresa.",
    "Uma foto antiga de carnaval.",
    "Um vídeo dançando funk.",
    "Uma conta fake no Twitter.",
    "Um álbum de fotos do ex.",
    "Uma mensagem bêbada para o chefe.",
    "Uma coleção de emojis suspeitos.",
    "Um perfil no Tinder com idade errada.",
    "Uma foto sem filtro no Instagram.",
    "Um grupo de vendas de produtos 'naturais'.",
    "Uma playlist de pagode romântico.",
    "Um histórico de busca vergonhoso.",
    "Uma foto comprometedora no Teams.",
    "Um grupo de memes +18.",
    "Uma conta no Grindr.",
    "Um vídeo karaokê do Luan Santana.",
    "Uma coleção de filtros do Snapchat.",
    "Um perfil no Linkedin desatualizado.",
    "Uma DM não respondida desde 2019.",
    "Um grupo de 'estudos' no Discord.",
    "Uma foto de 15 anos atrás.",
    "Um perfil verificado no PornHub."
];

// Elementos do DOM
const setupScreen = document.getElementById('setup-screen');
const gameScreen = document.getElementById('game-screen');
const gameHistory = document.getElementById('game-history');
const startGameButton = document.getElementById('start-game');
const confirmCardButton = document.getElementById('confirm-card');
const selectWinnerButton = document.getElementById('select-winner');
const nextRoundButton = document.getElementById('next-round');
const numPlayersInput = document.getElementById('num-players');
const pointsToWinInput = document.getElementById('points-to-win');
const currentRoundSpan = document.getElementById('current-round');
const currentPlayerDiv = document.querySelector('.current-player');
const scoreboardDiv = document.querySelector('.scoreboard');
const blackCardDiv = document.getElementById('black-card');
const whiteCardsDiv = document.getElementById('white-cards');
const playedCardsDiv = document.querySelector('.played-cards-grid');
const historyList = document.querySelector('.history-list');

// Estado do jogo
let players = [];
let currentPlayerIndex = 0;
let currentRound = 1;
let pointsToWin = 5;
let gameStarted = false;
let selectedCards = new Map(); // Mapa de jogador -> carta selecionada
let usedBlackCards = new Set();
let usedWhiteCards = new Set();
let roundHistory = [];

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.cards = [];
    }
}

function initializeGame() {
    const numPlayers = parseInt(numPlayersInput.value);
    pointsToWin = parseInt(pointsToWinInput.value);
    players = [];
    currentRound = 1;
    selectedCards.clear();
    usedBlackCards.clear();
    usedWhiteCards.clear();
    roundHistory = [];
    gameStarted = false;

    // Criar jogadores e distribuir cartas
    for (let i = 1; i <= numPlayers; i++) {
        players.push(new Player(`Jogador ${i}`));
    }
    dealInitialCards();

    // Configurar tela
    setupScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    gameHistory.classList.remove('hidden');

    // Começar com o primeiro jogador (não o juiz)
    currentPlayerIndex = 1;
    updateUI();

    console.log("Jogo iniciado com", numPlayers, "jogadores");
    console.log("Jogador atual:", currentPlayerIndex);
    console.log("Cartas do jogador atual:", players[currentPlayerIndex].cards);
}

function dealInitialCards() {
    players.forEach(player => {
        player.cards = getRandomWhiteCards(7);
    });
}

function getRandomWhiteCards(count) {
    const availableCards = whiteCardOptions.filter(card => !usedWhiteCards.has(card));
    const selectedCards = [];
    
    for (let i = 0; i < count; i++) {
        if (availableCards.length === 0) {
            usedWhiteCards.clear(); // Reset se acabarem as cartas
            availableCards.push(...whiteCardOptions);
        }
        const randomIndex = Math.floor(Math.random() * availableCards.length);
        const card = availableCards.splice(randomIndex, 1)[0];
        selectedCards.push(card);
        usedWhiteCards.add(card);
    }
    
    return selectedCards;
}

function getRandomBlackCard() {
    const availableCards = blackCards.filter(card => !usedBlackCards.has(card));
    if (availableCards.length === 0) {
        usedBlackCards.clear(); // Reset se acabarem as cartas
        return blackCards[Math.floor(Math.random() * blackCards.length)];
    }
    const card = availableCards[Math.floor(Math.random() * availableCards.length)];
    usedBlackCards.add(card);
    return card;
}

function updateUI() {
    // Atualizar rodada atual
    currentRoundSpan.textContent = currentRound;

    // Atualizar jogador atual
    const isJudgePhase = selectedCards.size === players.length - 1;
    currentPlayerDiv.textContent = isJudgePhase
        ? `${players[0].name} está escolhendo o vencedor!`
        : `Vez de ${players[currentPlayerIndex].name}`;

    // Atualizar placar
    updateScoreboard();

    // Atualizar carta preta
    if (!blackCardDiv.textContent) {
        blackCardDiv.textContent = getRandomBlackCard();
    }

    // Atualizar cartas brancas
    displayWhiteCards();

    // Mostrar/esconder botões apropriados
    updateButtons();

    // Garantir que o jogo comece com o primeiro jogador não-juiz
    if (!gameStarted && currentPlayerIndex === 0) {
        gameStarted = true;
        currentPlayerIndex = 1;
        updateUI();
    }
}

function updateScoreboard() {
    scoreboardDiv.innerHTML = '';
    players.forEach((player, index) => {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player-score');
        if (index === currentPlayerIndex) {
            playerDiv.classList.add('active');
        }
        playerDiv.textContent = `${player.name}: ${player.score} pontos`;
        scoreboardDiv.appendChild(playerDiv);
    });
}

function displayWhiteCards() {
    console.log("Exibindo cartas para jogador", currentPlayerIndex);
    
    // Limpar todas as áreas de cartas
    whiteCardsDiv.innerHTML = '';
    document.getElementById('played-cards').classList.add('hidden');

    // Se for o juiz (jogador 0) e houver cartas jogadas, mostrar as cartas para julgamento
    if (currentPlayerIndex === 0 && selectedCards.size > 0) {
        showPlayedCards();
        return;
    }

    // Se não for o juiz, mostrar as cartas do jogador atual
    if (currentPlayerIndex > 0 && currentPlayerIndex < players.length) {
        const currentPlayer = players[currentPlayerIndex];
        console.log("Cartas do jogador atual:", currentPlayer.cards);

        // Garantir que o jogador atual tenha cartas
        if (!currentPlayer.cards || currentPlayer.cards.length === 0) {
            currentPlayer.cards = getRandomWhiteCards(7);
            console.log("Novas cartas distribuídas:", currentPlayer.cards);
        }

        // Criar container para as cartas
        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'white-cards-container';

        // Criar e mostrar cada carta
        currentPlayer.cards.forEach(cardText => {
            const card = document.createElement('div');
            card.className = 'white-card';
            
            const cardContent = document.createElement('div');
            cardContent.className = 'card-content';
            cardContent.textContent = cardText;
            card.appendChild(cardContent);

            // Destacar se a carta já foi selecionada
            if (selectedCards.get(currentPlayerIndex) === cardText) {
                card.classList.add('selected');
            }

            // Adicionar evento de clique
            card.addEventListener('click', () => {
                if (!selectedCards.has(currentPlayerIndex)) {
                    document.querySelectorAll('.white-card').forEach(c => 
                        c.classList.remove('selected'));
                    card.classList.add('selected');
                    selectCard(cardText);
                }
            });

            whiteCardsDiv.appendChild(card);
        });

        console.log("Cartas exibidas com sucesso");
    } else {
        console.log("Índice de jogador inválido:", currentPlayerIndex);
    }
}

function selectCard(cardText) {
    if (currentPlayerIndex === 0) return; // Juiz não seleciona carta

    selectedCards.set(currentPlayerIndex, cardText);
    displayWhiteCards();
    
    if (selectedCards.size === players.length - 1) {
        showPlayedCards();
    }
}

function showPlayedCards() {
    const playedCardsContainer = document.getElementById('played-cards');
    playedCardsContainer.classList.remove('hidden');
    playedCardsDiv.innerHTML = '';
    
    // Embaralhar as cartas jogadas
    const playedCards = Array.from(selectedCards.values());
    for (let i = playedCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [playedCards[i], playedCards[j]] = [playedCards[j], playedCards[i]];
    }
    
    playedCards.forEach(cardText => {
        const card = document.createElement('div');
        card.classList.add('white-card');
        card.textContent = cardText;
        card.addEventListener('click', () => selectWinner(cardText));
        playedCardsDiv.appendChild(card);
    });
}

function selectWinner(winningCard) {
    if (currentPlayerIndex !== 0) return; // Apenas o juiz pode selecionar o vencedor

    const winningPlayerIndex = Array.from(selectedCards.entries())
        .find(([_, card]) => card === winningCard)[0];
    
    players[winningPlayerIndex].score++;
    
    // Adicionar ao histórico
    const historyItem = document.createElement('div');
    historyItem.classList.add('history-item');
    historyItem.textContent = `Rodada ${currentRound}: ${players[winningPlayerIndex].name} venceu com "${winningCard}"`;
    historyList.insertBefore(historyItem, historyList.firstChild);

    if (players[winningPlayerIndex].score >= pointsToWin) {
        endGame(players[winningPlayerIndex]);
    } else {
        prepareNextRound();
    }
}

function prepareNextRound() {
    currentRound++;
    currentPlayerIndex = 1; // Próximo jogador após o juiz
    selectedCards.clear();
    blackCardDiv.textContent = getRandomBlackCard();
    
    // Dar novas cartas para todos
    players.forEach(player => {
        const cardsNeeded = 7 - player.cards.length;
        if (cardsNeeded > 0) {
            player.cards.push(...getRandomWhiteCards(cardsNeeded));
        }
    });

    // Rotacionar o juiz
    players.push(players.shift());
    
    document.getElementById('played-cards').classList.add('hidden');
    updateUI();
}

function endGame(winner) {
    alert(`${winner.name} venceu o jogo com ${winner.score} pontos!`);
    if (confirm('Jogar novamente?')) {
        setupScreen.classList.remove('hidden');
        gameScreen.classList.add('hidden');
        gameHistory.classList.add('hidden');
    }
}

function updateButtons() {
    const isJudgePhase = selectedCards.size === players.length - 1;
    confirmCardButton.classList.toggle('hidden', currentPlayerIndex === 0 || isJudgePhase);
    selectWinnerButton.classList.toggle('hidden', !isJudgePhase);
    nextRoundButton.classList.add('hidden');
}

// Event Listeners
startGameButton.addEventListener('click', initializeGame);
confirmCardButton.addEventListener('click', () => {
    if (selectedCards.has(currentPlayerIndex)) {
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        updateUI();
    } else {
        alert('Selecione uma carta primeiro!');
    }
});
selectWinnerButton.addEventListener('click', () => {
    const selectedCard = document.querySelector('.white-card.selected');
    if (selectedCard) {
        selectWinner(selectedCard.textContent);
    } else {
        alert('Selecione uma carta vencedora!');
    }
});
nextRoundButton.addEventListener('click', prepareNextRound);
