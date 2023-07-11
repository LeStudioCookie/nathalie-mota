<header>
    <?php 
    the_custom_logo();
    if ( has_nav_menu( 'header-menu' ) ) :
    ?>
    <div id="header-menu-container">

        <div id="menu-toggle">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
        </div>

    </div>

    <nav id="fullscreen-menu">
        <?php 
        wp_nav_menu ( array (
            'theme_location' => 'header-menu' ,
            'menu_class' => 'the-header-menu', 
        ) );
        ?>
    </nav>

    <nav id="desktop-menu">
        <?php 
        wp_nav_menu ( array (
            'theme_location' => 'header-menu' ,
            'menu_class' => 'the-header-menu', 
        ) );
        ?>
    </nav>
    
    <?php endif; ?>
</header>


