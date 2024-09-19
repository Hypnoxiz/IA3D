const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você gosta da ideia de Inteligência Artificial?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: ["Alternativa 1", "Alternativa 2"]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: ["Alternativa 1", "Alternativa 2"]
    }
];

let posicao = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    // Limpa as alternativas anteriores
    caixaAlternativa.innerHTML = '';

    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.addEventListener('click', avancarPergunta);
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}

function avancarPergunta() {
    posicao++;
    if (posicao < perguntas.length) {
        mostraPergunta();
    } else {
        mostraResultado();
    }
}

function mostraResultado() {
    caixaPergunta.textContent = "Fim das perguntas!";
    caixaAlternativa.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta();
