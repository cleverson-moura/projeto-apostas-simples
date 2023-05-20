let answer = Math.floor(Math.random() * 101); // Gera um número aleatório de 0 a 100
let score = parseInt(localStorage.getItem('score')) || 50; // Obtém a pontuação salva ou define como 0 se não houver dados
let highScore = parseInt(localStorage.getItem('highScore')) || 0; // Obtém o recorde salvo ou define como 0 se não houver dados

if (localStorage.getItem("nome")) {
  nomeSalvo.textContent = `Usuário no momento: ${localStorage.getItem("nome")}`;
}

var inputElement = document.getElementById("aposta");//pega o id do input
var valor = score;
inputElement.value = valor; //adiciona o valor ao input

const guessInput = document.getElementById('guess'); // Obtém o campo de entrada de texto
const guessAposta = document.getElementById('aposta'); // Obtém a aposta
const submitBtn = document.getElementById('submit'); // Obtém o botão de envio
const resultText = document.getElementById('result'); // Obtém o elemento para exibir o resultado
const scoreText = document.getElementById('score'); // Obtém o elemento para exibir a pontuação
const numText = document.getElementById('num'); // Obtém o elemento para exibir a numero sorteado
const highScoreText = document.getElementById('high-score'); // Obtém o elemento para exibir o recorde

// Exibe a pontuação inicial
scoreText.textContent = score.toString();
highScoreText.textContent = highScore.toString();

// Adiciona um ouvinte de eventos para o botão de envio
submitBtn.addEventListener('click', function() {
  // Obtém a resposta do usuário e converte para um número inteiro
  const guess = guessInput.value;
  const aposta = parseInt(guessAposta.value);

  if(aposta == score){// verifica se o valor apostado é menor que o valor restante
    pi = answer % 2; //calculo para saber se o numero é par ou impar
    if (pi == 0) {
        pi = "par";
    }else{
        pi = "impar";
    }
    if (guess === pi) {// Verifica se a resposta está correta
        score += aposta * 2; // Multiplica a aposta por 2
        resultText.textContent = 'Parabéns! Você acertou.'; // Exibe a mensagem de acerto
        resultText.style.color = '#4caf50'; // Muda a cor da mensagem de resultado para verde
      } else {
        score -= aposta; // Remove o que voce apostou da pontuação
        resultText.textContent = 'Que pena! Você errou.'; // Exibe a mensagem de erro
        resultText.style.color = '#f44336'; // Muda a cor da mensagem de resultado para vermelho
      }
  }else{
    resultText.textContent = 'Digite um valor válido'; // Exibe a mensagem de erro
    resultText.style.color = '#FFD700'; // Muda a cor da mensagem de resultado para vermelho
  }

  // Atualiza o texto da pontuação
  scoreText.textContent = score.toString();
  numText.textContent = answer.toString();

  if (score > highScore) {
    highScore = score;
    highScoreText.textContent = highScore.toString();
    localStorage.setItem('highScore', highScore.toString());
  }

  // Salva a pontuação no localStorage
  localStorage.setItem('score', score.toString());

  // Gera um novo número aleatório para a próxima rodada
  answer = Math.floor(Math.random() * 101);
});

function reset() {
    if (confirm("Tem certeza?")) {
        localStorage.clear()
    }
}

//pop-up
// Pega o botão e o modal
var btn = document.getElementById("myBtn");
var modal = document.getElementById("myModal");

// Pega o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no botão, abre o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clica no <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clica em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
