/* eslint-disable import/prefer-default-export */
/* eslint-env browser */

const anchorScroll = (anchorSelector, targetSelector) => {
  const anchor = document.querySelectorAll(anchorSelector);
  const target = document.querySelector(targetSelector);

  Array.from(anchor).forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
};

const trackScroll = () => {
  const scrollButton = document.querySelector('.button_type_scroll');

  const scrolled = window.scrollY;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    scrollButton.classList.remove('button_hidden');
  } else {
    scrollButton.classList.add('button_hidden');
  }
};

export {
  anchorScroll,
  trackScroll,
};
