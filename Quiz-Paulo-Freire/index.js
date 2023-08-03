
function right() {
  document.querySelector('.answer.button.wrong').classList.remove('errada');
  document.querySelector('.answer.button.wrong1').classList.remove('errada');
  document.querySelector('.answer.button.wrong2').classList.remove('errada');
  document.querySelector('.answer.button.right').classList.add('certo');
  const body = document.body;
  body.style.backgroundImage = 'url(/imagens/backgrounds/right-answer2.gif)';
}

function wrong() {
  document.querySelector('.answer.button.right').classList.remove('certo');
  document.querySelector('.answer.button.wrong2').classList.remove('errada');
  document.querySelector('.answer.button.wrong1').classList.remove('errada');
  document.querySelector('.answer.button.wrong').classList.add('errada');
  const body = document.body;
  body.style.backgroundImage = 'url(/imagens/backgrounds/background-X-vermelho2.gif)';
}

function wrong1() {
  document.querySelector('.answer.button.right').classList.remove('certo');
  document.querySelector('.answer.button.wrong2').classList.remove('errada');
  document.querySelector('.answer.button.wrong').classList.remove('errada');
  document.querySelector('.answer.button.wrong1').classList.add('errada');
  const body = document.body;
  body.style.backgroundImage = 'url(/imagens/backgrounds/background-X-vermelho2.gif)';
}
function wrong2() {
  document.querySelector('.answer.button.right').classList.remove('certo');
  document.querySelector('.answer.button.wrong').classList.remove('errada');
  document.querySelector('.answer.button.wrong1').classList.remove('errada');
  document.querySelector('.answer.button.wrong2').classList.add('errada');
  const body = document.body;
  body.style.backgroundImage = 'url(/imagens/backgrounds/background-X-vermelho2.gif)';
}
