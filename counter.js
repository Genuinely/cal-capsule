// counter.js

function startCounting() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach((counter) => {
        anime({
            targets: counter,
            innerHTML: [0, counter.getAttribute('data-count')],
            easing: 'easeInOutSine',
            round: 1,
            duration: 2000,
        });
    });
}

// Call the startCounting function when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    startCounting();
});