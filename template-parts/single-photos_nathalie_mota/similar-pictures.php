<?php
$current_categories = wp_get_post_terms(get_the_ID(), 'categorie');
$args = array(
    'post_type'      => 'photos_nathalie_mota', 
    'posts_per_page' => 2, 
    'orderby'        => 'title',
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
<div id="categorie-similar" data-id="<?php echo get_the_ID();?>" data-value="<?php echo get_the_terms($photos[0]->ID,'categorie')[0]->name; ?>"> </div>
    <div class="essai all-post">
        <?php foreach($photos as $photo): ?>
            <?php $categorie = get_the_terms($photo->ID,'categorie')[0]->name;?>
            <?php $post_thumbnails_ID = (get_post_meta($photo->ID,'post-thumbnails'))?  get_post_meta($photo->ID,'post-thumbnails')[0]: ''; ?>
            <?php $references = (get_post_meta($photo->ID,'references'))?  get_post_meta($photo->ID,'references')[0]: ''; ?>
            <?php
                get_template_part( 'template-parts/posts/item-photos', null,
                    array( 
                    'ID' => $photo->ID,
                    )
                );
            ?>            
        <?php endforeach; ?>
    </div>

    <div class="button-2-more">
        <button id="load-more-button" class="button-2" data-page="1">Toutes les photos</button>
    </div>

<?php else: ?>

    <div class="like">
        <p>Aucune autre photo de la même catégorie</p>
    </div>

<?php endif; ?>








