<?php 
$path =  get_theme_file_path().'/functions/';
$exe = '.php';

include_once( $path.'wp_enqueue'.$exe);
include_once( $path.'register_menus'.$exe);
include_once( $path.'ajax'.$exe);