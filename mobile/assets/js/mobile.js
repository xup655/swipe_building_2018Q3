$(document).ready(function(){
    var swiper = new Swiper('.swiper-container.master', {
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination.master',
        clickable: true,
      },
      // hashNavigation: {
      //   watchState: true,
      // },
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
      $('.swiper-pagination.master').find('.swiper-pagination-bullet').eq(ind).click();
    })
    $('.js_pageDown').click(function(){
      $('.js_link').eq(0).click();
    })
    $('.js_pageHome').click(function(){
      $('.swiper-pagination.master').find('.swiper-pagination-bullet').eq(0).click();
    })

    $('.js_open').on('click', function(){
      var id = $(this).data('pid')
      $('.mask[data-pid="'+ id +'"]').removeClass('hidden');
    })

    $('.close-btn').click(function(){
      $(this).closest('.mask').addClass('hidden');
      // 歸0開始
      $(this).closest('.mask').find('.swiper-pagination-bullet').eq(0).click();
    })

    // 列表click
    $('.click_menu').on('click', 'li', function(){
      var ind = $(this).index();
      var pid = $(this).closest('.mask').data('pid');
      $('.swiper-pagination.t' + pid).find('.swiper-pagination-bullet').eq(ind).click();
      $(this).parent().prev('.listname').click();
    })

    // 選單arrow
    $('.listname').on('click', function(){
      var current = $(this).closest('.nav')
      if( current.find('.listup').is(':visible') ) {
        swiper.mousewheel.disable();
        current.addClass('full');
        current.find('ul').show();
        current.find('.listup').removeClass('listup').addClass('listdown')
      } else {
        swiper.mousewheel.enable();
        current.removeClass('full');
        current.find('ul').hide();
        current.find('.listdown').removeClass('listdown').addClass('listup')
      }

      // 選單data load from content
      var _pid = $(this).closest('.mask').data('pid');
      if( $('.mask[data-pid="' + _pid + '"]').find('.click_menu li').length < 1 ) {
        var _num = $('.swiper-container.t' + _pid + ' .swiper-slide').length
        var menu_txt = [];
        for ( var i=0; i < _num; i++) {
          var txt = '<li>' + $('.swiper-container.t' + _pid + ' h4 b').eq(i).text().split(' ')[0] + ' ' + $('.swiper-container.t' + _pid + ' h2').eq(i).text() + '</li>'
          menu_txt.push(txt);
        }
        $('.mask[data-pid="' + _pid + '"]').find('.click_menu').append(menu_txt)
      }
    })

    // 輪播
    var mySwiper = new Swiper('.swiper-container.t1', {
      speed: 100,
      spaceBetween: 0,
      navigation: {
        nextEl: '.listright.t1',
        prevEl: '.listleft.t1',
      },
      pagination: {
        el: '.swiper-pagination.t1',
        clickable: true,
      },
      // loop: true,
    });
    var mySwiper = new Swiper('.swiper-container.t2', {
      speed: 100,
      spaceBetween: 0,
      navigation: {
        nextEl: '.listright.t2',
        prevEl: '.listleft.t2',
      },
      pagination: {
        el: '.swiper-pagination.t2',
        clickable: true,
      },
      // loop: true,
    });

    // 圖片click
    $('.photo').on('click', function(){
      var pswpElement = document.querySelectorAll('.pswp')[0];
      var items = [];

      var groupImg = $(this).find('.groupImg img');
      if( groupImg.length > 1 ) {
        groupImg.attr({'width': 800, 'height': 533})
      } else {
        groupImg.attr({'width': 1346, 'height': 1417})
      }

      for (var i = 0; i < groupImg.length; i++) {
        var imgs = $(this).find('.groupImg img').eq(i);
        var src = imgs.attr('src');
        var w = imgs.attr('width');
        var h = imgs.attr('height');

        var item = {
            src: src,
            // w: parseInt(size[0], 10),
            // h: parseInt(size[1], 10),
            // w: 800,
            // h: 533
            w: w,
            h: h
        };
        items.push(item);
      }


      var options = {
          index: 0
      };

      // Initializes and opens PhotoSwipe
      var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
    })

    // var _width = $('.photo_wrap li').width() * $('.photo_wrap li').length;
    // $('.photo_wrap').css('width', _width);

    // $('.listright').on('click', function(){
    //   $(this).closest('.mask').find('.photo_wrap').css('left', '-' + _width);
    // })

});

// $(window).resize(function(){
//   _width = $('.photo_wrap li').width() * $('.photo_wrap li').length;
// })