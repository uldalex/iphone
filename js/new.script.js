/*Сдайдеры*/
var maxSlides;
var minSlides;
width = $(window).width();
if (width < 430) {
    maxSlides = 1;
    minSlides = 1;
} else if (width < 769) {
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
width = $(window).width();
var maxSlides;
var minSlides;
var SlWidth;
if (width < 320) {
    maxSlides = 1;
    minSlides = 1;
    SlWidth = 320;
} else if (width <= 430) {
    maxSlides = 1;
    minSlides = 1;
    SlWidth = 430;
} else if (width <= 575) {
    maxSlides = 2;
    minSlides = 1;
    SlWidth = 275;
} else if (width <= 769) {
    maxSlides = 3;
    minSlides = 2;
    SlWidth = 237;
} else if (width <= 900) {
    maxSlides = 6;
    minSlides = 6;
    SlWidth = 230;
} else {
    maxSlides = 6;
    minSlides = 6;
    SlWidth = 250;
}

$('.top_store__item_list').bxSlider({
    mode: 'horizontal',
    minSlides: minSlides,
    maxSlides: maxSlides,
    moveSlides: 6,
    auto: false,
    pager: false,
    controls: true,
    slideWidth: SlWidth,
});




$('.scrollbar-inner').scrollbar();


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
/*Меню*/
$(".close_naw").on('click', function () {
    $(".collapse").removeClass("show");

});
/*Плитка */
$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});
