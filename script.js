document.addEventListener('DOMContentLoaded', function () {
    var frame1 = document.getElementById('frame1');
    var frame2 = document.getElementById('frame2');
    var frame3 = document.getElementById('frame3');
    var frame4 = document.getElementById('frame4');
    var countingNumbers = document.getElementById('counting-numbers');

    // Set the scroll position to trigger the count-up animation
    var triggerScrollPosition = 2853;

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

    function renderChart() {
        const daysOfWeek = Utils.months({count: 7});
        // Your code to render the chart goes here
        // This can be your Chart.js initialization logic
        // Example:
        var ctx = document.getElementById('barChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: daysOfWeek,
                datasets: [{
                    label: 'Number of events',
                    data: barValues,
                    backgroundColor: barValues.map((value, index) => index === highlightedBarIndex ? '#fff' : '#888'),
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    window.addEventListener('scroll', function () {
        var scroll = window.scrollY;

        // Adjust these values based on your page's scroll height
        var frameHeight = window.innerHeight;
        var firstFrameEnd = frameHeight;
        var secondFrameEnd = frameHeight * 2;

        if (scroll < firstFrameEnd) {
            anime({
                targets: frame1,
                opacity: 1,
                easing: 'linear',
                duration: 500
            });
            frame2.style.opacity = 0;
            frame3.style.opacity = 0;

            // Ensure any counting stops when leaving the first frame
            // startCounting(); // Start counting animation if needed
        } else if (scroll < secondFrameEnd) {
            frame1.style.opacity = 0;
            anime({
                targets: frame2,
                opacity: 1,
                easing: 'linear',
                duration: 500
            });
            frame3.style.opacity = 0;

            // Ensure any counting stops when leaving the second frame
            // startCounting(); // Start counting animation if needed
        } else if (scroll >= triggerScrollPosition) {
            frame1.style.opacity = 0;
            frame2.style.opacity = 0;
            anime({
                targets: frame3,
                opacity: 1,
                easing: 'linear',
                duration: 500,
                complete: function() {
                    // Start counting animation when scrolling past the trigger point for frame 3
                    startCounting();
                }
            });
        } else {
            // Transition back to frame4 when scrolling past the trigger point
            anime({
                targets: frame4,
                opacity: 1,
                easing: 'linear',
                duration: 500
            });

            // Ensure any counting stops when leaving frame4
            startCounting(); // Start counting animation if needed
            // renderChart();
        }
    });
});
