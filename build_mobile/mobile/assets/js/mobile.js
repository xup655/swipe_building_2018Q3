$(document).ready(function(){
    var swiper = new Swiper('.swiper-container.master', {
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination.master',
        clickable: true,
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
    })
    $('.click_menu').on('click', 'li', function(){
      var ind = $(this).index();
      $('.swiper-pagination.t1').find('.swiper-pagination-bullet').eq(ind).click();
      $('.listname').click();
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
});