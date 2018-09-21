
$(document).ready(function(){
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