<?php $categorie = get_the_terms( $args['ID'],'categorie')[0]->name;?>
<?php $post_thumbnails_ID = (get_post_meta( $args['ID'],'post-thumbnails'))?  get_post_meta( $args['ID'],'post-thumbnails')[0]: ''; ?>
<?php $references = (get_post_meta( $args['ID'],'references'))?  get_post_meta( $args['ID'],'references')[0]: ''; ?>
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