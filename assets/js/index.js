
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
        var _iid = $(this).closest('.overlay').find('.swiper-container').attr('stype')
        // var inx=$(this).attr('inx');
        click_func($(this), swiper2, _iid);
        // swiper2.slideTo(click_menu_inx, 300, function(){
        // });
        // alert('室內 stype=' + _iid)
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
        // var inx=$(this).attr('inx');
        var _iid = $(this).closest('.overlay').find('.swiper-container').attr('stype')
        click_func($(this), swiper3, _iid);
        // alert('營建 stype=' + _iid)
        // swiper3.slideTo(click_menu_inx, 300, function(){
        // });
    });
    // alert( '第 ' + 8 % 3 + '個' )
    // alert('(369偏左 / 147置中 / 258靠右)')
    // %0 偏左 / %1 置中 / %2 靠右
    function click_func(element, _tagg ,_iid) {
        click_menu_inx = element.attr('inx');
        var center_inx = click_menu_inx % 3;
        var _w = $(window).width()
        var _wrap = $('.' + _iid + '.swiper-container .swiper-wrapper');
        var move_block = $('.' + _iid + '.swiper-container .swiper-slide').width() + 30 // 移動距離
        
        _tagg.slideTo(click_menu_inx, 300, function(){
            alert('11')
        });
        // 捲動到該頁-置中
        if( center_inx == 0 ) {
            setTimeout(function() {
                var now_left = _wrap.attr('style').split('translate3d(').slice(1).toString().split('px')[0]  //目前捲動x
                var addnum = Number(now_left) + Number(move_block)
                console.log( "移動" + _iid + "; 目前偏左:"+ now_left + "; 需移動" + addnum )
                // _wrap.hide()
                _wrap.css('transform', 'translate3d(' + (addnum) + 'px, 0px, 0px)')
                // addnum = Number(now_left)
            }, 2000);

            // click_menu_inx = 2.5
        } else if ( center_inx == 1 ) {
            setTimeout(function() {
                var now_left = _wrap.attr('style').split('translate3d(').slice(1).toString().split('px')[0]  //目前捲動x
                var addnum = Number(now_left) + Number(move_block)

                console.log( "移動" + _iid + "; 目前靠右:" + now_left + "; 不需移動" )
                // _wrap.css('transform', 'translate3d(-' + (addnum) + 'px, 0px, 0px)')
                if( $('.' + _iid + '.swiper-container').find('.swiper-slide[inx="1"]').is(':visible') ) {
                    alert('see')
                }
            }, 2000);

            // click_menu_inx = 2.5
        } else if ( center_inx == 2 ) {
            setTimeout(function() {
                var now_left = _wrap.attr('style').split('translate3d(').slice(1).toString().split('px')[0]  //目前捲動x
                var addnum = Number(now_left) + Number(move_block)

                console.log( "移動" + _iid + "; 目前靠右:" + now_left + "; 需移動" + (addnum) )
                // _wrap.hide()
                _wrap.css('transform', 'translate3d(-' + (addnum) + 'px, 0px, 0px)')
                // addnum = Number(now_left)
            }, 2000);

            // click_menu_inx = 2.5
        }
    }

    $('.trigger_home').on('click', function(){
        $('.swiper-pagination').first().find('.swiper-pagination-bullet').eq(0).click();
    });
    $('.trigger_about').on('click', function(){
        $('.swiper-pagination').first().find('.swiper-pagination-bullet').eq(1).click();
            $('.about-tit, .about-cont').css('opacity', 0)
            $('.about-tit').addClass('up_down')
            $('.about-cont').addClass('down_up')
            setTimeout(function() {
                $('.about-tit, .about-cont').addClass('active')
            }, 600);
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
            setTimeout(function() {
                $('.about-tit, .about-cont').addClass('active')
            }, 600);
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
        setTimeout(function() {
            $('.overlay' + ind).show();
        }, 10);
    })
});