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
} else if (width <= 738) {
    maxSlides = 2;
    minSlides = 2;
    SlWidth = 270;
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
/*Плитка */
$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});
var j$ = jQuery,
    $mContainer = j$(".grid-filter"),
    $filterButton = j$(".button_filter"),
    $params = {
    itemSelector: ".active",
    filtersGroupSelector:".filter"
    
    };
$('.grid-filter').masonry({
    itemSelector: '.active',
    columnWidth: 2,
    percentPosition: true
});
var masonryOptions = {
    itemSelector: '.active',
    columnWidth: 2,
  };
var $grid = $('.grid-filter').masonry( masonryOptions );

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
$grid.masonry('reloadItems')
/*Меню*/
$(".close_naw").on('click', function () {
    $(".collapse").removeClass("show");

});

// Валидация  
var errorValidate = $('.registerForm, .registerFormReg, .registerFormRes ');
var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
var mail = $('.email');
var error_name = $('.error_name');
$(mail).on( 'focus', function() {
$(this).addClass('error');
$('.form__error__mail, .form__error__close').css('display', 'none');

});
$(error_name).on( 'focus', function() {
$(this).addClass('error');
$('.form__error__error').css('display', 'none');
});
error_name.blur(function(){
if(error_name.val() != ''){
$('.form__error__valid').css('display', 'block');    
$('.form__error__error').css('display', 'none');
$('.error__sumbit').attr('disabled', false);
error_name.removeClass('error').addClass('confirm');

}	
else{
$('.form__error__error').text('Это обязательное поле');
 $('.form__error__error').css('display', 'block');
error_name.addClass('error');
$('.error__sumbit').attr('disabled', true);	
}
});
$('#error__sumbit').on('click', function(){
$('#errorMessage').css('display', 'none');
$('#thenks').css('display', 'block');		
});
mail.blur(function(){
if(mail.val() != ''){
if(mail.val().search(pattern) == 0){
 $('.login__sumbit').attr('disabled', false);
mail.removeClass('error').addClass('confirm');
$('.form__error__valid').css('display', 'block');
}else{
$('.form__error__mail').text('Невалидный е-mail');
 $('.form__error__mail, .form__error__close').css('display', 'block');
$('.login__sumbit').attr('disabled', true);
mail.addClass('confirm');
}
}else{
$('.form__error__mail').text('Это обязательное поле');
 $('.form__error__mail, .form__error__close').css('display', 'block');
mail.addClass('error');
$('.login__sumbit').attr('disabled', true);
}
});
/*Табы */
$('#LoginLink a[href="#login"]').tab('show');
$('#RegisterLink a[href="#Register"]').tab('show');
$('#restoreLink a[href="#restore"]').tab('show')


  
