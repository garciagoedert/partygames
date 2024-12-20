// Arrays de perguntas e desafios
const truths = [
    "Qual foi a coisa mais safada que você já fez em público?",
    "Qual é sua maior fantasia sexual?",
    "Qual foi a pessoa mais improvável com quem você já ficou?",
    "Qual foi a mensagem mais quente que você já mandou?",
    "Qual é seu maior fetiche?",
    "Qual foi a coisa mais ousada que você já fez bêbado(a)?",
    "Com qual pessoa do grupo você já teve sonhos eróticos?",
    "Qual foi a situação mais constrangedora durante o sexo?",
    "Qual foi o lugar mais inusitado onde você já transou?",
    "Qual foi a maior mentira que você já contou para conseguir ficar com alguém?",
    "Qual foi a cantada mais ridícula que já usou?",
    "Qual é sua posição favorita?",
    "Qual foi o pior encontro da sua vida e por quê?",
    "Você já traiu alguém? Como foi?",
    "Qual foi a coisa mais cara que já comprou para impressionar alguém?",
    "Qual é sua maior insegurança na hora H?",
    "Você já fingiu um orgasmo?",
    "Qual foi a coisa mais estranha que alguém já te pediu na cama?",
    "Qual é seu maior arrependimento romântico?",
    "Você já teve um crush em alguém do grupo? Quem?",
    "Qual parte do seu corpo você mais gosta de ser tocado(a)?",
    "Qual foi o lugar mais arriscado onde você já transou?",
    "Qual é sua maior fantasia não realizada?",
    "Você já fez sexo virtual? Como foi?",
    "Qual foi a coisa mais ousada que você já fez por tesão?",
    "Você já ficou com mais de uma pessoa na mesma noite?",
    "Qual foi seu maior vacilo durante o sexo?",
    "Você já se arrependeu de ter ficado com alguém? Por quê?",
    "Qual foi a coisa mais safada que alguém já te disse?",
    "Você já teve alguma experiência com BDSM?",
    "Qual foi a maior loucura que você já fez por atração?",
    "Você já teve alguma experiência com alguém do mesmo sexo?",
    "Qual é seu maior desejo sexual atual?",
    "Você já transou com alguém famoso?",
    "Qual foi a coisa mais ousada que você já comprou em um sex shop?",
    "Você já teve uma experiência com mais de duas pessoas?",
    "Qual foi a mensagem mais picante que você já recebeu?",
    "Você já teve uma experiência com alguém muito mais velho/nova?",
    "Qual é sua maior vontade sexual neste momento?",
    "Você já teve alguma experiência com fetiches incomuns?"
];

