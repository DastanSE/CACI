<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
$col_num = get_option('number_of_collumn_in_row', 3);
$number = array( "2"=>"two","3"=>"three","4"=>"four" );
?>
<section id="main-slider" class="crowdfunding slider">
  <div id="carousel-home" class="no-margin carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carousel-home" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-home" data-slide-to="1"></li>
      <li data-target="#carousel-home" data-slide-to="2"></li>
      <li data-target="#carousel-home" data-slide-to="3"></li>
      <li data-target="#carousel-home" data-slide-to="4"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="item active" style="background-image: url('<?php bloginfo('template_directory'); ?>/images/bg/bg-crowdfunding.jpg')">
        <div class="container">
          <div class="row slide-margin">
            <div class="col-sm-10 col-sm-offset-1">
              <div class="carousel-content">
                <h1 class="animation animated-item-1">HELLO! START YOUR PROJECTS</h1>
                <h2 class="animation animated-item-2">Launched September 2016, The Creative Independent is a re­source of emo­tional and prac­ti­cal guid­ance for cre­ative peo­ple.</h2>
                <a class="btn-slide animation animated-item-3" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/.item-->
      <?php 
            $latest_cat_post = new WP_Query( array('tag' => 'crowdfunding'));
            if( $latest_cat_post->have_posts() ) : while( $latest_cat_post->have_posts() ) : $latest_cat_post->the_post();  ?>
      <?php if (has_post_thumbnail( $post->ID ) ): ?>
      <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); ?>
      <div class="item" style="background-image: url('<?php echo $image[0]; ?>')">
        <div class="container">
          <div class="row slide-margin">
            <div class="col-sm-10 col-sm-offset-1">
              <div class="carousel-content">
                <h1 class="animation animated-item-1"><?php the_title_attribute(); ?></h1>
                <div class="animation animated-item-2">
                  <?php the_content(); ?>
                </div>
                <a class="btn-slide animation animated-item-3" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <?php endif; ?>
      <?php endwhile; endif; ?>
      <!--/.item-->
    </div>
    <!--/.carousel-inner-->
    <a class="prev hidden-xs" href="#carousel-home" data-slide="prev">
      <i class="fa fa-chevron-left"></i>
    </a>
    <a class="next hidden-xs" href="#carousel-home" data-slide="next">
      <i class="fa fa-chevron-right"></i>
    </a>
  </div>
  <!--/.carousel-->
</section>
<div class="wpneo-wrapper container">
    <div class="wpneo-container">
        <?php do_action('wpneo_project_listing_before_loop'); ?>
        <div class="wpneo-wrapper-inner">
            <?php if (have_posts()): ?>
                <?php
                $i = 1;
                while (have_posts()) : the_post();
                    $class = '';
                    if( $i == $col_num ){
                        $class = 'last';
                        $i = 0;
                    }
                    if($i == 1){ $class = 'first'; }
                ?>
                    <div class="wpneo-listings <?php echo $number[$col_num]; ?> <?php echo $class; ?>">
                        <?php do_action('wpneo_project_loop_item_before_content'); ?>
                        <div class="wpneo-listing-content">
                            <?php do_action('wpneo_project_loop_item_content'); ?>
                        </div>
                        <?php do_action('wpneo_project_loop_item_after_content'); ?>
                    </div>
                <?php $i++; endwhile; ?>
            <?php
            else:
                wpneo_crowdfunding_load_template('include/loop/no-projects-found');
            endif;
            ?>
        </div>
        <?php do_action('wpneo_project_listing_after_loop'); ?>
        <?php wpneo_crowdfunding_load_template('include/pagination'); ?>

    </div>
</div>

