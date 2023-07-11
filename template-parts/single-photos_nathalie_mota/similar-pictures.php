<?php
$current_categories = wp_get_post_terms(get_the_ID(), 'categorie');
$args = array(
    'post_type'      => 'photos_nathalie_mota', 
    'posts_per_page' => 4, 
    'post__not_in' => [get_the_ID()],
    'tax_query'      => array(
        array(
            'taxonomy' => 'categorie', 
            'field'    => 'term_id',
            'terms'    => wp_list_pluck($current_categories, 'term_id')
        )
    )
);
$photos = get_posts($args);
?>

<?php if(!empty($photos)): ?>

    <div class="like">
        <p>Vous aimerez aussi</p>
    </div>

    <div class="essai">
        <?php foreach($photos as $photo): ?>
                                <?php $categorie = get_the_terms($photo->ID,'categorie')[0]->name;?>
                                <?php $post_thumbnails_ID = (get_post_meta($photo->ID,'post-thumbnails'))?  get_post_meta($photo->ID,'post-thumbnails')[0]: ''; ?>
                                <?php $references = (get_post_meta($photo->ID,'references'))?  get_post_meta($photo->ID,'references')[0]: ''; ?>
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
        <?php endforeach; ?>
    </div>

    <div class="button-2-more">
        <button class="button-2">Toutes les photos</button>
    </div>

<?php else: ?>

    <div class="like">
        <p>Aucune autre photo de la même catégorie</p>
    </div>

<?php endif; ?>








