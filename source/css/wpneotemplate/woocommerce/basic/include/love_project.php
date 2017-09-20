<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
global $post;
$project_id = $post->ID;
?>

<div id="project_loved_html">
    <?php
    is_project_loved_html();
    ?>
</div>
