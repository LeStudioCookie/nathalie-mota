<?php 
add_action('wp_ajax_nopriv_load_more', 'load_more_');
add_action('wp_ajax_load_more', 'load_more_');

function load_more_(){
    $current_categories = get_terms(array('taxonomy' => 'categorie', 'hide_empty' => false));

    $args = array(
        'post_type'      => 'photos_nathalie_mota',
        'posts_per_page' => 4,
        'post__not_in'   => [get_the_ID()],
        'tax_query'      => array(
            array(
                'taxonomy' => 'categorie',
                'field'    => 'term_id',
                'terms'    => wp_list_pluck($current_categories, 'term_id')
            )
        ),
        'offset'         => $_POST['offset']
    );

    $query = new WP_Query($args);

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            echo '<div class="post">';
            the_content();
            echo '</div>';
        }
        wp_reset_postdata();
    }
    die();
}
?>


