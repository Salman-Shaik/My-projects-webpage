const tictactoeGame=function(){
  window.open('https://im-idiot.github.io/tic-tac-toe/');
}
const wordrushGame=function(){
  window.open('https://im-idiot.github.io/WordRush/');
}
const addClickListenerToButtons=function() {
  let tictactoe=document.getElementById('tictactoe');
  let wordrush=document.getElementById('wordrush');
  wordrush.onclick=wordrushGame;
  tictactoe.onclick=tictactoeGame;
}
const begin=function() {
  addClickListenerToButtons();
}

window.onload=begin;