const dares = [
    "Mande uma mensagem provocante para seu último match do Tinder.",
    "Mostre a última foto sexy que você tirou.",
    "Faça uma dancinha sensual por 30 segundos.",
    "Deixe alguém do grupo postar o que quiser no seu Instagram.",
    "Mande uma cantada bem ousada para a pessoa à sua esquerda.",
    "Faça uma lap dance imaginária.",
    "Imite um gemido de forma convincente.",
    "Beije o pescoço da pessoa à sua direita.",
    "Finja ter um orgasmo de forma dramática.",
    "Tire uma peça de roupa.",
    "Deixe alguém do grupo mandar uma mensagem para seu crush.",
    "Faça uma pose sexy e deixe o grupo tirar uma foto.",
    "Mostre a última conversa comprometedora do seu WhatsApp.",
    "Fique sem camisa até a próxima rodada.",
    "Sente no colo de alguém do grupo por uma rodada.",
    "Deixe alguém do grupo escolher sua foto de perfil por 24h.",
    "Mande uma mensagem de áudio cantando 'I'm too sexy'.",
    "Faça uma massagem em alguém do grupo.",
    "Deixe alguém do grupo fazer uma pergunta indiscreta para você.",
    "Beba um shot sem usar as mãos.",
    "Faça uma demonstração de beijo francês no ar.",
    "Mostre sua melhor cara de prazer.",
    "Faça uma dança do ventre improvisada.",
    "Deixe alguém do grupo dar um chupão no seu pescoço.",
    "Imite um strip-tease por 30 segundos.",
    "Fique vendado e toque em alguém do grupo para adivinhar quem é.",
    "Faça uma massagem nos ombros de quem você acha mais sexy do grupo.",
    "Deixe alguém do grupo fazer cócegas em você por 30 segundos.",
    "Finja seduzir alguém do grupo da forma mais sensual possível.",
    "Faça sua melhor imitação de um(a) stripper.",
    "Deixe alguém do grupo fazer uma marca de batom em você.",
    "Fique de olhos vendados e beije o pescoço de alguém aleatório.",
    "Dance de forma sensual com alguém do grupo.",
    "Faça uma demonstração do seu melhor beijo.",
    "Deixe alguém do grupo fazer uma massagem em você.",
    "Imite um comercial de perfume sensual.",
    "Finja estar em uma cena quente de novela.",
    "Faça uma pose sensual para uma foto.",
    "Demonstre sua técnica de sedução.",
    "Faça uma declaração sensual para alguém do grupo.",
    "Faça uma massagem sensual nas costas de alguém do grupo.",
    "Deixe alguém do grupo dar um beijo onde quiser.",
    "Fique 1 minuto no colo de quem você acha mais atraente.",
    "Faça uma dança sensual para alguém do grupo.",
    "Beije o pescoço de três pessoas do grupo.",
    "Deixe alguém do grupo tirar sua roupa (mantenha roupa íntima).",
    "Finja um orgasmo olhando para alguém específico do grupo.",
    "Faça uma massagem nos pés de quem você escolher.",
    "Deixe alguém do grupo dar um banho em você.",
    "Fique de lingerie/cueca por 3 rodadas.",
    "Beije a barriga de alguém do grupo.",
    "Faça uma massagem nas coxas de alguém.",
    "Deixe alguém do grupo te dar um banho de língua.",
    "Fique 5 minutos no quarto escuro com alguém.",
    "Faça uma dança erótica para alguém específico.",
    "Beije três partes do corpo de alguém (escolha da pessoa).",
    "Deixe alguém te dar um 'exame físico completo'.",
    "Finja uma cena quente de 50 tons de cinza.",
    "Faça uma massagem tântrica em alguém do grupo.",
    "Demonstre sua posição favorita com alguém."
];

// Elementos do DOM
const setupScreen = document.getElementById('setup-screen');
const gameScreen = document.getElementById('game-screen');
const playersList = document.getElementById('players-list');
const addPlayerButton = document.getElementById('add-player');
const startGameButton = document.getElementById('start-game');
const bottle = document.getElementById('bottle');
const spinBottleButton = document.getElementById('spin-bottle');
const choiceButtons = document.getElementById('choice-buttons');
const truthButton = document.getElementById('truth-button');
const dareButton = document.getElementById('dare-button');
const challengeDisplay = document.getElementById('challenge-display');
const challengeText = document.querySelector('.challenge-text');
const nextTurnButton = document.getElementById('next-turn');
const askingPlayerDiv = document.querySelector('.asking-player');
const answeringPlayerDiv = document.querySelector('.answering-player');

// Estado do jogo
let players = [];
let currentPlayerIndex = 0;
let targetPlayerIndex = 0;

// Funções de setup
function addPlayer() {
    const playerCount = playersList.children.length + 1;
    const playerInput = document.createElement('div');
    playerInput.className = 'player-input';
    playerInput.innerHTML = `
        <input type="text" placeholder="Nome do Jogador ${playerCount}" class="player-name">
        <button class="remove-player" title="Remover jogador">
            <i class="fas fa-times"></i>
        </button>
    `;
    playersList.appendChild(playerInput);

    // Adicionar evento para remover jogador
    const removeButton = playerInput.querySelector('.remove-player');
    removeButton.addEventListener('click', () => {
        playerInput.remove();
        updatePlayerNumbers();
    });
}

