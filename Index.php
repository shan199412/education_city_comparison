<?php

/*
Plugin Name: Education Comparison
Description: Short Code: [Education-City-Comparison]
Version: 1.1
Author: Alex & Zoe
*/

// User cannot access the plugin directly
if (!defined('ABSPATH')) {
	exit;
}

// Add short code for the plugin
function generate_ecc1_short_code() {
	include 'education-city-comparison.php';
}

add_shortcode('Education-City-Comparison', 'generate_ecc1_short_code');

// Add the scripts
function add_ecc1_scripts() {
	wp_enqueue_script('ecccity_script', plugins_url('/js/ecccity_script.js',__FILE__), array('jquery'),'1.1', true);
	wp_enqueue_script('eccdia_script', plugins_url('/js/eccdia_script.js',__FILE__), array('jquery'),'1.1', true);
	wp_enqueue_style( 'ecccity_style', plugins_url('/css/ecccity_style.css', __FILE__), array(), '1.1');
	wp_enqueue_style( 'eccdia_style', plugins_url('/css/eccdia_style.css', __FILE__), array(), '1.1');

}

add_action('wp_enqueue_scripts', 'add_ecc1_scripts');
