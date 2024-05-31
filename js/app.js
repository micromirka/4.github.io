$(function() {

    const worksSlider = $('[data-slider="slick"]');

    /* Filter */
    let filter = $('[data-filter]');

    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if(cat == 'all') {
            $('[data-cat]').removeClass('hide');
        } else {
            $('[data-cat]').each(function() {
                let workCat = $(this).data('cat');

                console.log(workCat);

                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });


    /* Modal */
    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');

    modalCall.on('click', function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalID = $this.data('modal');

        $(modalID).addClass('show');
        $('body').addClass('no-scroll');

        setTimeout(function() {
            $(modalID).find(".modal__dialog").css({
                transform: 'scale(1)'
            });
        }, 100);

        worksSlider.slick('setPosition');
    });

    modalClose.on('click', function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: 'scale(0)'
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            $('body').removeClass('no-scroll');
        }, 100);
    });

    $(".modal").on('click', function(event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: 'scale(0)'
        });

        setTimeout(function() {
            $this.removeClass('show');
            $('body').removeClass('no-scroll');
        }, 100);
    });

    $(".modal__dialog").on('click', function(event) {
        event.stopPropagation();
    });


    /* Slider: https://kenwheeler.github.io/slick/ */
    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    $('.slickPrev').on('click', function(event) {
        event.preventDefault();

        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

        currentSlider.slick('slickPrev');
    });

    $('.slickNext').on('click', function(event) {
        event.preventDefault();

        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

        currentSlider.slick('slickNext');
    });

    /* Mobile nav */

    const navToggle = $('#navToggle');
    const nav = $('#nav');

    navToggle.on('click', function(event) {
        event.preventDefault();

        nav.toggleClass('show');
    })

    /* Tab */
    let tab = $('[data-tab]');

    tab.on('click', function(event) {
        event.preventDefault();

        let tabCat = $(this).data('tab');

        $('[data-tab]').each(function() {
            let tabCategory = $(this).data('tab');

            if(tabCategory != tabCat) {
                $(this).removeClass('tab--active');
            } else {
                $(this).addClass('tab--active');
            }
        });

        $('[data-tabсat]').each(function() {
            let tabCategory = $(this).data('tabсat');

            if(tabCategory != tabCat) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
        });

    });

    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data("collapse");

        $this.toggleClass("active");
//        $(blockId).slideToggle();
    });

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate( {
            scrollTop: blockOffset
        }, 500);

        $("#nav_toggle").removeClass("active");
        $("#nav").removeClass("active");
    });

});
