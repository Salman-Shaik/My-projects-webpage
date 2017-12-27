const tictactoeGame=function(){
  window.open('https://im-idiot.github.io/tic-tac-toe/');
}
const wordrushGame=function(){
  window.open('https://im-idiot.github.io/WordRush/');
}
const obstructionGame=function(){
  window.open('https://im-idiot.github.io/Obstruction/');
}
const addClickListenerToButtons=function() {
  let tictactoe=document.getElementById('tictactoe');
  let wordrush=document.getElementById('wordrush');
  let obstruction=document.getElementById('obstruction');
  // let wordrush=document.getElementById('wordrush');
  // let wordrush=document.getElementById('wordrush');
  // let wordrush=document.getElementById('wordrush');

  wordrush.onclick=wordrushGame;
  tictactoe.onclick=tictactoeGame;
  obstruction.onclick=obstructionGame;
  // wordrush.onclick=wordrushGame;
  // wordrush.onclick=wordrushGame;
  // wordrush.onclick=wordrushGame;
}
const begin=function() {
  addClickListenerToButtons();
}

window.onload=begin;
