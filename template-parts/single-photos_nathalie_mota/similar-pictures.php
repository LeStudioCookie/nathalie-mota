<?php
$current_categories = wp_get_post_terms(get_the_ID(), 'categorie');
$args = array(
    'post_type'      => 'photos_nathalie_mota', 
    'posts_per_page' => 2, 
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
            <?php echo $photo->post_content; ?>
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








