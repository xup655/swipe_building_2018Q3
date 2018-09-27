
$(document).ready(function(){

    $('.demo').on('click', function(){
        $('.mySlides').hide();
        var ind = $(this).closest('.column').index();
        $(this).closest('.modal-content').find('.mySlides').eq(ind).show()
    });


    $('.cn1').on('click', function(){
        var current = $(this).closest('.swiper-slide');
        var ind = current.attr('inx');
        var target = current.closest('.overlay').find('.modal[inx="' + ind + '"]');
        var ta_img = target.find('.column').length;
        if( ta_img > 1 ) {
            $('.mySlides').hide();
            target.show().find('.mySlides').first().show();
        }
    });

    $('.sideArrow').on('click', 'li', function(){
        var current = $(this).closest('.modal');
        var ind = current.attr('inx');
        var max = current.closest('.overlay').find('.modal').length;
        if( $(this).hasClass('next') ) {
            current.hide();
            ind++
            if ( current.closest('.overlay').find('.modal[inx="' + ind + '"]').length == 0 ) {
                for(var i = 0; i <50 ; i++){
                    if ( current.closest('.overlay').find('.modal[inx="' + ind + '"]').length == 0 ) {
                        ind++
                    } else {
                        current.closest('.overlay').find('.modal[inx="' + ind + '"]').show().find('.mySlides').first().show();
                    }
                }
            }
            current.closest('.overlay').find('.modal[inx="' + ind + '"]').show().find('.mySlides').first().show();
            // if( ind > max ) {
            //     ind = 1
            // }
        } else if( $(this).hasClass('prev') ) {
            current.hide();
            ind--
            if ( current.closest('.overlay').find('.modal[inx="' + ind + '"]').length == 0 ) {
                for(var i = 50; i >0 ; i--){
                    if ( current.closest('.overlay').find('.modal[inx="' + ind + '"]').length == 0 ) {
                        ind--
                    } else {
                        current.closest('.overlay').find('.modal[inx="' + ind + '"]').show().find('.mySlides').first().show();
                    }
                }
            }
            current.closest('.overlay').find('.modal[inx="' + ind + '"]').show().find('.mySlides').first().show();
            // if( ind < 1 ) {
            //     ind = max
            // }
        }
        // $('.modal[inx="' + ind + '"]').show().find('.mySlides').first().show();
    });

    var swiper2 = new Swiper('.swiper-container[stype="t1"]', {
        direction:"horizontal",
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        navigation: {
            nextEl: '.swiper-button-next[stype="t1"]',
            prevEl: '.swiper-button-prev[stype="t1"]',
        },
        observer: true,
        observeParents: true
    });

    $('.overlay2 .team_menu_list li a').click(function(){
        var inx=$(this).attr('inx');
        swiper2.slideTo(inx, 300, function(){
        });
    });

    var swiper3 = new Swiper('.swiper-container[stype="t2"]', {
        direction:"horizontal",
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        navigation: {
            nextEl: '.swiper-button-next[stype="t2"]',
            prevEl: '.swiper-button-prev[stype="t2"]',
        },
        observer: true,
        observeParents: true
    });

    $('.overlay1 .team_menu_list li a').click(function(){
        var inx=$(this).attr('inx');
        swiper3.slideTo(inx, 300, function(){
        });
    });
    
    $('.trigger_home').on('click', function(){
        $('.swiper-pagination').first().find('.swiper-pagination-bullet').eq(0).click();
    });
    $('.trigger_about').on('click', function(){
        $('.swiper-pagination').first().find('.swiper-pagination-bullet').eq(1).click();
            $('.about-tit, .about-cont').css('opacity', 0)
            $('.about-tit').addClass('up_down')
            $('.about-cont').addClass('down_up')
    });
    $('.trigger_project').on('click', function(){
        $('.swiper-pagination').first().find('.swiper-pagination-bullet').eq(2).click();
            setTimeout(function() {
                $('.fadein-card').addClass('scrollin')
            }, 100);
    });
    $('.trigger_footer').on('click', function(){
        $('.swiper-pagination').first().find('.swiper-pagination-bullet').eq(3).click();
        swiper.activeIndex = 3
            setTimeout(function() {
                $('.fadein-card').addClass('scrollin')
            }, 100);
    });

    $('.btn_close').on('click', function(){
        $('.swiper-container.t1, .swiper-container.t2').find('.swiper-wrapper').css('transform', 'translate3d(0px, 0px, 0px)')
    })

    $('body').on('mousewheel', function(e){
        var window_h = $(window).height();
        if( $('.about-tit').offset().top > window_h && e.deltaY == -1 ) {
            $('.about-tit, .about-cont').css('opacity', 0)
            $('.about-tit').addClass('up_down')
            $('.about-cont').addClass('down_up')
        }
        if( $('.fadein-card').offset().top < window_h * 2 && e.deltaY == -1 ) {
            setTimeout(function() {
                $('.fadein-card').addClass('scrollin')
            }, 100);
        }
    })
    

    setInterval(function(){
        if( $('#project').hasClass('zz')) {
            swiper.activeIndex = 3
            $('#project').removeClass('swiper-slide-active zz').addClass('swiper-slide-prev transitioned');;
        }
    }, 1000);

    setInterval(function(){
        if( $('.overlay1').find('.cn1').first().is(':visible') || $('.overlay2').find('.cn1').first().is(':visible') ) {
            var cn_h1 = $('.overlay1 .swiper-slide:not(.overlaybanner)').find('.cn1').outerHeight();
            var cn_h2 = $('.overlay2 .swiper-slide:not(.overlaybanner)').find('.cn1').outerHeight();
            $('.overlay1').find('.cn1').first().css('height', cn_h1);
            $('.overlay2').find('.cn1').first().css('height', cn_h2);
        }
    }, 100)

    setTimeout(function() {
    }, 1500);

    $('.button').click(function(){
        
        var ind = $(this).find('a').attr('stype').split('t').slice(1)
        
        $('.overlay' + ind).show().css('opacity', 0);
        $('.overlay' + ind).hide().css('opacity', '');
        setTimeout(() => {
            $('.overlay' + ind).show();
        }, 10);
    })
});