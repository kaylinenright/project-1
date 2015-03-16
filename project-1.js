var $burger = $('.burger');
var $panel = $('.panel');
 var $btnShowHide = $(".btn-show-hide");
var $portfolio = $(".portfolio");


$burger.on ('click', function () {
    $panel.toggleClass('js-panel-expand');
});


$btnShowHide.on("click", function () {
    $portfolio.toggleClass("js-box-show-hide");
});
