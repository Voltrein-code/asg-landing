/* eslint-disable import/prefer-default-export */
/* eslint-env browser */

const anchorScroll = (anchorSelector, targetSelector) => {
  const anchor = document.querySelectorAll(anchorSelector);
  const target = document.querySelector(targetSelector);

  Array.from(anchor).forEach((el) => [
    el.addEventListener('click', (e) => {
      e.preventDefault();

      target.scrollIntoView({ behavior: 'smooth' });
    }),
  ]);
};

export {
  anchorScroll,
};
