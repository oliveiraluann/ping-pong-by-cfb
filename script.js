//Elementos 
var btnIniciar;
var bola;
var cpu;
var jogador;
var painelTxtPontos;

//Controle de animação
var game;
var frames;

//Posições
var posBolaX;
var posBolaY;
var posJogadorX;
var posJogadorY;
var posCpuX;
var posCpuY;

//Direção (teclado)
var dirJy;

//Posições iniciais
var posJogIniY=180;
var posCpuIniY=180;
var posBolaIniX=475;
var posBolaIniY=240;

//Tamanhos
var campoX=0;
var campoY=0;
var campoW=960;
var campoH=500;
var barraW=20;
var barraH=140;
var bolaW=20;
var bolaH=20;

//Direção (bola)
var bolaX;
var bolaY;
var cpuY=0;

//Velocidade
var velBola
var velCpu;
var velJogador;

//Controle
var pontos=0;
var tecla;
jogo=false;

function controlarJogador() {
    if(jogo) {
        posJogadorY+=velJogador*dirJy;
        velJogador.style.top=posJogadorY+"px";
    }
}

function teclaDw() {
    tecla=event.keyCode;
    if(tecla==38) {
        dirJy=-1;
    }else if(tecla==40) {
        dirJy=1;
    }
}

function teclaUp() {
    tecla=event.keyCode;
    if(tecla==38) {
        dirJy=0;
    }else if(tecla==40) {
        dirJy=0;
    }
}

function game() {
    if(jogo) {

    }
    frames=requestAnimationFrame(game);
}

function iniciarJogo() {
    if(!jogo) {
        cancelAnimationFrame(frames);
        jogo=true;
        dirJy=0;
        posBolaX=posBolaIniX;
        posBolaY=posBolaIniY;
        posJogadorY=posJogIniY;
        posCpuY=posCpuIniY;
        game();
    }
}

function inicializar() {
    velBola=velCpu=velJogador=8;
    btnIniciar=document.getElementById("btnIniciar");
    btnIniciar.addEventListener("click", iniciarJogo);
    jogador=document.getElementById("jogador");
    cpu=document.getElementById("cpu");
    bola=document.getElementById("bola");
    painelTxtPontos=document.getElementById("txtPontos");
    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keyup", teclaUp);
}

window.addEventListener("load", inicializar);