$(document).ready(function(){
    var swiper = new Swiper('.swiper-container[stype="master"]', {
        direction: 'vertical',
        slidesPerView: 1,
        slidesPerView: 'auto',
        spaceBetween: 0,
        // hashNavigation: {
        //   watchState: true,
        // },
        // mousewheel: {
        //   sensitivity: 0,
        // },
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   draggable: false,
        // },
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        speed: 300,
        //loop: true,
        // navigation: {
        //   nextEl: '.swiper-button-next[stype="master"]',
        //   prevEl: '.swiper-button-prev[stype="master"]',
        // },
        on: {
          init: function () {
            $('.swiper-slide-active').addClass('transitioned')
          }
        }
      });
    //   var swiper = new Swiper('.swiper-container');
});