<?php 
/**
 * Enqueue scripts and styles.
 *
 * @return void
 */
function nathalie_mota_scripts() {

	wp_enqueue_style( 'theme', get_template_directory_uri() . '/style.css', array(), '0.0.1');

}
add_action( 'wp_enqueue_scripts', 'nathalie_mota_scripts' );