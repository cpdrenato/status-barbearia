$(document).ready(function () {

    $.ajax({
        url: $(".urlbanner").val(),
        dataType: 'json',
        type: 'POST',
        data: {
            id_banner_config: $('.id_banner_config').val(),
        },
        success: function (retorno, textStatus, XMLHttpRequest)
        {

            $('.slider').nivoSlider({
                effect: retorno.effect, // Specify sets like: 'fold,fade,sliceDown' 
                animSpeed: parseInt(retorno.animspeed), // Slide transition speed */
                pauseTime: parseInt(retorno.pausetime), // How long each slide will show 
                directionNav: $.parseJSON(retorno.directionnav), // Next & Prev navigation 
                controlNav: $.parseJSON(retorno.controlnav), // 1,2,3... navigation 
                controlNavThumbs: $.parseJSON(retorno.controlnavthumbs), // Use thumbnails for Control Nav 
                pauseOnHover: $.parseJSON(retorno.pauseonhover) // Stop animation while hovering 
            });

            $('.banner').css('display', 'block');


            var ismobile = false;
            if (navigator.userAgent.match(/Android/i) ||
                    navigator.userAgent.match(/webOS/i) ||
                    navigator.userAgent.match(/iPhone/i) ||
                    navigator.userAgent.match(/iPad/i) ||
                    navigator.userAgent.match(/iPod/i) ||
                    navigator.userAgent.match(/BlackBerry/) ||
                    navigator.userAgent.match(/Mobi/) ||
                    navigator.userAgent.match(/Windows Phone/i) ||
                    navigator.userAgent.match(/ZuneWP7/i)
                    ) {

                $('.imgmobile').css('display', 'block');
            } else {
                $('.videoplay').css('display', 'block');
            }
            var width = $(window).width();
            //  if (width <= 767) {

            $('.banner').slick({
                centerPadding: '0px',
                adaptiveHeight: false,
                responsive: [
                    {
                        breakpoint: 580,
                        settings: {
                            centerMode: true,
                            centerPadding: '0px',
                            slidesToShow: 1,
                            variableWidth: false,
                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            centerMode: true,
                            centerPadding: '0px',
                            slidesToShow: 2,
                            variableWidth: false,
                        }
                    }
                ],
                //Options
                vertical: $.parseJSON(retorno.vertical),
                centerMode: $.parseJSON(retorno.centermode),
                easing: retorno.effect,
                fade: $.parseJSON(retorno.fade),
                autoplay: $.parseJSON(retorno.autoplay),
                autoplaySpeed: parseInt(retorno.pausetime),
                speed: parseInt(retorno.animspeed),
                arrows: $.parseJSON(retorno.directionnav),
                dots: $.parseJSON(retorno.controlnav),
                infinite: $.parseJSON(retorno.infinite),
                pauseOnFocus: $.parseJSON(retorno.pausetime),
                pauseOnDotsHover: $.parseJSON(retorno.pausetime),
                rows: $.parseJSON(retorno.rows),
                slidesToShow: $.parseJSON(retorno.slidestoshow)
            });
        


        }
    });
    function eventFire(el, etype) {
        if (el.fireEvent) {
            el.fireEvent('on' + etype);
        } else {
            var evObj = document.createEvent('Events');
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
        }
    }

});