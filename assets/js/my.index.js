
$(document).ready(function(){
    
    // var swipers = new Swiper('.swiper-container:not([stype="master"])', {
    //     direction:"horizontal",
    //     speed: 1000,
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     slidesPerGroup: 3,
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     observer: true,
    //     observeParents: true,
    //     pagination: {
    //         el: '.swiper-pagination-v',
    //         clickable: true,
    //     },
    //     // watchSlidesProgress: true,
    //     // watchSlidesVisibility: true,
    // });

    var swiper2 = new Swiper('.swiper-container[stype="t1"]', {
        direction:"horizontal",
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 3,
        navigation: {
            nextEl: '.swiper-button-next[stype="t1"]',
            prevEl: '.swiper-button-prev[stype="t1"]',
        },
        observer: true,
        observeParents: true
    });

    // $('.team_menu_list li a').click(function(){
    //     var inx=$(this).attr('inx');
    //     console.log(swipers);
    //     alert(">>" + swipers.activeIndex); // always 0
    //     swipers.slideTo(inx, 300, true);
    // });

    $('.overlay2 .team_menu_list li a').click(function(){
        var inx = $(this).attr('inx');
        swiper2.slideTo(2 , 0);
        console.log(swiper2)
    });

    var swiper3 = new Swiper('.swiper-container[stype="t2"]', {
        direction:"horizontal",
        speed: 1000,
        slidesPerView: 1,
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
        var inx = $(this).attr('inx');
        swiper3.slideTo(2 , 0);
        console.log(swiper3)
    }); 
});