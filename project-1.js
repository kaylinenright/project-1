var $burger = $('.burger');
var $panel = $('.panel');
 var $btnShowHide = $(".btn-show-hide");
var $btn3 = $(".btn-3");
var $btn2 = $(".btn-2");
var $portfolio = $(".portfolio");
var $portfolio2 = $(".portfolio-2");
var $portfolio3 = $(".portfolio-3");
var $dropBucket = $(".drop-bucket");


$burger.on ('click', function () {
    $panel.toggleClass('js-panel-expand');
});


$btnShowHide.on("click", function () {
    $portfolio.toggleClass("js-box-show-hide");
});

$btn2.on("click", function () {
    $portfolio2.toggleClass("js-box-show-hide");
});

$btn3.on("click", function () {
    $portfolio3.toggleClass("js-box-show-hide");
});

$dropBucket.waypoint(function (direction) {
    $dropBucket.toggleClass("js-active");  
}, { offset: "90%", context: '.wrapper' } ) ;
