<?php 
/**
 * Enqueue scripts and styles.
 *
 */
function nathalie_mota_scripts() {

	wp_enqueue_style( 'theme', get_template_directory_uri() . '/style.css', array(), '0.0.1');
	wp_enqueue_style( 'fonts-css', get_stylesheet_directory_uri() . '/fonts/fonts.css' ); 
	wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/css/style.css', array(), filemtime(get_stylesheet_directory() . '/css/style.css'));
}
add_action( 'wp_enqueue_scripts', 'nathalie_mota_scripts' );


add_theme_support( 'custom-logo' );