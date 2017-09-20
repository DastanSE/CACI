
<?php
//if (WPNEOCF()->getFundRaisedPercent() > 0) {
    ?>
	<div class="wpneo-raised-bar">
		<div id="progressbar">
			<div style="width: <?php echo WPNEOCF()->getFundRaisedPercent(); ?>%"></div>
		</div>
	</div>
    <?php
//}
?>