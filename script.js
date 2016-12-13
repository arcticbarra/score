var points1 = 0;
var points2 = 0;
var player1 = document.querySelectorAll(".btn-large")[0];
var player2 = document.querySelectorAll(".btn-large")[1];
var reset = document.querySelector(".btn");
var pointsp1 = document.querySelectorAll("span")[0];
var pointsp2 = document.querySelectorAll("span")[1];
var playingto = document.querySelectorAll("span")[2];
var input = document.querySelector("input");
var gameover = false;

  player1.addEventListener("click", function() {
    if (!gameover) {
      points1+=1;
      pointsp1.textContent = points1;
      if (points1 == playingto.textContent) {
        pointsp1.style.color = "rgb(45, 163, 35)";
        gameover = true;
      }
    }
  })

  player2.addEventListener("click", function() {
    if (!gameover) {
      points2+=1;
      pointsp2.textContent = points2;
      if (points2 == playingto.textContent) {
        pointsp2.style.color = "rgb(45, 163, 35)";
        gameover = true;
      }
    }
  })

  reset.addEventListener("click", function() {
    points1=0;
    pointsp1.textContent = points1;
    points2=0;
    pointsp2.textContent = points2;
    pointsp2.style.color = "black";
    pointsp1.style.color = "black";
    gameover = false;
  })

  input.oninput = function () {
    playingto.textContent = input.value;
  }
