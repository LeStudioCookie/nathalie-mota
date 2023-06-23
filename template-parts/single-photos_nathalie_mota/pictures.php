<div class="like">
    <p>Vous aimerez aussi</p>
</div>
<div class="essai">
<?php
$current_categories = wp_get_post_terms(get_the_ID(), 'categorie');

 
$args = array(
    'post_type'      => 'photos_nathalie_mota', 
    'posts_per_page' => 2, 
    'tax_query'      => array(
        array(
            'taxonomy' => 'categorie', 
            'field'    => 'term_id',
            'terms'    => wp_list_pluck($current_categories, 'term_id')
        )
    )
);

$query = new WP_Query($args);


if ($query->have_posts()) {
    while ($query->have_posts()) {
        $query->the_post();
        the_content();
    }
    wp_reset_postdata();
}
?>
</div>






