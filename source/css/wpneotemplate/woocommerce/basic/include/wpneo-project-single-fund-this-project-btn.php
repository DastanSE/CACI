<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
?>
  <div class="wpneo-single-sidebar">
    <?php
    global $post, $woocommerce, $product;
    $html = '';
    if ($product->product_type == 'crowdfunding') {
        if (WPNEOCF()->campaignValid()) {
            $recomanded_price = get_post_meta($product->id, 'wpneo_funding_recommended_price', true);
            $min_price = get_post_meta($product->id, 'wpneo_funding_minimum_price', true);
            $max_price = get_post_meta($product->id, 'wpneo_funding_maximum_price', true);

            if (! empty($_GET['reward_min_amount'])){
                $recomanded_price = (int) esc_html($_GET['reward_min_amount']);
            }
            ?>
      <form enctype="multipart/form-data" method="post" class="cart">
        <?php do_action('before_wpneo_donate_field'); ?>
        <input type="number" min="0" placeholder="<?php echo  get_woocommerce_currency_symbol().' '.$recomanded_price; ?>" name="wpneo_donate_amount_field" class="input-text amount wpneo_donate_amount_field text form-control" value="<?php echo $recomanded_price; ?>" data-min-price="<?php echo $min_price ?>" data-max-price="<?php echo $max_price ?>">
        <?php do_action('after_wpneo_donate_field'); ?>
        <input type="hidden" value="<?php echo esc_attr($product->id); ?>" name="add-to-cart">
        <?php
                $btn = '';
                $btn .= '<button type="submit" class="'.apply_filters('add_to_donate_button_class', 'wpneo_donate_button').' btn btn-primary">' . __(apply_filters
                    ('add_to_donate_button_text', 'Back This Project'), 'wp-crowdfunding');
                echo $btn;
                ?>
      </form>
      <?php
        } else {
            echo apply_filters('end_campaign_message', __('This project is no longer valid',
                'wp-crowdfunding'));
        }
    }

    ?>
  </div>
