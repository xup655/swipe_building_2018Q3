$(document).ready(function(){
      var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween: 0,
        mousewheel: true,  // swiper.mousewheel.enable();
        // on: {
        //   init: function () {
        //     $('.swiper-slide-active').addClass('aas')
        //   }
        // },
      });

      swiper.on('slideNextTransitionStart', function () {
        $('.swiper-slide-active').addClass('zz')
        if( $('#project').hasClass('zz')) {
          swiper.activeIndex = 3
          $('#project').removeClass('swiper-slide-active').addClass('swiper-slide-prev');;
        }
      })
      // setInterval(function(){
      //   if( $('#project').hasClass('swiper-slide-prev')) {
      //       swiper.activeIndex = 3
      //       $('#project').removeClass('swiper-slide-active swiper-slide-prev').addClass('swiper-slide-prev transitioned');;
      //   }
      // }, 1000);
      
});