<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
jQuery(document).ready(function() {
            function calculateROI() {
                var investmentData = parseFloat(jQuery('#investmentData').val());
                var investmentCampaign = parseFloat(jQuery('#investmentCampaign').val());
                
                if (isNaN(investmentData) || isNaN(investmentCampaign)) {
                    jQuery('#totalInvestment').text('0.00');
                    jQuery('#roi').text('0.00');
                    return;
                }

                var totalInvestment = investmentData + investmentCampaign;
                var roi = totalInvestment * 40;

                jQuery('#totalInvestment').text(totalInvestment.toFixed(2));
                jQuery('#roi').text(roi.toFixed(2));
            }

           jQuery('#investmentData, #investmentCampaign').on('input', calculateROI);
	
			jQuery('#currency').on('change', function() {
                var selectedCurrency = $(this).val();
                jQuery('.currency-symbol').text(selectedCurrency);
                jQuery('#totalInvestmentCurrency').text(selectedCurrency);
                jQuery('#roiCurrency').text(selectedCurrency);
                calculateROI();
            });

            // Initialize the calculation with default values
            calculateROI();
        });
</script>
<!-- end Simple Custom CSS and JS -->
