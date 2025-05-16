// Wait for DOM + GSAP to load
window.addEventListener('DOMContentLoaded', () => {
   // Responsive values for animation
   let xPercent = -50;
   let scale = 0.6;
 
   if (window.matchMedia('(min-width: 2000px)').matches) {
     xPercent = -55; scale = 0.7;
   } else if (window.matchMedia('(min-width: 1440px) and (max-width: 1999px)').matches) {
     xPercent = -60; scale = 0.65;
   } else if (window.matchMedia('(min-width: 1000px) and (max-width: 1439px)').matches) {
     xPercent = -80; scale = 0.6;
   } else {
     return;
   }z
  // Set HTML base font size for rem scaling
  const baseFontSize = 16;
  const html = document.documentElement;
  html.style.fontSize = `${baseFontSize}px`;

  // Auto-resize and center the riot-fist image responsively
  const resizeFist = () => {
    const fist = document.getElementById('riot-fist');
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const minScale = 0.3;
    const maxScale = 0.5;
    const baseWidth = 1200;

    const scaleFactor = Math.min(maxScale, Math.max(minScale, vw / baseWidth));
    const imgWidth = scaleFactor * vw;

    // Resize and center the image
    fist.style.width = `${imgWidth}px`;
    fist.style.maxWidth = '90vw';
    fist.style.left = '25%';
    fist.style.top = '50%';
    fist.style.transform = 'translate(-50%, -50%)';
  };

  resizeFist();
  window.addEventListener('resize', resizeFist);

  // Mobile fallback: show static text and hide animation
  if (window.innerWidth <= 750) {
    const container = document.getElementById('text-overlay');
    container.style.opacity = 1;
    container.innerHTML = 'Riot Games | Valorant';
    document.getElementById('riot-fist').style.display = 'none';
    document.getElementById('final-text').style.display = 'none';
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const container = document.getElementById('text-overlay');
  const text = container.textContent.split('');
  container.textContent = '';
  text.forEach(char => {
    const span = document.createElement('span');
    span.innerHTML = char === ' ' ? '&nbsp;' : char;
    container.appendChild(span);
  });

 

  // Create GSAP animation timeline (initially paused)
  const tl = gsap.timeline({ paused: true });

  // Step 1: Animate fist image
  tl.fromTo('#riot-fist',
    { xPercent: 0, scale: 1, transformOrigin: 'center center' },
    { xPercent, scale, duration: 1.5, ease: 'power2.inOut' }
  );

  // Step 2: Animate text letters in reverse order
  tl.to('#text-overlay span', {
    opacity: 1,
    stagger: { each: 0.05, from: 'end' },
    duration: 0.4
  }, '<');

  // Step 3: Lift and fade out image + text
  tl.to(['#riot-fist', '#text-overlay'], {
    y: -400,
    opacity: 0,
    duration: 1,
    ease: 'power1.in'
  }, '+=0.5');

  // Step 4: Reveal final message
  tl.fromTo('#final-text',
    { opacity: 0, y: 0 },
    { opacity: 1, y: 0, duration: 1 }
  );

  const scrollDistance = 4000;
  const pageHeight = document.body.scrollHeight;

  // Tie animation to scroll progress if there's enough scroll room
  if (pageHeight >= scrollDistance) {
    ScrollTrigger.create({
      animation: tl,
      start: 'top top',
      end: `+=${scrollDistance}`,
      scrub: 1.5,
      pin: true
    });
  } else {
    // On short pages, play the animation and force fade transitions manually
    tl.play();
    setTimeout(() => {
      gsap.to(['#riot-fist', '#text-overlay'], {
        y: -400,
        opacity: 0,
        duration: 1,
        ease: 'power1.in'
      });
      gsap.to('#final-text', {
        opacity: 1,
        duration: 1
      });
    }, 3000);
  }

  // Animate body background color on scroll
  gsap.to("body", {
    backgroundColor: "#000",
    ease: "none",
    scrollTrigger: {
      trigger: "#final-text",
      start: "top+=1500 top",
      end: "top+=2000 top",
      scrub: 1.5
    }
  });

  // Fade in .text elements on scroll into view
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

  // Ensure final text fades in when visible (even on short pages)
  if (pageHeight < scrollDistance) {
    const finalText = document.getElementById('final-text');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(finalText, { opacity: 1, duration: 1 });
        }
      });
    }, { threshold: 0.6 });
    observer.observe(finalText);
  }
});
