$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        nav: true,
        navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>'],
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450,
        loop : true
    });
});