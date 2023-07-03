<div class="trier">
    <div class="trier-cat-form">
        <select name="Cat" id="categorie">
            <option value="">Catégories</option>
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
        <select name="select" id="selection">
            <option value="">Trier part</option>
            <option value="">Date drécroissante</option>
            <option value="">Date croissante</option>
        </select>
    </div>
</div>

<div class="all-post">

                <?php
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


<div class="button-1-more">
    <button id="load-more-button" class="button-1" data-page="1">Charger plus</button>
</div>
