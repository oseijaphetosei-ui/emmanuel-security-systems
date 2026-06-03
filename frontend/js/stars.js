const container = document.getElementById('stars-container');
const STAR_COUNT = 120;

for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const size          = Math.random() * 2.5 + 0.5;   // 0.5px – 3px
    const left          = Math.random() * 100;           // % across screen
    const startBottom   = Math.random() * 100;           // % up the screen
    const floatDuration = Math.random() * 40 + 20;      // 20s – 60s to cross screen
    const twinkleDuration = Math.random() * 3 + 1;      // 1s – 4s per twinkle
    const floatDelay    = Math.random() * -60;           // stagger start positions
    const twinkleDelay  = Math.random() * -4;

    star.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        bottom: ${startBottom}%;
        animation-duration: ${floatDuration}s, ${twinkleDuration}s;
        animation-delay: ${floatDelay}s, ${twinkleDelay}s;
    `;

    container.appendChild(star);
}
