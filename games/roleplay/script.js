const roles = {
    dominant: [
        "Professor(a) sedutor(a)",
        "Chefe autoritário(a)",
        "Médico(a) provocante",
        "Policial dominador(a)",
        "Massagista experiente",
        "Personal trainer intenso(a)",
        "Vampiro(a) sedutor(a)",
        "Dançarino(a) exótico(a)",
        "Fotógrafo(a) sensual",
        "Dominador(a) BDSM"
    ],
    submissive: [
        "Aluno(a) inocente",
        "Secretário(a) submisso(a)",
        "Paciente necessitado(a)",
        "Suspeito(a) cooperativo(a)",
        "Cliente relaxado(a)",
        "Atleta dedicado(a)",
        "Mortal hipnotizado(a)",
        "Admirador(a) tímido(a)",
        "Modelo provocante",
        "Submisso(a) obediente"
    ]
};

const scenarios = [
    "Uma aula particular que se torna muito mais interessante",
    "Uma reunião a portas fechadas no escritório",
    "Uma consulta médica que esquenta rapidamente",
    "Uma revista policial que vai longe demais",
    "Uma massagem que ultrapassa todos os limites",
    "Um treino particular que vira algo mais",
    "Um encontro noturno com um ser sobrenatural",
    "Uma sessão fotográfica que fica muito quente",
    "Uma noite em um clube exclusivo",
    "Uma sessão de dominação e submissão",
    "Uma entrevista de emprego não convencional",
    "Uma aula de dança que se torna íntima",
    "Uma noite em um quarto de hotel luxuoso",
    "Uma sessão de terapia muito especial",
    "Um encontro em uma sala de interrogatório"
];

const extras = [
    [
        "Usar vendas nos olhos",
        "Incorporar algemas",
        "Incluir sussurros ao ouvido",
        "Fazer uma massagem sensual"
    ],
    [
        "Usar cordas de seda",
        "Incluir gelo no jogo",
        "Fazer striptease lento",
        "Usar plumas e texturas"
    ],
    [
        "Incorporar comandos verbais",
        "Usar venda nos olhos",
        "Fazer respiração no pescoço",
        "Incluir mordidas leves"
    ],
    [
        "Usar roupas específicas",
        "Incorporar acessórios",
        "Fazer massagem com óleos",
        "Usar música sensual"
    ]
];

class RoleplayGame {
    constructor() {
        this.setupElements();
        this.setupEventListeners();
    }

    setupElements() {
        console.log('Configurando elementos...');
        this.role1Element = document.getElementById('role1');
        this.role2Element = document.getElementById('role2');
        this.scenarioElement = document.getElementById('scenario');
        this.extrasElement = document.getElementById('extras');
        this.generateButton = document.getElementById('generateScene');
        this.resetButton = document.getElementById('resetGame');

        console.log('Elementos encontrados:', {
            role1: this.role1Element,
            role2: this.role2Element,
            scenario: this.scenarioElement,
            extras: this.extrasElement,
            generateBtn: this.generateButton,
            resetBtn: this.resetButton
        });
    }

    setupEventListeners() {
        console.log('Configurando event listeners...');
        if (this.generateButton) {
            this.generateButton.addEventListener('click', () => {
                console.log('Botão Gerar clicado');
                this.generateScene();
            });
        } else {
            console.error('Botão Gerar não encontrado!');
        }

        if (this.resetButton) {
            this.resetButton.addEventListener('click', () => {
                console.log('Botão Recomeçar clicado');
                this.resetGame();
            });
        } else {
            console.error('Botão Recomeçar não encontrado!');
        }
    }

    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    generateScene() {
        console.log('Gerando nova cena...');
        try {
            // Gerar papéis
            const role1 = this.getRandomItem(roles.dominant);
            let role2;
            do {
                role2 = this.getRandomItem(roles.submissive);
            } while (role2.replace(/\(a\)/g, '') === role1.replace(/\(a\)/g, ''));

            // Gerar cenário
            const scenario = this.getRandomItem(scenarios);

            // Gerar extras
            const sceneExtras = this.getRandomItem(extras);

            console.log('Conteúdo gerado:', { role1, role2, scenario, sceneExtras });

            // Atualizar interface
            if (this.role1Element) this.role1Element.textContent = role1;
            if (this.role2Element) this.role2Element.textContent = role2;
            if (this.scenarioElement) this.scenarioElement.textContent = scenario;
            
            if (this.extrasElement) {
                this.extrasElement.innerHTML = sceneExtras
                    .map(extra => `<li>${extra}</li>`)
                    .join('');
            }

            console.log('Interface atualizada com sucesso');
        } catch (error) {
            console.error('Erro ao gerar cena:', error);
        }

        // Adicionar animação de fade
        this.addFadeAnimation([
            this.role1Element,
            this.role2Element,
            this.scenarioElement,
            this.extrasElement
        ]);
    }

    addFadeAnimation(elements) {
        elements.forEach(element => {
            element.style.opacity = '0';
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transition = 'opacity 0.5s ease';
            }, 100);
        });
    }

    resetGame() {
        this.role1Element.textContent = 'Clique em "Gerar" para começar!';
        this.role2Element.textContent = 'Clique em "Gerar" para começar!';
        this.scenarioElement.textContent = 'Clique em "Gerar" para começar!';
        this.extrasElement.innerHTML = '<li>Clique em "Gerar" para começar!</li>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new RoleplayGame();
});
