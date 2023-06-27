<section class="content-wrapper">
    <div class="content-wrapper-img">
        <?php
        $query = new WP_Query(array('post_type' => 'photos_nathalie_mota', 'orderby' => 'rand', 'posts_per_page' => 1));

        if ($query->have_posts()) :
            while ($query->have_posts()) :
                $query->the_post();
                the_content();
            endwhile;
            wp_reset_postdata();
        endif;
        ?>
    </div>


    <div class="image-overlay" style="position:relative; z-index:1;">
        <img class="overlay-image" src="<?php echo get_template_directory_uri(); ?>/assets/title-header.png" alt="Title header">
    </div>
</section>


