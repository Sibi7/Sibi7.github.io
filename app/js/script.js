function accordionInit() {
    $(document).on('click', '.faq__accordion-title a', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().next().slideToggle();
    })
}
$(function () {
    accordionInit();
    $('.portfolio__wrap').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ["<img src='img/nav-left.png'>","<img src='img/nav-right.png'>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })
});
