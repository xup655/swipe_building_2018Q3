$(document).ready(function(){
    // var menu = ['Slide 1', 'Slide 2', 'Slide 3', 'footer']
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // type: 'custom',
        // renderBullet: function (index, className) {
        //   return '<li class="' + className + '">' + (menu[index]) + '</li>';
        // }
      },
      mousewheel: true,  // swiper.mousewheel.enable();
      // on: {
      //   init: function () {
      //     $('.swiper-slide-active').addClass('aas')
      //   }
      // },
    });

    // 偵錯用 footer
    swiper.on('slideNextTransitionStart', function () {
      // $('.transitioned').addClass('animate-up zz')
      // $('.swiper-slide').removeClass('transitioned');
// alert()
    //   $('.swiper-slide-active').addClass('zz')
    //   if( $('#project').hasClass('zz')) {
    //     swiper.activeIndex = 3
    //     $('#project').removeClass('swiper-slide-active').addClass('swiper-slide-prev');;
    //   }
    })

    // 偵錯用 footer
    swiper.on('slideChangeTransitionStart', function () {
      // alert('swiper.activeIndex:' + swiper.activeIndex)
    })

    swiper.on('slidePrevTransitionStart', function () {
// alert()
    })

    swiper.on('transitionEnd', function () {
// alert()
    })

    setInterval(function(){
    //   if( $('#project').hasClass('swiper-slide-prev')) {
    //       swiper.activeIndex = 3
    //       $('#project').removeClass('swiper-slide-active swiper-slide-prev').addClass('swiper-slide-prev transitioned');;
    //   }
    }, 1000);

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
      // if( $(this).hasClass('construction') ) {}
    })

    $('.close-btn').click(function(){
      $(this).closest('.mask').addClass('hide');
      // 顯示歸0 重新開始
    })

    // 資料
    
    for ( var i=0; i<30; i++) {
      $('<li>2017 閑閑</li>').appendTo($('.nav ul'));
    }

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
});