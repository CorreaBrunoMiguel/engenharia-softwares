const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const nav = document.querySelector('.carousel__nav');
const indicators = Array.from(nav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Posiciona os slides lado a lado
const setSlidePosition = (slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
};
slides.forEach(setSlidePosition);

// Função para mover o slide
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

// Atualiza indicador ativo
const updateIndicators = (currentIndicator, targetIndicator) => {
  currentIndicator.classList.remove('current-slide');
  targetIndicator.classList.add('current-slide');
};

// Mostra ou esconde os botões conforme posição
const updateArrows = (targetIndex) => {
  if (targetIndex === 0) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'block';
  } else if (targetIndex === slides.length - 1) {
    prevButton.style.display = 'block';
    nextButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
  }
};

// Botão "Próximo"
nextButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentIndicator = nav.querySelector('.current-slide');
  const nextIndicator = currentIndicator.nextElementSibling;
  const targetIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateIndicators(currentIndicator, nextIndicator);
  updateArrows(targetIndex);
});

// Botão "Anterior"
prevButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentIndicator = nav.querySelector('.current-slide');
  const prevIndicator = currentIndicator.previousElementSibling;
  const targetIndex = slides.findIndex((slide) => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateIndicators(currentIndicator, prevIndicator);
  updateArrows(targetIndex);
});

// Clicou em um dos indicadores
nav.addEventListener('click', (e) => {
  const targetIndicator = e.target.closest('button');

  if (!targetIndicator) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentIndicator = nav.querySelector('.current-slide');
  const targetIndex = indicators.findIndex((indicator) => indicator === targetIndicator);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateIndicators(currentIndicator, targetIndicator);
  updateArrows(targetIndex);
});

// Início: esconde botão esquerdo se estiver no primeiro slide
updateArrows(0);
