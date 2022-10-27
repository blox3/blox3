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
new WOW().init();
/* $(".why-blox3 .box button").click(function(){
    $(".why-blox3 .box .collapse").removeClass("show");
    $(".why-blox3 .box").removeClass("active");
    
    
    if($(this).parent().hasClass("active")==false){
        $(this).parent().addClass("active");
        $(this).parent().find(".collapse").addClass("show");
        
    }
    else{
        $(this).parent().removeClass("active");
        $(this).parent().find(".collapse").removeClass("show");
    }
}); */
$('a[href^="#"]').click(function (e) {
    const targetEl = $(this).attr('href');
    if (targetEl != '#' && targetEl.startsWith('#')) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ($(targetEl).offset().top - 78)
        }, 500);
    }
});
function clickTestimonials() {

};