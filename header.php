<?php 

//Affiche le menu "header" enregistré au préalable.

if ( has_nav_menu( 'header-menu' ) ) : ?>
<?php 
wp_nav_menu ( array (
'theme_location' => 'header-menu' ,
'menu_class' => 'the-header-menu', // classe CSS pour customiser mon menu
) ); ?>
<?php endif;
?>