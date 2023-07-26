let estadoResposta = 'inicial';

function respostaCerta() {
  const body = document.body;
  body.style.backgroundImage = 'url(right-answer2.gif)';
  estadoResposta = 'certa';
}

function respostaErrada() {
  const body = document.body;
  body.style.backgroundImage = 'url(background-X-vermelho2.gif)';
  estadoResposta = 'errada';
}

function limpar() {
  const body = document.body;
  body.style.backgroundImage = '';
}

const botaoRespostaCerta = document.querySelector('.button.answer.button.right');
const botaoRespostaErrada = document.querySelector('.button.answer.button.wrong');
const botaoLimpar = document.querySelector('.limpar');

botaoRespostaCerta.addEventListener('click', () => {
  if (estadoResposta === 'inicial' || estadoResposta === 'errada') {
      respostaCerta();
  }
});

botaoRespostaErrada.addEventListener('click', () => {
  if (estadoResposta === 'inicial' || estadoResposta === 'certa') {
      respostaErrada();
  }
});
botaoLimpar.addEventListener('click', limpar);
