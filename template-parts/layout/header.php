<header>
    <?php 
    the_custom_logo();
    if ( has_nav_menu( 'header-menu' ) ) : ?>
        <?php 
        wp_nav_menu ( array (
        'theme_location' => 'header-menu' ,
        'menu_class' => 'the-header-menu', 
        ) ); ?>
    <?php endif;
    ?>
</header>
