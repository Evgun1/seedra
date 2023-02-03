; (function () {
    document.addEventListener('click', function (event) {
        const btn = event.target.closest('.home-products__favorite')
        if (btn === null) return
        btn.classList.toggle('home-products__favorite--active')
    })
}())

const testimonialsSliders = new Swiper('.home-testimonials__swiper', {
    slidesPerView: "auto",
    slideActiveClass: 'home-testimonials__slide--active',
    spaceBetween: 11,
    loop: true,
    breakpoints: {
        768: {
            spaceBetween: 30,
            centeredSlides: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                el: '.swiper-pagination',
            }
        }
    }
});

const productsSlider = new Swiper('.home-products__grid', {
    slidesPerView: "auto",
    spaceBetween: 11,
    breakpoints: {
        768: {
            spaceBetween: 0,
            enabled: false,
            init: false
        }
    }
})

const blogsSlider = new Swiper('.home-blogs__wrapper-slide', {
    slidesPerView: "auto",
    spaceBetween: 11,
    breakpoints: {
        768: {
            spaceBetween: 0,
            enabled: false,
            init: false
        }
    }
})