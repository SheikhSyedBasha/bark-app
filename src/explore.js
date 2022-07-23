import $ from 'jquery';

export default function () {

    function closeExposure() {
        var t = $('nav .js-trigger-explore');
        var isHidden;
        var container = $('nav .js-explore-items-container');
        var animationSpeed = 100;
        var windowMobileWidth = 480;

        if (t.hasClass('animating')) {
            return;
        }

        isHidden = container.hasClass('d-none');

        if (isHidden) {
            container.removeClass('d-none');

            if ($(window).width() <= windowMobileWidth) {
                // If mobile width, the mobile menu is being displayed .:. scroll top
                if (window.scrollY) {
                    animationSpeed = 0;
                }
            }

            $('html').addClass('explore-open');
            t.addClass('animating');
            container.css({ opacity: 0 }).finish().animate({ opacity: 1 }, animationSpeed, 'linear', function () {
                t.removeClass('animating');
            });

            $('html,body').off('click.exploreClose').on('click.exploreClose', function (e) {
                if ($(e.target).closest('.js-explore-container').length) {
                    return;
                }

                $('nav .js-trigger-explore').click();
            });
        } else {
            $('html').removeClass('explore-open');

            t.addClass('animating');
            container.finish().animate({ opacity: 0 }, animationSpeed, 'linear', function () {
                t.removeClass('animating');
                container.addClass('d-none').removeClass('highlighting-category');
                $('html,body').off('click.exploreClose')
                $('nav .js-explore-items-container').height('auto');
            });
        }
    }

    $(function () {
        $('nav .js-trigger-explore').off('click.trigger').on('click.trigger', closeExposure);
    });
}