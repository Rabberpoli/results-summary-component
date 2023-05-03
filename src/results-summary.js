function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}

gsap.fromTo( ".results-card",{ y: 1000 }, { y: 0, duration: 2, ease: "bounce.out"});

const resultValueHtml = document.getElementById('resultValue');
if (resultValueHtml) {
    animateValue(resultValueHtml, 0, resultValueHtml.innerText, 3000)
}

setTimeout( () => {
    gsap.fromTo( ".summary-h2",{ x: 150, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "in"});
    gsap.fromTo( ".category-reaction-container",{ x: 150, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "in"});
    gsap.fromTo( ".category-memory-container",{ x: 150, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.5, ease: "in"});
    gsap.fromTo( ".category-verbal-container",{ x: 150, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1, ease: "in"});
    gsap.fromTo( ".category-visual-container",{ x: 150, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1.5, ease: "in"});
}, 2000)
