<div class="trier">
    <div class="trier-cat-form">
        <select name="Cat" id="categorie" >
            <option class = "uppercase" value="">Catégories</option>
            <?php
    $categories = get_terms('categorie');

    foreach ($categories as $category) {
        if ($category->name !== 'categorie') {
            echo '<option class="design" value="' . $category->slug . '">' . $category->name . '</option>';
        }
    }
    ?>
        </select>

        <select name="form" id="format">
            <option value="">Formats</option>
            <?php
            $formats = get_terms('format');
            
            foreach ($formats as $format) {
                echo '<option value="' . $format->slug . '">' . $format->name . '</option>';
            }
            ?>
        </select>
    </div>

    <div class="trier-select">
        <select name="select" id="trier">
            <option value="">Trier part</option>
            <option value="DESC">Date décroissante</option>
            <option value="ASC">Date croissante</option>
        </select>
    </div>
</div>

<div class="all-post" id="post-container">

                <?php
                    $current_categories = get_terms(array('taxonomy' => 'categorie', 'hide_empty' => false));

                    $args = array(
                        'post_type'      => 'photos_nathalie_mota',
                        'posts_per_page' => 12,
                        'orderby' => 'title',
                    );
                    


                    $query = new WP_Query($args);

                    if ($query->have_posts()) {
                        while ($query->have_posts()) { ?>
                            
                                
                                <?php $query->the_post(); ?>
                                <?php $categorie = get_the_terms(get_the_ID(),'categorie')[0]->name;?>
                                <?php $post_thumbnails_ID = (get_post_meta(get_the_ID(),'post-thumbnails'))?  get_post_meta(get_the_ID(),'post-thumbnails')[0]: ''; ?>
                                <?php $references = (get_post_meta(get_the_ID(),'references'))?  get_post_meta(get_the_ID(),'references')[0]: ''; ?>
                                <a class="item" href="<?php echo wp_get_attachment_url($post_thumbnails_ID); ?>" data-lightbox="photos" data-title="<span><?php echo $references; ?></span><span><?php echo $categorie; ?></span>">
                                    <figure class="wp-block-image size-large"><?php echo wp_get_attachment_image($post_thumbnails_ID, 'full'); ?></figure>
                                    <div class="wrapper-hover">
                                        <div class="overlay"></div>
                                        <div class="full-screen"></div>
                                        <div class="view"><div class="ico"></div></div>
                                        <div class="bottom-view">
                                            <div class="reference-view" >
                                            <?php echo $references; ?>
                                            </div>
                                            <div class="categorie-view">
                                                <?php echo $categorie; ?>
                                            </div>
                                        </div>
                                    </div>   
                                </a>
                            

                        <?php }
                        wp_reset_postdata();
                    }
                ?>

</div>


<div class="button-1-more">
    <button id="load-more-button" class="button-1" data-page="1">Charger plus</button>
</div>
