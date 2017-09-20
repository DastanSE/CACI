<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

$days_remaining = apply_filters('date_expired_msg', __('Date expired', 'wp-crowdfunding'));
if (WPNEOCF()->dateRemaining())
    $days_remaining = apply_filters('date_remaining_msg', __(WPNEOCF()->dateRemaining(), 'wp-crowdfunding'));
?>

<div class="wpneo-time-remaining">
	<div class="wpneo-meta-desc"><?php echo $days_remaining ?></div>
    <div class="wpneo-meta-name float-left"><?php _e('Days to go', 'wp-crowdfunding'); ?></div>
</div>
