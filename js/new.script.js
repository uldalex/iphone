/*Сдайдеры*/
        var maxSlides;
        var minSlides;
        width = $(window).width();
        if (width < 430) {
            maxSlides = 1;
            minSlides = 1;
        } else if (width < 768) {
            maxSlides = 2;
            minSlides = 2;
        } else if (width < 900) {
            maxSlides = 3;
            minSlides = 3;
        } else {
            maxSlides = 4;
            minSlides = 4;
        }
        $('.news_line_box').bxSlider({
            mode: 'horizontal',
            minSlides: minSlides,
            maxSlides: maxSlides,
            moveSlides: 1,
            auto: true,
            pager: false,
            controls: false,
            slideWidth: 900
        });
		

var slider = $('.scrolling_news_ul').bxSlider({  
mode: 'vertical',
minSlides: 6,
slideMargin: 0,
moveSlides: 1,
auto: false,
controls:true,
 pager:false,
infinScroll:true,
 infiniteLoop : true,
  });
  var intervalID =50;
$('.scrolling_news_ul').on('mousewheel', (function(event, delta, deltaX, deltaY) {
    var intervalID =50;
    clearTimeout(intervalID);
if (delta > 0 ) {
  if(slider.getCurrentSlide() > 0){ 
  event.stopPropagation();
  event.preventDefault();
  slider.goToPrevSlide();
  }  
}
if (deltaY < 0 ){
    if(slider.getCurrentSlide() < slider.getSlideCount()-1){
    event.stopPropagation();
    event.preventDefault();
    slider.goToNextSlide();
 
 
  } 
}
}));
/*Фильтр*/
        $('[data-group]').click(function (e) {
            e.preventDefault()
            $('[data-group]').removeClass('active');
            $(this).addClass('active');
            $('[data-group-target]').removeClass('active');
            var tab_group = $(this).data('group');
            $('[data-group-target]').each(function () {
                if ($(this).data('group-target').includes(tab_group)) {
                    $(this).addClass('active');
                }
            })

        })
        $('[data-group]').eq(0).click();
 