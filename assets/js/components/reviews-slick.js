export function initReviewsSlick() {
    const rightSlider = $('.reviews-slick__slick--right')
    const leftSlider = $('.reviews-slick__slick--left')
    rightSlider.slick({
        infinite: true,
        autoplay: true,
        variableWidth: true,
        autoplaySpeed: 0,
        speed: 20000,
        cssEase: 'linear',
        arrows: false,

    })
    leftSlider.slick({
        rtl: true,
        infinite: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 20000,
        cssEase: 'linear',
        arrows: false,

    })

    rightSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        jQuery(function ($) {
            $('.lazy').Lazy({ bind: 'event' })
        })
    })
    leftSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        jQuery(function ($) {
            $('.lazy').Lazy({ bind: 'event' })
        })
    })
}