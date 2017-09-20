<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

global $post;
?>


<h2><?php _e('Rewards', 'wp-crowdfunding') ?></h2>

<?php
/**
 * Rewards
 */

$project_rewards = get_post_meta($post->ID, 'wpneo_reward', true);
$project_rewards_a = json_decode($project_rewards, true);

if (is_array($project_rewards_a)) {
    if (count($project_rewards_a) > 0) {
        //Sort array by ascending
        $amount = array();
        foreach ($project_rewards_a as $key => $row) {
            $amount[$key] = $row['wpneo_rewards_pladge_amount'];
        }
        array_multisort($amount, SORT_ASC, $project_rewards_a);
        $i = 0;
        foreach ($project_rewards_a as $key => $value) {
            $i++;

            ?>
            <div class="tab-rewards-wrapper-style1">
                <h3><?php echo get_woocommerce_currency_symbol(). $value['wpneo_rewards_pladge_amount'];
                    echo ( ! empty($project_rewards_a[$i]['wpneo_rewards_pladge_amount']))? ' - '. get_woocommerce_currency_symbol(). ($project_rewards_a[$i]['wpneo_rewards_pladge_amount'] - 1) : ' or more';
                    ?>  </h3>
                <p><?php echo $value['wpneo_rewards_description'] ?></p>

                <h4><?php echo ucfirst($value['wpneo_rewards_endmonth']); ?>, <?php echo $value['wpneo_rewards_endyear'] ?></h4>
                <p>Estimated Delivery</p>

                <?php if (get_option('wpneo_single_page_reward_design') == 1) { ?>
                    <div class="overlay">
                        <div>
                            <div>
                                <a href="<?php echo get_the_permalink().'?reward_min_amount='.$value['wpneo_rewards_pladge_amount'] ?>">Select Reward</a>
                            </div>
                        </div>
                    </div>

                <?php } else if (get_option('wpneo_single_page_reward_design') == 2){ ?>
                    <div class="tab-rewards-submit-form-style1">
                        <p>Rewards Amount</p>
                        <form>
                            <input type="text" name="reward_min_amount" class="tab-rewards-amount" value="<?php echo $value['wpneo_rewards_pladge_amount'] ?>" />
                            <button type="submit" class="btn-style1">Continue</button>
                        </form>
                    </div>

                <?php } ?>
            </div>
            <?php
        }
    }
}
?>
<div style="clear: both"></div>
