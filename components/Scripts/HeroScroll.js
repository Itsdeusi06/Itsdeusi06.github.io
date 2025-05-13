window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = 2000;
  const progress = Math.min(scrollY / maxScroll, 1);

  // IMAGE: move from center to left and shrink
  const imageScale = 1 - 0.5 * progress;        // From 1 → 0.5
  const imageTranslateX = -90 * progress;       // Moves to left smoothly

  const textScale = 10 - 9.9 * progress;        // From 10 → 0.1
  const textOpacity = progress;

  const backgroundImage = document.querySelector('.background-layer img');
  const centeredText = document.querySelector('.centered-text');

  if (backgroundImage) {
    backgroundImage.style.transform = `translateX(${imageTranslateX}%) scale(${imageScale})`;
  }

  if (centeredText) {
    centeredText.style.opacity = textOpacity;
    centeredText.style.transform = `translate(-50%, -95%) scale(${textScale})`;
  }
});
