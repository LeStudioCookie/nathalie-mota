<header>
    <?php 
    //Display header of site
    if ( has_nav_menu( 'header-menu' ) ) : ?>
        <?php 
        wp_nav_menu ( array (
        'theme_location' => 'header-menu' ,
        'menu_class' => 'the-header-menu', // classe CSS pour customiser mon menu
        ) ); ?>
    <?php endif;
    ?>
</header>
