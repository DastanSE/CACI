<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

global $post;
$saved_project_update = get_post_meta($post->ID, 'wpneo_project_updates', true);
$saved_project_update_a = json_decode($saved_project_update, true);

$html = '';
$html .="<div class='project_update_wrapper'>";

if (is_array($saved_project_update_a)) {
    if (count($saved_project_update_a) > 0) {
        ?>

        <ul class="wpneo-crowdfunding-update">
            <?php  foreach ($saved_project_update_a as $key => $value) { ?>

                <li>
                    <span class="round-circle"></span>
                    <h4><?php echo $value['date']; ?></h4>
                    <p class="wpneo-crowdfunding-update-title"><?php echo $value['title']; ?></p>
                    <p><?php echo $value['details']; ?></p>
                </li>
            <?php } ?>
        </ul>

        <?php
        /*
        $html .= '<table class="table table-border">';
        $html .= '<tr>';
        foreach ($saved_project_update_a[0] as $k => $v) {
            $html .= '<th>';
            $html .= ucfirst($k);
            $html .= '</th>';
        }
        $html .= '</tr>';

        foreach ($saved_project_update_a as $key => $value) {
            $html .= '<tr>';
            foreach ($value as $k => $v) {
                $html .= '<td>';
                $html .= $v;
                $html .= '</td>';
            }
            $html .= '</tr>';
        }
        $html .= '</table>';*/
    }
}
$html .= "</div>";

echo $html;