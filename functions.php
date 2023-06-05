<?php 

//ajout d'une nouvelle zone de menu "header" et "footer" au thème

function register_my_menus() {
    register_nav_menus( array(
    'header-menu' => __( 'Menu Header' ),
    'footer-menu' => __( 'Menu Footer' ),
    )
    );
   }
   add_action( 'init', 'register_my_menus' );