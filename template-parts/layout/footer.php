<footer>
    
    <?php 
    if ( has_nav_menu( 'footer-menu' ) ) : ?>
        <?php 
        wp_nav_menu ( array (
        'theme_location' => 'footer-menu' ,
        'menu_class' => 'the-footer-menu', 
        ) ); ?>
    <?php endif;
    ?>
</footer>