$(function() {
    $('.hamberger').on('click', function() {
        if ($('header').hasClass('open')) {
            $('header').removeClass('open');
        } else {
            $('header').addClass('open');
        }
    });

    $('.mask').on('click', function() {
        $('header').removeClass('open');
    });

    $('.navi a').on('click', function() {
        $('header').removeClass('open');
    });

    /* -------------- スムーズスクロール --------------- */
    $('a[href^="#"]').click(function() {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position}, 600, "swing");
        return false;
    })

    /*----------------- slick -----------------*/

    $('.slick-area').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10,
        speed: 10000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            }
        ]
    });

    /* -------------------- imgアニメーション ---------------- */

    $(window).scroll(function() {
        $('.fadein').each(function() {
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeight = $(window).height();

            if (scroll > target - windowHeight + 200) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });

});