const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você acha que a Inteligência Artificial pode agregar conhecimento ao ser humano?",
        alternativas:[{

             texto: "Sim",
             afirmação: "sim, acho que a inteligência artificial pode ajudar em várias ciências e questões não respondidas."
       },
       {
             texto: "Não",
             afirmação: "A utilização é superficial e não agrega conhecimento algum."
       }    
        ]
    },
    {
        enunciado:"Você já assistiu algum filme com relação a robôs e I.A? exemplos : eu,Robô ; Wall-e.",
        alternativas:[ {

            texto: "Sim",
            afirmação: "Já assisti"
      },
      {
            texto: "Não",
            afirmação: "Nunca assisti"
      }    
       ]
    },
    {
        enunciado:"Você acha que o filme poderia se encaixar ou tornar-se realidade?",
        alternativas:[ {

            texto: "Sim",
            afirmação: "Nosso mundo pode se transformar em um mundo completamente diferente, tanto pro lado bom quanto para o lado ruim."
      },
      {
            texto: "Não",
            afirmação: "É uma realidade que não é possível, já que os robôs não são tão avançados e nem tem essa possibilidade,já que estão sob nosso controle."
      }    
       ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = ""
}
mostraPergunta();
