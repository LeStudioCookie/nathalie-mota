<?php
  $ID =  get_the_ID(); 
  $references = (!empty(get_post_meta($ID,'references'))) ? get_post_meta($ID,'references')[0]: false;
  $type = (!empty(get_post_meta($ID,'type'))) ? get_post_meta($ID,'type')[0]: false;
?>

<div class="infos-picture">
    
    <h1 class="title-h1">
        <?php the_title(); ?>
    </h1>

    <p class="reference" data-reference="<?php echo $references; ?>">Références : 
        <?php echo $references; ?>
    </p>  
    
    <p class="categorie">
        <?php $categories = get_the_terms( $ID, 'categorie' );
            if ( $categories && ! is_wp_error( $categories ) ) {
                foreach ( $categories as $category ) {
                    echo 'Catégorie : ' . $category->name;
                }
            }
        ?>
    </p>

    <p class="format">
        <?php $categories = get_the_terms( $ID, 'format' );
            if ( $categories && ! is_wp_error( $categories ) ) {
                foreach ( $categories as $category ) {
                    echo 'Format : ' . $category->name;
                }
            }
        ?>
    </p>

    <p class="type">Type :
        <?php echo $type; ?>
    </p>

    <p class="date">
        <?php $annee = get_the_date('Y');
        echo __('Année','nathaliemota').' : ' . $annee;
        ?>
    </p>

</div>
    

   





