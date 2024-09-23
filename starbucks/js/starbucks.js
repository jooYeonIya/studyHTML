window.addEventListener('scroll', function() {
    let favTexts = document.querySelectorAll('.fav-text');
    let value = this.scrollY;
    if (value > 50) {
        favTexts.forEach((item) => item.style.animation = "slideBackward 2s forwards")
    } else {
        favTexts.forEach((item) => item.style.animation = "slideForward 2s")
    }
})