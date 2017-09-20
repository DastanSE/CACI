<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

//Customize function goes here :)
add_action('wpneo_project_listing_before_loop', 'project_listing_by_author_before_loop');
function project_listing_by_author_before_loop(){
    if (! empty($_GET['author'])) {
        echo '<h3>'.__('Projects by: ', 'wp-crowdfunding').' '.wpneo_crowdfunding_get_author_name_by_login(sanitize_text_field(trim($_GET['author']))).'</h3>';
    }
}

add_action('woocommerce_product_thumbnails', 'wpneo_crowdfunding_project_single_love_this');