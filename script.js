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
var jogY=0;
var cpuY=0;

//Velocidade
var velBola
var velCpu;
var velJogador;

//Controle
var pontos=0;
var tecla;

window.addEventListener("load", iniciar);