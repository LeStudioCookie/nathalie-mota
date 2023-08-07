<div class="select"> 
    <div class="select-categorie-format">  
        <div class="dropdown dropdown-category">
            <div class="dropbtn">
                <div id="dropbtn-select" class="dropbtn-select">Catégories</div>
                <div class="dropbtn-img"></div>
            </div>
            
            <div class="dropdown-content dropdown-content-hide">
            <?php
                $categories = get_terms('categorie');

                foreach ($categories as $category) {
                    if ($category->name !== 'categorie') {
                        echo '<div class="item" data-slug="'.$category->slug.'"> ' . $category->name . '</div>';
                    }
                }
            ?>
            </div>
        </div>

        <div class="dropdown dropdown-formats">
            <div class="dropbtn">
                <div class="dropbtn-select">Format</div>
                <div class="dropbtn-img"></div>
            </div>

            <div class="dropdown-content">
                <?php
                    $formats = get_terms('format');
                    
                    foreach ($formats as $format) {
                        if ($format->name !== 'format') {
                        echo '<div class="item" data-slug="'.$format->slug.'"> ' . $format->name . '</div>';
                        }       
                    }
                ?>
            </div>
        </div>
    </div>

    <div class="dropdown dropdown-trier">
        <div class="dropbtn">
            <div class="dropbtn-select">Trier par</div>
            <div class="dropbtn-img"></div>
        </div>
        <div class="dropdown-content">
            <div class="item" data-slug="Photos anciennes">Photos anciennes</div>
            <div class="item" data-slug="Photos récentes">Photos récentes</div>
        </div>
    </div>
</div>

<div class="all-post" id="post-container">

                <?php
                    $current_categories = get_terms(array('taxonomy' => 'categorie', 'hide_empty' => false));


                    $is_mobile = false;
                    if (in_array('is-mobile', get_body_class())) {
                        $is_mobile = true;
                    }

                    $posts_per_page = $is_mobile ? 8 : 12;

                    $args = array(
                        'post_type'      => 'photos_nathalie_mota',
                        'posts_per_page' => $posts_per_page,
                        'orderby' => 'title',
                        'paged'          => 1, 
                    );
                    
                    $query = new WP_Query($args);

                    if ($query->have_posts()) {
                        while ($query->have_posts()) { ?>
                            
                                
                                <?php $query->the_post(); ?>
                                <?php $categorie = get_the_terms(get_the_ID(),'categorie')[0]->name;?>
                                <?php $post_thumbnails_ID = (get_post_meta(get_the_ID(),'post-thumbnails'))?  get_post_meta(get_the_ID(),'post-thumbnails')[0]: ''; ?>
                                <?php $references = (get_post_meta(get_the_ID(),'references'))?  get_post_meta(get_the_ID(),'references')[0]: ''; ?>
                                <?php get_template_part( 'template-parts/posts/item-photos', null,
                                        array( 
                                        'ID' => get_the_ID(),
                                        )
                                    );
                                ?>
                            

                        <?php }
                        wp_reset_postdata();
                    }
                ?>

</div>


<div class="button-1-more">
    <button id="load-more-button" class="button-1" data-page="1">Charger plus</button>
</div>
