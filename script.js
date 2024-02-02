const botaoVoltar    = document.getElementById('anterior');
const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar   = document.getElementById('proximo');
const nomeCapitulo   = document.getElementById('capitulo');
const audioCapitulo  = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let capituloAtual = 1;
let taTocando = 0;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-fill');
}
function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
}
function tocarOuPausar(){
    if(taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    }else{
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}

function proximaFaixa() {
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    }else{
        capituloAtual += 1;
    }

    audioCapitulo.src ="./books/dom-casmurro/" + capituloAtual + ".mp3"
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

function voltarFaixa() {
    if(capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    }else{
        capituloAtual -= 1;
    }

    audioCapitulo.src ="./books/dom-casmurro/" + capituloAtual + ".mp3"
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

botaoVoltar.addEventListener('click', voltarFaixa);
botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);