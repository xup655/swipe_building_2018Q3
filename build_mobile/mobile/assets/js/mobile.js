$(document).ready(function(){
    var swiper = new Swiper('.swiper-container.master', {
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination.master',
        clickable: true,
      },
      hashNavigation: {
        watchState: true,
      },
      mousewheel: true,
    });

    $('.js_link').on('click', function(){
      var ind = $(this).index() + 1;
      $('.swiper-pagination').find('.swiper-pagination-bullet').eq(ind).click();
    })
    $('.js_pageDown').click(function(){
      $('.js_link').eq(0).click();
    })

    $('.js_open').on('click', function(){
      var id = $(this).data('pid')
      $('.mask[data-pid="'+ id +'"]').removeClass('hidden');
    })

    $('.close-btn').click(function(){
      $(this).closest('.mask').addClass('hidden');
      $(this).closest('.mask').find('.swiper-pagination-bullet').eq(0).click();
    })

    $('.click_menu').on('click', 'li', function(){
      var ind = $(this).index();
      var pid = $(this).closest('.mask').data('pid');
      $('.swiper-pagination.t' + pid).find('.swiper-pagination-bullet').eq(ind).click();
      $(this).parent().prev('.listname').click();
    })

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
    })

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
      loop: true,
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
      loop: true,
    });

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
            w: w,
            h: h
        };
        items.push(item);
      }


      var options = {
          index: 0
      };

      var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
    })

});