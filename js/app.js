const game = new Game();

const btnStartGame = document.querySelector("#begin-game");
btnStartGame.addEventListener("click", (e) => {
  game.startGame();
  e.target.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});

document.addEventListener("keydown", (e) => {
  game.handleKeydown(e);
});
