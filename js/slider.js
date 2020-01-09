function sliderInit() {
    var slides = $('.slide');
    var counter = $('.counter');
    var cur = slides.length - 1;
    setCounter();

    $(document).on('click', '.prev', function () {
        if (cur < slides.length - 1) prev()
    });
    $(document).on('click', '.next', function () {
        if (cur > 0) next()
    });

    function next() {
        slides[cur].classList.add('prev-slide');
        slides[cur - 1].classList.remove('next-slide');
        cur--;
        setCounter();
    }

    function prev() {
        slides[cur].classList.add('next-slide');
        slides[cur + 1].classList.remove('prev-slide');
        cur++;
        setCounter();
    }

    function setCounter() {
        counter.html(`<b>${Math.abs(cur - slides.length )}</b>  /  ${slides.length}`)
    }
    slides.swipe({
        swipeLeft: function () {
            if (cur > 0) next()
        },
        swipeRight: function () {
            if (cur < slides.length - 1) prev()

        },
    });
}

