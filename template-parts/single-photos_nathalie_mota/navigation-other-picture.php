<div class="interested">
    <div class="interested-picture">
        <p class="interested-picture-more">Cette photo vous intéresse ? </p>
    </div>

    <div class="interested-contact-link">
        <input class="contact-link contact-single" type="button" value="Contact">
    </div>

</div>

<?php 
    $next_post = get_next_post();
    $prev_post = get_previous_post();
?>

<div class="thumbs-navigation">
    <div id="thumbs">
        <?php if (!empty($prev_post)): ?>
            <div class="thumb previous-thumb"> <?= get_post($prev_post->ID)->post_content; ?> </div>
        <?php endif;  ?>
        <?php  if (!empty($next_post)): ?>
            <div class="thumb next-thumb"><?= get_post($next_post->ID)->post_content; ?> </div>
        <?php endif;  ?>
    </div>


    <div id="navigation" >
        <?php if (!empty($prev_post)):   ?>
            <a href="<?php echo get_permalink($prev_post->ID); ?>">
                <img class="previous previous-link" src="<?php echo get_template_directory_uri(); ?>/assets/previous.png" alt="Previous picture">
            </a>
        <?php endif; ?>
        <?php if (!empty($next_post)):   ?>
            <a href="<?php echo get_permalink($next_post->ID); ?>">
                <img class="next next-link" src="<?php echo get_template_directory_uri(); ?>/assets/next.png" alt="Next picture">
            </a>
        <?php endif; ?>
    </div>
</div>
