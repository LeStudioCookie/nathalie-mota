<?php 
add_action('wp_ajax_nopriv_load_more', 'load_more_');
add_action('wp_ajax_load_more', 'load_more_');

function load_more_(){

    $response = [];

    $paged = $_POST['paged'];
    $selectedCategory = $_POST['selectedCategory'];
    $selectedFormats = $_POST['selectedFormats'];
    $selectedTrier = $_POST['selectedTrier'];

    $current_categories = get_terms(array('taxonomy' => 'categorie', 'hide_empty' => false));

    $args = array(
        'post_type'      => 'photos_nathalie_mota',
        'posts_per_page' => 4,
        'paged'          => 1,
    );

    if ($selectedTrier != '') {
        $args['orderby'] = 'date';
        $args['order'] = $selectedTrier;
    } else {
        $args['orderby'] = 'title';
    }
    
    if($selectedCategory != ''):
        $argsSelectedCategory = array(     
            'taxonomy' => 'categorie',
            'field'    => 'slug',
            'terms'    => $selectedCategory
        );
    endif;
    if($selectedFormats != ''):
        $argsSelectedFormats = array(     
            'taxonomy' => 'format',
            'field'    => 'slug',
            'terms'    => $selectedFormats
        );
    endif;


    if($selectedCategory != '' && $selectedFormats != ''):
        $args['tax_query'] = array(  
            'relation' => 'AND',   
            $argsSelectedCategory,
            $argsSelectedFormats,
        );
    elseif($selectedFormats != '' ):
        $args['tax_query'] = array(    
            $argsSelectedFormats,
        );
    elseif($selectedCategory != '' ):
        $args['tax_query'] = array(    
            $argsSelectedCategory,
        );
    endif;

    $query = new WP_Query($args);
    $max_num_pages = $query->max_num_pages;
    ///If max atteind $response['paged'] = false;
    ///sinon $response['paged'] = true;

    ob_start();
    if ($query->have_posts()) {
        while ($query->have_posts()) {
           ?> <?php $query->the_post(); ?>
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
           <?php 
        }
        wp_reset_postdata();
    }
    $response['posts'] = ob_get_clean();
    
    $response['success'] = true;

    echo json_encode($response);
    die();
}
?>


