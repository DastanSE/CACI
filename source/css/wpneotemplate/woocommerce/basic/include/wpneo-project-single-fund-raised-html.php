<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

$wpneo_campaign_end_method = get_post_meta(get_the_ID(), 'wpneo_campaign_end_method', true);
?>



<div class="project-funding-info">
    <ul>

        <li><p class="funding-amount"><?php echo wpneo_crowdfunding_price(wpneo_crowdfunding_get_total_goal_by_project(get_the_ID())); ?></p>
            <span class="info-text"><?php _e('Funding Goal', 'wp-crowdfunding') ?></span>
        </li>

        <li><p class="funding-amount"><?php echo wpneo_crowdfunding_price(wpneo_crowdfunding_get_total_fund_raised_by_project()); ?></p>
            <span class="info-text"><?php _e('Fund Raised', 'wp-crowdfunding') ?></span>
        </li>



        <?php
        if ($wpneo_campaign_end_method != 'never_end'){
            ?>

            <li><p class="funding-amount"><?php echo WPNEOCF()->dateRemaining(); ?></p>
                <span class="info-text">Days to go</span>
            </li>

        <?php } ?>


    </ul>

</div>

<!--
<div class="wpneo-single-sidebar">
    <h3><?php /*echo wpneo_crowdfunding_price(wpneo_crowdfunding_get_total_fund_raised_by_project()); */?></h3>
    <p>Fund raised of <?php /*echo wpneo_crowdfunding_price(wpneo_crowdfunding_get_total_goal_by_project(get_the_ID())); */?> goal</p>
</div>-->
