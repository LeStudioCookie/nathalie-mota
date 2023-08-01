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

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <div class="margin">
        <div class="custom-row">
            <div class="custom-info custom-mt-auto">
                <?php get_template_part( 'template-parts/single-photos_nathalie_mota/infos-single-picture' ); ?>
            </div>
            <div class="custom-picture">
                
                <?php
                    get_template_part( 'template-parts/posts/item-photos', null,
                        array( 
                        'ID' => get_the_ID(),
                        )
                    );
                ?>           
                
            </div>
        </div>

        <div class="interested-thumbs-navigation">
            <?php get_template_part( 'template-parts/single-photos_nathalie_mota/navigation-other-picture' ); ?>
        </div>

        <div class="more-pictures">
            <?php get_template_part( 'template-parts/single-photos_nathalie_mota/similar-pictures' ); ?>
        </div>
    </div>
    <?php  endwhile; endif; ?>

<?php get_footer();
