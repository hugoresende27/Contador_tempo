const dias_e=document.getElementById("dias");
const horas_e=document.getElementById("horas");
const minutos_e=document.getElementById("minutos");
const segundos_e=document.getElementById("segundos");

const ano = '1 Jan 2022';  //variavel ano 1 Jan 2022, data do primeiro dia do ano novo

function contagem(){
    const ano_novo= new Date(ano);          //ano_novo recebe valor de ano
    const data= new Date();                 //criar o objeto data

    const total_segundos=new Date(ano_novo-data)/1000;        //calculo dos segundo q faltam ate ao fim do ano, ano_novo tem valor de data de fim de ano e data tem valor da data atual

    const dias= Math.floor(total_segundos/3600/24);           //calculo dias segundos a dividir por 3600segundos(1hora)//24 horas(1dia)      
    const horas=Math.floor(total_segundos/3600)%24;           //para calcular as horas, resto da divisao por 24

    const minutos=Math.floor(total_segundos/60)%60;           //para calcular os minutos

    const segundos=Math.floor(total_segundos)%60;             //para calcular os segundos

    //console.log(dias,horas,minutos,segundos); //para testar na consola

    dias_e.innerHTML=dias;
    horas_e.innerHTML=horas;
    minutos_e.innerHTML=minutos;
    segundos_e.innerHTML=segundos;
}

function tempo(time){
    return time<10? `0${time}`:time;
}

//chamada inicial da funcao contagem
contagem();

setInterval(contagem,1000);

///////////////////////////////////////////quizz app/////////////////////////////////

const quizDados=[
    {
        pergunta:"Qual das alternativas abaixo não se trata de um periférico de saída:",
        a:"Impressora",
        b:"Monitor",
        c:"Projetor",
        d:"Teclado",
        certa:"d"
    },
    {
        pergunta:"Qual a linguagem mais usada em 2021",
        a:"Java",
        b:"C",
        c:"Python",
        d:"JavaScript",
        certa:"a"
    },
    {
        pergunta:"Quem inventou o Linux?",
        a:"Donald Trump",
        b:"Bill Gates",
        c:"Hugo Resende",
        d:"Linus Torvalds",
        certa:"d"
    },
    {
        pergunta:"Quais são as teclas de atalho para criar uma nova pasta no computador?",
        a:"Ctrl+N",
        b:"Ctrl+T",
        c:"Ctrl+Shift+N",
        d:"Ctrl+Shift+M",
        certa:"c"
    },
    {
        pergunta:"O que significa RAM?",
        a:"Read Only Memory",
        b:"Read Access Memory",
        c:"Random Air Mate",
        d:"Rolling Ants Mob",
        certa:"b"
    },
    {
        pergunta:"O que é o Windows da Microsoft?",
        a:"É um navegador de internet",
        b:"Não serve para ser instalado",
        c:"É um sistema operacional",
        d:"Componenete do pacote office",
        certa:"c"
    }
    
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".resp");
const questionEl = document.getElementById("perg");
const a_text = document.getElementById("txtA");
const b_text = document.getElementById("txtB");
const c_text = document.getElementById("txtC");
const d_text = document.getElementById("txtD");
const submitBtn = document.getElementById("enviar");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizDados[currentQuiz];

    questionEl.innerText = currentQuizData.pergunta;
    txtA.innerText = currentQuizData.a;
    txtB.innerText = currentQuizData.b;
    txtC.innerText = currentQuizData.c;
    txtD.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizDados[currentQuiz].certa) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizDados.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2 style="text-align:center;">Respondeu corretamente a ${score}/${quizDados.length} perguntas.</h2>
                
                <button onclick="location.reload()">Carregar</button>
            `;
        }
    }
});