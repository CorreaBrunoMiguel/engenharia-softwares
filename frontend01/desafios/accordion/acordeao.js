const botoes = document.querySelectorAll('.cabecalho');

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const item = botao.parentElement;
    const conteudo = item.querySelector('.conteudo');
    const estaAberto = item.classList.contains('aberto');

    document.querySelectorAll('.item').forEach((i) => {
      i.classList.remove('aberto');
      i.querySelector('.conteudo').style.height = '0';
    });

    if (!estaAberto) {
      item.classList.add('aberto');
      conteudo.style.height = conteudo.scrollHeight + 'px';
    }
  });
});
