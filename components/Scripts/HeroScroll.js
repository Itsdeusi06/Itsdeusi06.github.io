window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = 2000;
  const progress = Math.min(scrollY / maxScroll, 1);

  // IMAGE animation
  const imageScale = 1 - 0.5 * progress;
  const imageTranslateX = -90 * progress;

  // TEXT animation
  const textOpacity = progress;
  const maskPosition = 100 - 100 * progress;

  const backgroundImage = document.querySelector('.background-layer img');
  const centeredText = document.querySelector('.centered-text');
  const homeSection = document.querySelector('#home');

  if (backgroundImage) {
    backgroundImage.style.transform = `translateX(${imageTranslateX}%) scale(${imageScale})`;
  }

  if (centeredText) {
    centeredText.style.opacity = textOpacity;
    centeredText.style.webkitMaskPosition = `${maskPosition}% 0`;
    centeredText.style.maskPosition = `${maskPosition}% 0`;
  }

  // Reveal #home after scroll passes a certain point (e.g. 800px)
  if (scrollY > 1500) {
    homeSection.classList.add('visible');
  } else {
    homeSection.classList.remove('visible');
  }
});
