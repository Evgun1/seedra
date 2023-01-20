; (function () {
    document.addEventListener('click', function (event) {
        const btn = event.target.closest('.home-products__favorite')
        if (btn === null) return
        btn.classList.toggle('home-products__favorite--active')
    })
}())

// TODO: нахіба тобі 2 пагінації?
const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    

});