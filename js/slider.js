function sliderInit() {
    var button_prev = document.querySelector('.prev');
    var button_next = document.querySelector('.next');
    var slides = document.querySelectorAll('.slide');
    var counter = document.querySelector('.counter');

    var cur = slides.length - 1;
    setCounter();

    button_prev.addEventListener('click', function() {
        if (cur < slides.length - 1) prev()
    });

    button_next.addEventListener('click', function() {
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
        counter.innerHTML = `<b>${Math.abs(cur - slides.length )}</b>  /  ${slides.length}`
    }
}
sliderInit();