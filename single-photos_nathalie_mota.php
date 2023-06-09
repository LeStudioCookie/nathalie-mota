<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header(); ?>

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); 
    $ID =  get_the_ID(); 
    $references = (!empty(get_post_meta($ID,'references'))) ? get_post_meta($ID,'references')[0]: false;
    ?>
    
        <h1>
            <?php the_title(); ?>
        </h1>

        <p>
            <?php the_content(); ?>
        </p>

        <?php echo $references; ?>


    <?php  endwhile; endif; ?>

<?php get_footer();
