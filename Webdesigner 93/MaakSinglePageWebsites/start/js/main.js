$(document).ready(function () {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['Home', 'Power', 'Platforms', 'Accessories', 'Get it'],

        'afterLoad': function (anchorLink, index) {
            if (index == 1) {
                console.log("play");
                $('video').get(0).play();
            }
            if (index == 5) {
                $('#fblogo, #applogo, #playlogo').addClass('active');
            }
        },

        'onLeave': function (index, nextIndex, direction) {
            if (index == 3 && direction == 'down') {
                $('.section').eq(index - 1).removeClass('moveDown').addClass('moveUp');
            } else if (index == 3 && direction == 'up') {
                $('.section').eq(index - 1).removeClass('moveUp').addClass('moveDown');
            }

            $('#staticImg').toggleClass('active', (index == 2 && direction == 'down') || (index == 4 && direction == 'up'));
            $('#staticImg').toggleClass('moveDown', nextIndex == 4);
            $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
        }
    });
});