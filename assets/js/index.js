
$(document).ready(function(){

    $('.cn1').on('click', function(){
        var current = $(this).closest('.swiper-slide');
        var ind = current.attr('inx');
        var target = current.closest('.overlay').find('.modal[inx="' + ind + '"]');
        var ta_img = target.find('.column').length;
        if( ta_img > 1 ) {
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
                for(var ind = 0; ; i++){
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
                for(var ind = 0; ; i--){
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
});