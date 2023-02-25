
$(document).ready(function () {
    'use strict';


    var $pline = $('.progressbar.line');
    var $pcircle = $('.progressbar.circle');
    $pline.each(function (i) {
        var line = new ProgressBar.Line(this, {
            strokeWidth: 6,
            trailWidth: 6,
            duration: 3000,
            easing: 'easeInOut',
            text: {
                style: {
                    color: 'inherit',
                    position: 'absolute',
                    right: '0',
                    top: '-30px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: function (state, line, attachment) {
                line.setText(Math.round(line.value() * 100) + ' %');
            }
        });
        var value = ($(this).attr('data-value') / 100);
        $pline.waypoint(function () {
            line.animate(value);
        }, {
            offset: "100%"
        })
    });
    $pcircle.each(function (i) {
        var circle = new ProgressBar.SemiCircle(this, {
            strokeWidth: 5,
            trailWidth: 5,
            duration: 2000,
            easing: 'easeInOut',
            step: function (state, circle, attachment) {
                circle.setText(Math.round(circle.value() * 100));
            }
        });
        var value = ($(this).attr('data-value') / 100);
        $pcircle.waypoint(function () {
            circle.animate(value);
        }, {
            offset: "100%"
        })
    });

    $('.counter .value').counterUp({
        delay: 50,
        time: 1000
    });

    $(".countdown").countdown();


});
