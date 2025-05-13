// Wait for DOM + GSAP to load
window.addEventListener('DOMContentLoaded', () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Build timeline (not paused)
  const tl = gsap.timeline();
  const container = document.getElementById('text-overlay');
  const text = container.textContent.split('');
  container.textContent = ''; // Clear the <p> before adding spans

  console.log('Initial text:', container.textContent); // <- should be non-empty

  // Create spans for each character
  text.forEach(char => {
    const span = document.createElement('span');
    if (char === ' ') {
      span.innerHTML = '&nbsp;';
    } else {
      span.textContent = char;
    }
    container.appendChild(span);
  });

  // Step 1: Move & scale fist
  tl.fromTo('#riot-fist',
  { xPercent: 0, scale: 1, transformOrigin: 'center center' },
  { xPercent: -150, scale: 0.6, duration: 1.5, ease: 'power2.inOut' }
);

  // Step 2: Text fade-in reverse
  tl.to('#text-overlay span', {
    opacity: 1,
    stagger: { each: 0.05, from: 'end' },
    duration: 0.4
  }, '<');

  // Step 3: Lift & fade out
  tl.to(['#riot-fist', '#text-overlay'], {
    y: -400,
    opacity: 0,
    duration: 1,
    ease: 'power1.in'
  }, '+=0.5');

  // Step 4: Reveal final text
  tl.fromTo('#final-text',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1 }
  );

  // ScrollTrigger: tie timeline progress to scroll position
  ScrollTrigger.create({
    animation: tl,
    start: 'top top',
    end: '+=4000', // Increase scroll distance for smoother progress
    scrub: 1.5,    // Smooth out the animation (seconds of catch-up)
    pin: true      // Optional: pins the section during animation
  });
});