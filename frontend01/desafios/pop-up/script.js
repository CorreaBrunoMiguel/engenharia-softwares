document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('pop-up-modal');

  const botaoShowPopUp = document.getElementById('btn-modal');

  botaoShowPopUp.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
});
