var $burger = $('.burger');
var $panel = $('.panel');

$burger.on ('click', function () {
    $panel.toggleClass('js-panel-expand');
});