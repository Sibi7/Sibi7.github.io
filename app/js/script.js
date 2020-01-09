function accordionInit() {
    $(document).on('click', '.faq__accordion-title a', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().next().slideToggle();
    })
}

function carouselInit() {
    $('.portfolio__wrap').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        navText: ["<img src='img/nav-left.png'>", "<img src='img/nav-right.png'>"],
        responsive: {
            0: {
                items: 1
            }
        }
    })
}

function phoneMaskAndValidationInit() {
    $('input[type="tel"]').mask('+7 (000) 000-00-00');

    $(document).on('blur', 'input[type="tel"]', function (e) {
        if (e.target.value.length !== 18) {
            $(e.target).addClass('invalid');
        } else {
            $(e.target).removeClass('invalid');
        }
    })
}

function formSubmitInit() {

    $(document).on('submit', 'form', function (e) {

        if ($(this).find('input[type="tel"]').hasClass('invalid')) {
            e.preventDefault();
            return false;
        } else {
            // //TODO: Заглушка для показа модалки благодарности. Исправить для продакшена отправку формы
            e.preventDefault();
            hideModal();

            $('.modal-thanks').addClass('modal--visible');
            showOverlay();
            setTimeout(function () {
                hideModal();
            }, 3000)
        }

    });
}

function positionTabNav() {


    var tabsNav = $('.tabs__nav');
    var firstTab = $('.tabs__body').innerHeight();
    var firstHead = $('.tabs__header').innerHeight();
    var firstHeight = firstTab + firstHead +  'px';
    tabsNav.css({
        top: firstHeight
    });

    $(document).on('click', '.tabs__nav li', function (e) {
        e.preventDefault();
        $('.tabs__body').each(function () {
            if ($(this).closest('.tabs__content').hasClass('active-tab') === true) {
                var tabsBody = $(this).innerHeight();
                var tabsHeader = $(this).siblings('.tabs__header').innerHeight();
                var tabsHeight = tabsBody + tabsHeader + 'px';
                tabsNav.css({
                    top: tabsHeight
                });
            }
        });
        var id = $('.rates');
        var  top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 300);
    });
}

function mobileMenuInit() {

    $(document).on('click', '.menu__btn', function () {
        $('.menu__wrap').addClass('visible').slideDown('fast');
        showOverlay();
    });

    $(document).on('click', '.menu__close', function () {
        $('.menu__wrap').removeClass('visible').slideUp('fast');
        hideOverlay();
    })

}


function overlayClickInit() {
    $(document).on('click', '.overlay', function () {
        if ($('.menu__wrap').hasClass('visible')) {
            $('.menu__wrap').slideUp('fast');
            hideOverlay();
        }
        hideModal();
    });
}

function showModalInit() {
    $(document).on('click', '.open-modal-btn', function (e) {
        e.preventDefault();

        var modalName = $(this).attr('data-modal');
        $('.modal-' + modalName).addClass('modal--visible');
        $('body').addClass('overlay__modal');
        showOverlay();
    });

    $(document).on('click', '.modal__close', function () {
        hideModal();
    })
}

function showOverlay() {
    $('body').addClass('overlay_active');
}

function hideOverlay() {
    $('body').removeClass('overlay_active');
}

function hideModal() {
    $('.modal').removeClass('modal--visible');
    $('body').removeClass('overlay__modal');
    hideOverlay();
}

function menuFixedInit() {
    var headerMenu = $('.header__contacts');
    $(window).scroll(function () {
        //header scroll menu
        var scroll = $(window).scrollTop();
        if (scroll >= 58) {
            headerMenu.addClass('active');
        } else {
            headerMenu.removeClass('active');
        }
        // edn header scroll menu


    });
}

function scrollNavigationInit() {
    $(document).on('click', '.navigation__link', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        if ($('body').hasClass('overlay_active') && $('.menu__wrap').hasClass('visible')) {
            $('.menu__close').click();
        }
    });
}

$(function () {
    mobileMenuInit();
    carouselInit();
    menuFixedInit();
    positionTabNav();
    accordionInit();
    scrollNavigationInit();
    formSubmitInit();
    overlayClickInit();
    showModalInit();
    phoneMaskAndValidationInit();
    $(".tabs").lightTabs();
    sliderInit();

});
