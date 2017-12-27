const loadTictactoeGame=function(){
  window.open('https://im-idiot.github.io/tic-tac-toe/');
}
const loadWordrushGame=function(){
  window.open('https://im-idiot.github.io/WordRush/');
}
const loadObstructionGame=function(){
  window.open('https://im-idiot.github.io/Obstruction/');
}
const loadChompGame=function(){
  window.open('https://im-idiot.github.io/chomp/');
}
const loadillguessitGame=function(){
  window.open('https://im-idiot.github.io/i-ll-Guess-IT/');
}
const loadParanormality=function() {
  window.open('https://im-idiot.github.io/Paranormality/')
}
const addClickListenerToButtons=function() {
  let tictactoe=document.getElementById('tictactoe');
  let wordrush=document.getElementById('wordrush');
  let obstruction=document.getElementById('obstruction');
  let chomp=document.getElementById('chomp');
  let illguessit=document.getElementById('illguessit');
  let paranormality=document.getElementById('paranormality');

  wordrush.onclick=loadWordrushGame;
  tictactoe.onclick=loadTictactoeGame;
  obstruction.onclick=loadObstructionGame;
  chomp.onclick=loadChompGame;
  illguessit.onclick=loadillguessitGame;
  paranormality.onclick=loadParanormality;
}
const begin=function() {
  addClickListenerToButtons();
}

window.onload=begin;
