function accordionInit() {
    $(document).on('click', '.faq__accordion-title a', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().next().slideToggle();
    })
}
$(function () {
    accordionInit();
});
