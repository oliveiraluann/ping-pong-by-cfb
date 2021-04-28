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
        if(posJogadorY+barraH>=campoH || posJogadorY<=0) {
            posJogadorY+=(velJogador*dirJy)*-1;
        }
        velJogador.style.top=posJogadorY+"px";
    }
}

function controlarBola() {
    //Movimentação da bola
    posBolaX+=velBola*bolaX;
    posBolaY+=velBola*bolaY;

    //Colisão com jogador
    if(
        posBolaX<=posJogadorX+barraW && 
        posBolaY+bolaH>=posJogadorY && posBolaY<=posJogadorY+barraH
    ) {
        bolaY=((posBolaY+(bolaH/2))-(posJogadorY+(barraH/2)))/16;
        bolaX*=-1;
    }

    //Colisão com CPU
    if(
        posBolaX>=posCpuX-barraW && 
        posBolaY+bolaH>=posCpuY && 
        posBolaY<=posCpuY+barraH
    ) {
        bolaY=((posBolaY+(bolaH/2))-(posCpuY+(barraH/2)))/16;
        bolaX*=-1;
    }

    bola.style.top=posBolaY+"px";
    bola.style.left=posBolaX+"px";
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
        controlarJogador();
        controlarBola();
    }
    frames=requestAnimationFrame(game);
}

function iniciarJogo() {
    if(!jogo) {
        cancelAnimationFrame(frames);
        jogo=true;
        dirJy=0;
        bolaY=0;
        if(Math.random()*10<5) {
            bolaX=-1;
        }else {
            bolaX=1;
        }
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