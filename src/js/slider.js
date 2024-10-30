addEventListener('DOMContentLoaded', () => {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        spaceBetween: 20,
        centeredSlides: true,
        slidesPerView: 1.4,

        pagination: {
            el: '.swiper-pagination',
        }
    });
});