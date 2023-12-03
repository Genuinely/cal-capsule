document.addEventListener('DOMContentLoaded', function () {
    var frame1 = document.getElementById('frame1');
    var frame2 = document.getElementById('frame2');
    var frame3 = document.getElementById('frame3');

    window.addEventListener('scroll', function() {
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
        } else if (scroll < secondFrameEnd) {
            frame1.style.opacity = 0;
            anime({
                targets: frame2,
                opacity: 1,
                easing: 'linear',
                duration: 500
            });
            frame24.style.opacity = 0;
        } else {
            frame1.style.opacity = 0;
            frame2.style.opacity = 0;
            anime({
                targets: frame3,
                opacity: 1,
                easing: 'linear',
                duration: 500
            });
        }
    });
});
