const headline = document.querySelector('#headline');
headline.textContent = 'Set Timer';

// ===============================================

const customSelectBlock = document.querySelectorAll('.item-set-timer');
customSelectBlock.forEach(function (everyCustomSelect) {
  const customSelectButton = everyCustomSelect.querySelector('.item-set-timer__btn');
  const customSelectList = everyCustomSelect.querySelector('.item-set-timer__list');
  const customSelectItem = customSelectList.querySelectorAll('.list-set-timer__item');

  customSelectButton.addEventListener('click', function () {
    customSelectList.classList.toggle('_visible');
    this.classList.add('_active');
  });
  customSelectItem.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.stopPropagation();
      customSelectButton.innerText = this.innerText;
      customSelectButton.focus();
      customSelectList.classList.remove('_visible');
    });
  });
  document.addEventListener('click', function (e) {
    if (e.target !== customSelectButton) {
      customSelectButton.classList.remove('_active');
      customSelectList.classList.remove('_visible');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      customSelectButton.classList.remove('_active');
      customSelectList.classList.remove('_visible');
    }
  });
});
