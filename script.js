import { startCounting } from './counter.js';

document.addEventListener('DOMContentLoaded', function () {
    var frame1 = document.getElementById('frame1');
    var frame2 = document.getElementById('frame2');
    var frame3 = document.getElementById('frame3');
    var frame4 = document.getElementById('frame4');
    
    var startCountPosition = frame4.offsetTop;  
    var countingTriggered = false; // Trigger the counting when scrolling
    
    window.addEventListener('scroll', function () {
        var scroll = window.scrollY;

        // Adjust these values based on your page's scroll height
        var frameHeight = window.innerHeight;
        var firstFrameEnd = frameHeight;
        var secondFrameEnd = frameHeight * 2;
        var thirdFrameEnd = frameHeight * 3;

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
        } else if (scroll > secondFrameEnd && scroll < thirdFrameEnd) {
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
            // counterAnimation = anime({}); // store the state in counterAnimation
        } else {
            // Code for frame 4
            frame1.style.opacity = 0;
            frame2.style.opacity = 0;
            frame3.style.opacity = 0;
            // Transition back to frame4 when scrolling past the trigger point
            anime({
                targets: frame4,
                opacity: 1,
                easing: 'linear',
                duration: 500,
                complete: function () {
                    // Pause the counter animation when entering the else block
                    if (scroll >= startCountPosition && !countingTriggered) {
                        startCounting();
                        countingTriggered = true;
                    }
                }
            });

            // Ensure any counting stops when leaving frame4
            // startCounting(); // Start counting animation if needed
            // renderChart();
        }
    });
});
