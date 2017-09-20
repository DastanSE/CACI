<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
get_header();
?>
  <?php
do_action( 'wpneo_before_crowdfunding_single_project' );

if ( post_password_required() ) {
    echo get_the_password_form();
    return;
}
?>
    <div class="wpneo-wrapper">
      <div id="primary" class="content-area">
        <div id="content" class="site-content" role="main">
          <div class="wpneo-list-details">
            <?php while ( have_posts() ) : the_post(); ?>
            <?php do_action( 'wpneo_before_main_content' ); ?>
            <div itemscope itemtype="http://schema.org/ItemList" id="project-<?php the_ID(); ?>" <?php post_class(); ?>>
            <div class="yw-project-head">
                <?php do_action( 'wpneo_header_crowdfunding_single_project_summery' ); ?>
            </div>

              <?php do_action( 'wpneo_before_crowdfunding_single_project_summery' ); ?>
              <div class="wpneo-project-summary">
                <div class="wpneo-project-summary-inner" itemscope itemtype="http://schema.org/DonateAction">
                  <?php do_action( 'wpneo_crowdfunding_single_project_summery' ); ?>
                </div>
                <!-- .wpneo-project-summary-inner -->
              </div>
              <!-- .summary -->
              <?php do_action( 'wpneo_after_crowdfunding_single_project_summery' ); ?>
              <meta itemprop="url" content="<?php the_permalink(); ?>" />
            </div>
            <!-- #project-<?php the_ID(); ?> -->
            <?php do_action( 'wpneo_after_crowdfunding_single_project' ); ?>
            <?php do_action( 'wpneo_after_main_content' ); ?>
            <?php endwhile; // end of the loop. ?>
          </div>
        </div>
        <!-- #content -->
      </div>
      <!-- #primary -->
      <?php
    /**
     * woocommerce_sidebar hook.
     *
     * @hooked woocommerce_get_sidebar - 10
     */
    do_action( 'woocommerce_sidebar' );
    ?>
    </div>
    <?php get_footer('shop'); ?>
