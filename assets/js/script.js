window.setTimeout(() => {
    AOS.init();
}, 500)
window.setTimeout(() => {
    $('body').removeClass('overflow-hidden');
}, 1000)

$(function () {
    setFixedHeader();

    window.addEventListener("scroll", (event) => {
        setFixedHeader()
    });

    function setFixedHeader() {
        if (window.scrollY > 146 && $(window).width() > 767) {
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky');
        }
    }
    
    window.setTimeout(() => {
        $('#CLLoading').fadeOut();
    }, 400)
})
$('#to_top').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 500);
})