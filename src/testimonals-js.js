import $ from 'jquery';
import '../node_modules/bootstrap/js/dist/carousel';
export default function () {
    var imgsarr = [];

    $('#testimonials .avatar-wrapper img').map(function () {
        var img = $(this);
        if (img && img.data('index') >= 0) {
            imgsarr[img.data('index')] = img.data('src');
        }
    });

    $('#quote-carousel')
        .carousel({
            pauseOnHover: true,
            interval: 10000,
        })
        .on('slide.bs.carousel', function (e) {
            var fromimgsrc = imgsarr[e.from];
            var fromimgindex = e.from;
            var toimg = false;

            $('#testimonials .avatar-wrapper img').map(function () {
                var imgx = $(this);
                if (imgx && imgx.data('type') != 'median' && imgx.data('index') == e.to) {
                    toimg = imgx;
                }
            });

            if (!toimg) return false;

            toimg.attr({ src: fromimgsrc, srcset: fromimgsrc });
            toimg.data('index', fromimgindex);
            $('.median').attr({ src: imgsarr[e.to], srcset: imgsarr[e.to] });
            $('.median').data('index', e.to);
        });

    $('#testimonials .avatar-wrapper').on('click', function (e) {
        var t = $(this);
        var img = t.find('img');

        if (img.attr('class') == 'median') return false;

        $('#quote-carousel').carousel(img.data('index'));
    });
}
