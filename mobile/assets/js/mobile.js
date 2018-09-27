$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      hashNavigation: {
        watchState: true,
      },
      mousewheel: true,
    });

    // footer
    // swiper.on('slideNextTransitionStart', function () {
    // })

    // swiper.on('slideChangeTransitionStart', function () {
    // })

    // swiper.on('slidePrevTransitionStart', function () {
    // })

    // swiper.on('transitionEnd', function () {
    // })

    // 下一頁
    $('.js_link').on('click', function(){
      var ind = $(this).index() + 1;
      $('.swiper-pagination').find('.swiper-pagination-bullet').eq(ind).click();
    })
    $('.js_pageDown').click(function(){
      $('.js_link').eq(0).click();
    })

    $('.js_open').on('click', function(){
      var id = $(this).data('pid')
      $('.mask[data-pid="'+ id +'"]').removeClass('hide');
    })

    $('.close-btn').click(function(){
      $(this).closest('.mask').addClass('hide');
      // 歸0開始
    })

    // data
    for ( var i=0; i<30; i++) {
      $('<li>2017 閑閑</li>').appendTo($('.nav ul'));
    }

    $('.listname').on('click', function(){
      var current = $(this).closest('.nav')
      if( current.find('.listup').is(':visible') ) {
        // swiper.mousewheel.disable();
        current.addClass('full');
        current.find('ul').show();
        current.find('.listup').removeClass('listup').addClass('listdown')
      } else {
        // swiper.mousewheel.enable();
        current.removeClass('full');
        current.find('ul').hide();
        current.find('.listdown').removeClass('listdown').addClass('listup')
      }
    })

    // 輪播
    var mySwiper = new Swiper('.swiper-container.t1', {
        speed: 400,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next.t1',
          prevEl: '.swiper-button-prev.t1',
        },
    });

    // var _width = $('.photo_wrap li').width() * $('.photo_wrap li').length;
    // $('.photo_wrap').css('width', _width);

    // $('.listright').on('click', function(){
    //   $(this).closest('.mask').find('.photo_wrap').css('left', '-' + _width);
    // })
});

// $(window).resize(function(){
//   _width = $('.photo_wrap li').width() * $('.photo_wrap li').length;
// })