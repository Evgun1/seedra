;(function () {
    document.addEventListener('click', function (event) {
        const btn = event.target.closest('.home-products__favorite')
        if (btn === null) return
        btn.classList.toggle('home-products__favorite--active')
    })
}())