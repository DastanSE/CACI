<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

global $post;
?>

<div class="tab-project-story-left">
    <h2><?php _e('Project Story', 'wp-crowdfunding') ?></h2>
    <?php the_content(); ?>
</div>

<div class="tab-project-story-right">
    <?php do_action('wpneo_project_story_right_sidebar'); ?>

<div style="clear: both"></div>
</div>