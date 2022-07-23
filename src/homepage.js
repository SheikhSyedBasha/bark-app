import $ from 'jquery';

export default function () {
    $(window).resize(function () {
        setAutoCompletePositions();
    });

    $('input').on('keyup', function () {
        setAutoCompletePositions()
    });


    function setAutoCompletePositions() {
        setSuggestionsPositionCategory();
        setSuggestionsPositionPostcode();
    }


    function setSuggestionsPositionCategory() {
        var cat_field = $('#category_name');
        $('#ui-id-1').css({ 'width': cat_field.outerWidth(), 'top': cat_field.offset().top + 64, 'left': cat_field.offset().left });
    }

    function setSuggestionsPositionPostcode() {
        var postcode_field = $('.full-postcode-input');
        $('#ui-id-2').css({ 'width': postcode_field.outerWidth(), 'top': postcode_field.offset().top + 64, 'left': postcode_field.offset().left, });
    }

    $(function () {
        var discoverButton = $('.discover-button-clickable');

        discoverButton.hover(function () {
            $(this).find('img').attr("src", function (index, attr) {
                return attr.replace(".png", "-white.png");
            });
        }, function () {
            $(this).find('img').attr("src", function (index, attr) {
                return attr.replace("-white.png", ".png");
            });
        });

        $('.disc-item').click(function (event) {
            event.preventDefault();
            $('#category_id').val($(this).data('category-id'));
            $('#postcode_id').val('-1');
            $('#postcode_type').val('-1');
            $('#category_name_hidden').val('');
            $('#category_name').val($(this).text().trim());
            $('#bark_submit').trigger('click');
        });

        $('.carousel-link').click(function (event) {
            event.preventDefault();
            $('#category_id').val($(this).data('caid'));
            $('#postcode_id').val('-1');
            $('#postcode_type').val('-1');
            $('#category_name_hidden').val('');
            $('#category_name').val($(this).text().trim());
            $('#bark_submit').trigger('click');
        });

        function setCarouselWidth() {
            var slideItem = $('.carousel-link');
            var numberSlides = slideItem.length;
            var slideWidth = slideItem.width();
            var sliderTrackWidth = slideWidth * numberSlides;
            $('.slide-track').width(sliderTrackWidth);
        }

        setCarouselWidth();

        var barkModal = $('#inlineBarkModal');

        barkModal.on('show.bs.modal', function (e) {
            $('.slide-track').addClass('bark-modal-open');
        });

        barkModal.on('hidden.bs.modal', function (e) {
            $('.slide-track').removeClass('bark-modal-open');
        })
    });
}
