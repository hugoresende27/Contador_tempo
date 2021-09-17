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