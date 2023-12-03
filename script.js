document.addEventListener("DOMContentLoaded", function () {
    const element = document.querySelector('.text-animation');
    const lettersHtml = element.textContent.replace(/\S/g, '<span class="letter">$&</span>');
    element.innerHTML = `<div class="letters">${lettersHtml}</div><span class="cursor"></span>`;
    element.style.display = 'block';

    // Typewriter animation code
    const letters = Array.from(element.querySelectorAll('.letter'));
    const TYPE_AFTER_MS = 2000; // Slower typing speed
    const JUMP_AFTER_MS = 100; // Slower delay between letters

    const blink = anime({
        targets: '.text-animation .cursor',
        duration: 750,
        opacity: [
            { value: 1, delay: 0 },
            { value: 0, delay: 375 }
        ],
    });

    const animation = anime.timeline({
        autoplay: false // Pause the animation by default
    })
        .add({
            targets: '.text-animation .cursor',
            translateX: letters.map((letter, i) =>
                ({ value: letter.offsetLeft + letter.offsetWidth, duration: 1, delay: i === 0 ? 0 : JUMP_AFTER_MS })),
        }, TYPE_AFTER_MS)
        .add({
            targets: '.text-animation .letter',
            opacity: [0, 1],
            duration: 100, // Slightly slower
            delay: anime.stagger(JUMP_AFTER_MS),
            changeBegin: () => {
                blink.reset();
                blink.pause();
            },
            changeComplete: () => {
                blink.restart();
            },
        }, TYPE_AFTER_MS);

    // Add an event listener for scrolling
    window.addEventListener("scroll", function () {
        const scrollThreshold = 500; // Adjust this value to determine when to show the scroll content
        const scrollContent = document.querySelector('.scroll-content');

        // Calculate the scroll progress as a percentage
        const scrollPercent = (window.scrollY / scrollThreshold) * 100;

        // Seek the animation based on scroll progress
        animation.seek((scrollPercent / 100) * animation.duration);

        // Check if the user has scrolled past the threshold to show the scroll content
        if (window.scrollY > scrollThreshold) {
            scrollContent.style.display = 'block';
        } else {
            scrollContent.style.display = 'none';
        }
    });

    // Start the animation when the page loads
    animation.play();
});
