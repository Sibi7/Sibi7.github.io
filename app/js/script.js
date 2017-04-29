$(document).ready(function () {

    /*header mobile menu*/


    $(document).on('click', '#header-burger', function (e) {
        e.preventDefault();
        var trigger = $(this),
            menu = trigger.next('.header__nav');

        if (trigger.hasClass('show')) {
            trigger.removeClass('show');
            menu.slideUp('fast');
        } else {
            trigger.addClass('show');
            menu.slideDown('fast');
        }
    });
    if (window.innerWidth < 600) {
        $(document).on('click', function (e) {//при клике на поле
            if ($(e.target).closest('.header__navigation').length != 1) {//не содержащего навигационную панель
                $('.header__nav').slideUp('fast');//скрываем меню
                $('#header-burger').removeClass('show');//убираем у кнопки активный класс
            }
        });
    }
    /*close header mobile menu*/

    /*animate scroll menu*/
    $(document).on('click', '.header__nav a', function (event) {/*функция прокрутки на блок страницы при клике по элементам меню */
        event.preventDefault();
        var href = $(this).attr('href');
        var target = $(href);
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        return false;
    });
    /*close animate scroll menu*/

    /*go to top scroll*/
    $.fn.scrollToTop = function () {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow");
        var scrollDiv = $(this);
        $(window).scroll(function () {
            if ($(window).scrollTop() <= "250") {
                $(scrollDiv).fadeOut("slow")
            }
            else {
                $(scrollDiv).fadeIn("slow")
            }
        });
        $(this).click(function () {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    };
    $('#Go_Top').scrollToTop();
    /*close go to top scroll*/
});