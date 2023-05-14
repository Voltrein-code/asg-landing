/* eslint-disable import/prefer-default-export */
/* eslint-env browser */

const anchorScroll = (anchorSelector, targetSelector) => {
  const anchor = document.querySelector(anchorSelector);
  const target = document.querySelector(targetSelector);

  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
};

export {
  anchorScroll,
};
