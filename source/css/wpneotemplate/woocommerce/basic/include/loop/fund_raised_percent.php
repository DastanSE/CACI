<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

$raised_percent = WPNEOCF()->getFundRaisedPercentFormat();
?>
<!-- <div class="wpneo-raised-percent">
    <div class="wpneo-meta-name"><?php _e('Raised Percent', 'wp-crowdfunding'); ?> :</div>
    <div class="wpneo-meta-desc" ><?php echo $raised_percent; ?></div>
</div> -->
<div class="wpneo-raised-bar">
    <div id="progressbar">
        <div style="width: <?php echo WPNEOCF()->getFundRaisedPercent(); ?>%"></div>
    </div>
</div>