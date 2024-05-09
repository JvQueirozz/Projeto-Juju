let card = document.getElementById("card");

// Exibir a mensagem caso seja selecionado o 'sim'
document.querySelector("#yes").addEventListener("click", function () {
  let question = document.getElementById("question");
  let message = document.getElementById("answer");

  card.style.backgroundImage =
    "url('https://files.passeidireto.com/912af586-fa7d-4a64-b6f3-2199c7d8d815/912af586-fa7d-4a64-b6f3-2199c7d8d815.jpeg')";
  question.style.display = "none";
  message.style.display = "flex";
});

// Movimento aleatório do botão 'não'
var moveButton = document.querySelector("button:nth-child(2)");

var correctlyButton = document.querySelector("button:first-child");

moveButton.addEventListener("mouseover", function () {
  var vertical = Math.floor(Math.random() * 300);
  var horizontal = Math.floor(Math.random() * 300);
  moveButton.style.position = "absolute";
  moveButton.style.left = vertical + "px";
  moveButton.style.top = horizontal + "px";
});

