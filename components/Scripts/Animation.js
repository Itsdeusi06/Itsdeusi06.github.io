// Wait for DOM + GSAP to load
window.addEventListener('DOMContentLoaded', () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Build timeline (not paused)
  const tl = gsap.timeline();
  const container = document.getElementById('text-overlay');
  const text = container.textContent.split('');
  container.textContent = ''; // Clear the <p> before adding spans

  // Create spans for each character
  text.forEach(char => {
    const span = document.createElement('span');
    span.innerHTML = char === ' ' ? '&nbsp;' : char;
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
    scrub: 1.5,
    pin: true
  });

  // Background color animation (starts after initial animation)
  gsap.to("body", {
    backgroundColor: "#000",
    ease: "none",
    scrollTrigger: {
      trigger: "#final-text",
      start: "top+=1500 top",   // start fade after 1000px scroll
      end: "top+=2000 top",     // end fade at 4000px scroll
      scrub: 1.5
    }
  });

  // Animate each .text as it comes into view
  document.querySelectorAll('.text').forEach(section => {
    gsap.to(section, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });
});