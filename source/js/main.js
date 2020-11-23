// modal
const notifyicon = document.querySelector('#notify');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

notifyicon.addEventListener('click', () => {
  modal.classList.add('is-active');
})

modalBg.addEventListener('click', () => {
  modal.classList.remove('is-active');
})


