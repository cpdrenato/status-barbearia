
$(document).ready(function () {

    $('#banner').css('display', 'block');
    $(window).resize(function () {

        var width = $(window).width();
        if (width <= 992) {

            $('#banner').slick({
                centerMode: true,
                centerPadding: '0px',
                slidesToScroll: 3,
                slidesToShow: 3,
                dots: false,
                arrows: false,
                autoplay: false,
                infinite: true,
                variableWidth: true,
                speed: 1000,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '0px',
                            slidesToShow: 1,
                            variableWidth: false,
                        }
                    }
                ]
            });
        } else if (width <= 1200) {
            $('#banner').slick({
                centerMode: true,
                centerPadding: '0px',
                slidesToScroll: 3,
                slidesToShow: 3,
                adaptiveHeight: true,
                variableWidth: false,
                dots: false,
                arrows: false
            });
            $('.slick-slider .item .bgs .btn').css('font-size', '12px');
        } else {
            $('#banner').slick({
                centerMode: true,
                centerPadding: '0px',
                slidesToScroll: 3,
                slidesToShow: 3,
                adaptiveHeight: true,
                variableWidth: false,
                dots: false,
                arrows: false
            });
        }

    }).resize();
    /*
     $('#banner').slick({
     centerMode: true,
     centerPadding: '0px',
     slidesToScroll: 3,
     slidesToShow: 3,
     dots: false,
     arrows: false,
     autoplay: false,
     infinite: true,
     variableWidth: true,
     speed: 1000,
     responsive: [
     {
     breakpoint: 767,
     settings: {
     arrows: false,
     centerMode: true,
     centerPadding: '0px',
     slidesToShow: 1,
     variableWidth: false,
     }
     }
     ]
     });*/
});
