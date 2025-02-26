<!-- start Simple Custom CSS and JS -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
jQuery(document).ready(function($) {
    $("#checkAll").change(function() {
        $(".private-sector").prop("checked", $(this).prop("checked"));
    });

    $(".private-sector").change(function() {
        if ($(".private-sector:checked").length === $(".private-sector").length) {
            $("#checkAll").prop("checked", true);
        } else {
            $("#checkAll").prop("checked", false);
        }
    });
});
jQuery(document).ready(function($) {
    // When "All UK" is clicked
    $("#allUK").change(function() {
        $(".public-sector").prop("checked", $(this).prop("checked"));
    });

    // If all individual checkboxes are checked, check "All UK"
    // If any are unchecked, uncheck "All UK"
    $(".public-sector").change(function() {
        if ($(".public-sector:checked").length === $(".public-sector").length) {
            $("#allUK").prop("checked", true);
        } else {
            $("#allUK").prop("checked", false);
        }
    });
});
jQuery(document).ready(function($) {
    // When "Check All / Uncheck All" is clicked
    $("#checkAllInternational").change(function() {
        $(".international-sector").prop("checked", $(this).prop("checked"));
    });

    // If all individual checkboxes are checked, check "Check All / Uncheck All"
    // If any are unchecked, uncheck "Check All / Uncheck All"
    $(".international-sector").change(function() {
        if ($(".international-sector:checked").length === $(".international-sector").length) {
            $("#checkAllInternational").prop("checked", true);
        } else {
            $("#checkAllInternational").prop("checked", false);
        }
    });
});
jQuery(document).ready(function($) {
    // When "Check All / Uncheck All" is clicked
    $("#checkAllPrivate").change(function() {
        $(".private-sector").prop("checked", $(this).prop("checked"));
    });

    // If all individual checkboxes are checked, check "Check All / Uncheck All"
    // If any are unchecked, uncheck "Check All / Uncheck All"
    $(".private-sector").change(function() {
        if ($(".private-sector:checked").length === $(".private-sector").length) {
            $("#checkAllPrivate").prop("checked", true);
        } else {
            $("#checkAllPrivate").prop("checked", false);
        }
    });
});
jQuery(document).ready(function($) {
    // When "Check All / Uncheck All" is clicked
    $("#checkAllPublic").change(function() {
        $(".public-sector").prop("checked", $(this).prop("checked"));
    });

    // If all checkboxes are selected, check "Check All / Uncheck All"
    // If any are unchecked, uncheck "Check All / Uncheck All"
    $(".public-sector").change(function() {
        if ($(".public-sector:checked").length === $(".public-sector").length) {
            $("#checkAllPublic").prop("checked", true);
        } else {
            $("#checkAllPublic").prop("checked", false);
        }
    });
});
jQuery(document).ready(function($) {
    // When "Check All / Uncheck All" is clicked
    $("#checkAllNonprofit").change(function() {
        $(".nonprofit-sector").prop("checked", $(this).prop("checked"));
    });

    // If all checkboxes are selected, check "Check All / Uncheck All"
    // If any are unchecked, uncheck "Check All / Uncheck All"
    $(".nonprofit-sector").change(function() {
        if ($(".nonprofit-sector:checked").length === $(".nonprofit-sector").length) {
            $("#checkAllNonprofit").prop("checked", true);
        } else {
            $("#checkAllNonprofit").prop("checked", false);
        }
    });
});
</script>
<!-- end Simple Custom CSS and JS -->
