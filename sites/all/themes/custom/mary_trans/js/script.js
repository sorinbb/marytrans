$(function () {

    // Instantiate the Bootstrap carousel
    $('.multi-item-carousel').carousel({
        interval: 4500
    });

    // for every slide in carousel, copy the next slide's item in the slide.
    // Do the same for the next, next item.
    $('.multi-item-carousel .item').each(function () {
        var next = $(this).next();

        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });

    $('a.show-car-details').on('click', function (event) {
        if (!$(this).hasClass('no-details')) {
            alert(Drupal.t('Show Details'));
            $(this).text(function(i, text){
                return text === Drupal.t('Show Details') ? Drupal.t('Hide Details') : Drupal.t('Show Details');
            });
            $(this).closest('.car-item').find('.cars-images-slider').toggleClass('display-none');
        }
    });

    $('#carOrderModal').on('show.bs.modal', function (event) {
        var nid = $(event.relatedTarget).data('nid');
        var modal = $(this);
        modal.find('.modal-body input.mary-trans-car-nid').val(nid)
    });

    $('.my-cars a.my-orders-slider').on('click', function (event) {
        var nid = $(this).data('order-nid');
        $("#orders-modal-" + nid).show();
        showSlides(nid, 1);
    });

    $('.my-cars .orders-modal .orders-modal-close').on('click', function (event) {
        var nid = $(this).data('order-nid');
        $("#orders-modal-" + nid).hide();
    });

    $('.my-cars .orders-modal a.orders-modal-prev').on('click', function (event) {
        var nid = $(this).data('order-nid');
        showSlides(nid, slideIndex -= 1);
    });

    $('.my-cars .orders-modal a.orders-modal-next').on('click', function (event) {
        var nid = $(this).data('order-nid');
        showSlides(nid, slideIndex += 1);
    });

    var slideIndex = 1;

    function showSlides(nid, n) {
        var slides = $("#orders-modal-" + nid + " .orders-modal-slides");

        if (n > slides.length) {
            slideIndex = 1
        }

        if (n < 1) {
            slideIndex = slides.length
        }

        slides.hide();
        $(slides[slideIndex - 1]).show();
    }

});