function updatePlayerNumbers() {
    const inputs = playersList.querySelectorAll('.player-name');
    inputs.forEach((input, index) => {
        input.placeholder = `Nome do Jogador ${index + 1}`;
    });
}

function initializeGame() {
    const playerInputs = playersList.querySelectorAll('.player-name');
    players = Array.from(playerInputs).map(input => input.value.trim() || input.placeholder);
    
    if (players.length < 2) {
        alert('São necessários pelo menos 2 jogadores!');
        return;
    }

    currentPlayerIndex = 0;
    setupScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    updatePlayerDisplay();
}

// Funções do jogo
function updatePlayerDisplay() {
    askingPlayerDiv.textContent = players[currentPlayerIndex];
    answeringPlayerDiv.textContent = players[targetPlayerIndex];
}

function spinBottle() {
    // Resetar a transformação antes de girar novamente
    bottle.style.transition = 'none';
    bottle.style.transform = 'rotate(0deg)';
    // Forçar reflow
    bottle.offsetHeight;
    
    // Configurar a animação
    bottle.style.transition = 'transform 3s cubic-bezier(0.2, 0.8, 0.3, 1)';
    const randomDegrees = Math.floor(Math.random() * 360) + 1440; // 4 voltas completas + ângulo aleatório
    bottle.style.transform = `rotate(${randomDegrees}deg)`;
    
    // Desabilitar interações durante a animação
    spinBottleButton.disabled = true;
    choiceButtons.classList.add('hidden');
    challengeDisplay.classList.add('hidden');

    setTimeout(() => {
        // Calcular jogador alvo baseado no ângulo final
        const normalizedDegrees = randomDegrees % 360;
        const playerSegment = 360 / players.length;
        targetPlayerIndex = Math.floor(normalizedDegrees / playerSegment);
        
        // Evitar que um jogador pergunte para si mesmo
        if (targetPlayerIndex === currentPlayerIndex) {
            targetPlayerIndex = (targetPlayerIndex + 1) % players.length;
        }

        updatePlayerDisplay();
        choiceButtons.classList.remove('hidden');
        spinBottleButton.disabled = false;
    }, 3100);
}

// Inicializar o jogo quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    // Verificar se já existem jogadores iniciais e adicionar eventos
    const initialRemoveButtons = document.querySelectorAll('.remove-player');
    initialRemoveButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.remove();
            updatePlayerNumbers();
        });
    });

    // Garantir que os elementos do DOM estão disponíveis
    if (!setupScreen || !gameScreen) {
        console.error('Elementos essenciais do DOM não encontrados');
        return;
    }

    // Mostrar tela inicial
    setupScreen.classList.remove('hidden');
    gameScreen.classList.add('hidden');
});

function showChallenge(type) {
    const challenges = type === 'truth' ? truths : dares;
    const challenge = challenges[Math.floor(Math.random() * challenges.length)];
    challengeText.textContent = challenge;
    choiceButtons.classList.add('hidden');
    challengeDisplay.classList.remove('hidden');
}

function nextTurn() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    challengeDisplay.classList.add('hidden');
    choiceButtons.classList.add('hidden');
    updatePlayerDisplay();
}

// Event Listeners
addPlayerButton.addEventListener('click', addPlayer);
startGameButton.addEventListener('click', initializeGame);
spinBottleButton.addEventListener('click', spinBottle);
truthButton.addEventListener('click', () => showChallenge('truth'));
dareButton.addEventListener('click', () => showChallenge('dare'));
nextTurnButton.addEventListener('click', nextTurn);

// Inicializar eventos de remoção de jogador para os jogadores iniciais
document.querySelectorAll('.remove-player').forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.remove();
        updatePlayerNumbers();
    });
});
