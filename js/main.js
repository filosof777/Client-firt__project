$('.customers__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
});

$('.detal__link').on('click', function(e) {
    e.preventDefault();

    $('.tab').removeClass('tab--active');
    $('.tab-content').removeClass('tab-content--active ');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tab-content--active ');
});

$('.navigation__link').on('click', function(e){
    $('.navigation__link').removeClass('navigation__link--active');
    $(this).addClass('navigation__link--active');

});