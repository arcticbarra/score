var points1 = 0;
var points2 = 0;
var winner = 7;
var player1 = document.querySelectorAll(".btn-large")[0];
var player2 = document.querySelectorAll(".btn-large")[1];
var resetButton = document.querySelector(".btn");
var pointsp1 = document.querySelectorAll("span")[0];
var pointsp2 = document.querySelectorAll("span")[1];
var playingto = document.querySelectorAll("span")[2];
var input = document.querySelector("input");
var gameover = false;
var wintext = document.querySelector("#win");

  player1.addEventListener("click", function() {
    if (!gameover) {
      points1+=1;
      pointsp1.textContent = points1;
      if (points1 === winner) {
        pointsp1.classList.add("winner");
        gameover = true;
        wintext.style.display = "block";
      }
    }
  });

  player2.addEventListener("click", function() {
    if (!gameover) {
      points2+=1;
      pointsp2.textContent = points2;
      if (points2 === winner) {
        pointsp2.classList.add("winner");
        gameover = true;
        wintext.style.display = "block";
      }
    }
  });

  resetButton.addEventListener("click", function() {
    reset();
  });

  function reset() {
    points1=0;
    points2=0;
    pointsp1.textContent = points1;
    pointsp2.textContent = points2;
    pointsp1.classList.remove("winner");
    pointsp2.classList.remove("winner");
    wintext.style.display = "none";
    gameover = false;
  }

  input.oninput = function () {
    winner = Number(input.value);
    playingto.textContent = winner;
    reset();
  }
