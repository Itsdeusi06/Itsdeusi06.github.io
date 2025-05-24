// Wait for DOM + GSAP to load
window.addEventListener('DOMContentLoaded', () => {
  // Responsive values for animation
  let xPercent;
  let yPercent;
  let scale;
  let top;
  let left;

  if (window.matchMedia('(min-width: 2486px)').matches) {
    xPercent = -50;
    scale = 0.6;
    top = 5;
  } else if (window.matchMedia('(min-width: 2000px) and (max-width: 2485))').matches) {
    xPercent = -50;
    yPercent = 0;
    scale = 0.6;
    top = 50;
    left = 25; 
  } else if (window.matchMedia('(min-width: 1700px) and (max-width: 1999px)').matches) {
    xPercent = -60;
    top	 = 5;
    scale =0.7;
  } else if (window.matchMedia('(min-width: 1440px) and (max-width: 1699px)').matches) {
    xPercent = -60;
    top = 5;
    scale = 0.7;
  } else if (window.matchMedia('(min-width: 1000px) and (max-width: 1439px)').matches) {
    xPercent = 0;
    yPercent = -30;
    scale = 0.8;
  } else if (window.matchMedia('(min-width: 760px) and (max-width: 999px)').matches) {
    xPercent = 0;
    yPercent = -40;
    top = 30;
    left = 25;
  } else if (window.matchMedia('(min-width: 380px) and (max-width: 759px)').matches) {
    xPercent = 0;
    yPercent = -60;
    scale = 2
    top = 50;
    left = 50;
  } else if (window.matchMedia('(min-width: 0px) and (max-width: 379px)').matches) {
    xPercent = 0;
    yPercent = -60;
    scale = 2
    top = 40;
    left = 40;
  }

  // Set HTML base font size for rem scaling
  const baseFontSize = 8;
  const html = document.documentElement;
  html.style.fontSize = `${baseFontSize}px`;

  // Auto-resize and center the riot-fist image responsively
  const resizeFist = () => {
    const fist = document.getElementById('riot-fist');
    if (!fist) return;

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
    fist.style.position = 'absolute'; // Ensure position is set
    fist.style.left = `${left}%`;
    fist.style.top = `${top}%`;
    fist.style.transform = 'translate(-50%, -50%)';
  };

  // Call once on load and on resize
  resizeFist();
  window.addEventListener('resize', resizeFist);

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
    { xPercent: 0, yPercent: 0, scale: 1, transformOrigin: 'center center' },
    { xPercent, yPercent, scale, duration: 1.5, ease: 'power2.inOut' }
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
