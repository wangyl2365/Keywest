 $(function(){
	// swiper
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        centeredSlides: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,

        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAnimate(swiper); 
    },
        onSlideChangeEnd: function(swiper){ 
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        } 
    });

    $(".swiper-container").mouseenter(function () {//滑过悬停
        swiper.stopAutoplay();//mySwiper 为上面你swiper实例化的名称
    }).mouseleave(function(){//离开开启
        swiper.startAutoplay();
    });

}); 

