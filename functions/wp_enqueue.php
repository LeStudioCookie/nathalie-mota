<?php 
/**
 * Enqueue scripts and styles.
 *
 */
function nathalie_mota_scripts() {

	wp_enqueue_script('bootstrap.min', get_template_directory_uri() . '/js/bootstrap.min.js', array('jquery'), '1.0', true);
	wp_enqueue_style('inc-theme-child-styles', get_template_directory_uri() . '/css/inc.css', false, '1.0', 'all');

	wp_enqueue_style( 'theme', get_template_directory_uri() . '/style.css', array(), '0.0.1');
	wp_enqueue_style( 'fonts-css', get_stylesheet_directory_uri() . '/fonts/fonts.css' ); 

	wp_enqueue_style('theme-child-styles', get_template_directory_uri() . '/css/theme.min.css', false, '1.0', 'all');
	wp_enqueue_script('theme-child-script', get_template_directory_uri() . '/js/theme.min.js', array(), '1.0.0', true);	wp_enqueue_script('theme-child-script');
	
}

add_action( 'wp_enqueue_scripts', 'nathalie_mota_scripts' );


add_theme_support( 'custom-logo' );

function Add_ajaxurl()
{
    echo '<script type="text/javascript">
           var ajaxurl = "' . admin_url('admin-ajax.php') . '";
         </script>';
}
add_action('wp_head', 'Add_ajaxurl'); 
