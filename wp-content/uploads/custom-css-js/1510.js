<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
jQuery(document).ready(function ($) {
    // Function to handle "Read More/Read Less" toggle
    function applyReadMore(selector, charLimit) {
        $(selector).each(function () {
            var content = $(this);
            var fullText = content.text().trim();

            if (fullText.length > charLimit) {
                var shownText = fullText.substr(0, charLimit);
                var hiddenText = fullText.substr(charLimit);

                var newHtml = shownText +
                    '<span class="more-ellipses">...</span>' +
                    '<span class="more-content" style="display:none;">' + hiddenText + '</span>' +
                    ' <a href="#" class="more-link">Read More</a>';

                content.html(newHtml);
            }
        });
    }

    // Toggle functionality
    $(document).on('click', '.more-link', function (e) {
        e.preventDefault();
        var link = $(this);
        var moreContent = link.prev('.more-content');
        var ellipses = link.siblings('.more-ellipses');

        moreContent.slideToggle(300); // Smooth transition
        ellipses.toggle();

        // Toggle button text
        link.text(link.text().trim() === 'Read More' ? 'Read Less' : 'Read More');
    });

    // Apply read more functionality to static content
    applyReadMore('.details p.elementor-icon-box-description', 100);

    // Ensure Owl Carousel is initialized before applying Read More
    $('.details .owl-carousel').on('initialized.owl.carousel', function () {
        applyReadMore('.elementor-element-0faade9 .owl-carousel .owl-item .item .owl-content', 100);
    });

    // Re-trigger Read More for dynamically loaded items
    $('.details .owl-carousel').owlCarousel({
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        onInitialized: function () {
            applyReadMore('.details .owl-carousel .owl-item .item .owl-content', 100);
        },
        onChanged: function () {
            applyReadMore('.details .owl-carousel .owl-item .item .owl-content', 100);
        }
    });
});

</script>
<!-- end Simple Custom CSS and JS -->
