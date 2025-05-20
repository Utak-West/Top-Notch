<?php
/**
 * Wilmr Child Theme functions and definitions
 */

// Enqueue parent theme stylesheet
function wilmr_child_enqueue_styles() {
    // Enqueue parent style
    wp_enqueue_style('wilmr-parent-style', get_template_directory_uri() . '/style.css');
    
    // Enqueue child theme CSS files in the correct order
    wp_enqueue_style('top-notch-variables', get_stylesheet_directory_uri() . '/css/variables.css', array('wilmr-parent-style'));
    wp_enqueue_style('top-notch-base', get_stylesheet_directory_uri() . '/css/base-overrides.css', array('top-notch-variables'));
    wp_enqueue_style('top-notch-header-footer', get_stylesheet_directory_uri() . '/css/header-footer-overrides.css', array('top-notch-base'));
    wp_enqueue_style('top-notch-components', get_stylesheet_directory_uri() . '/css/component-overrides.css', array('top-notch-header-footer'));
    wp_enqueue_style('top-notch-colors', get_stylesheet_directory_uri() . '/css/color-scheme-adjustments.css', array('top-notch-components'));
    wp_enqueue_style('top-notch-typography', get_stylesheet_directory_uri() . '/css/typography-adaptations.css', array('top-notch-colors'));
    wp_enqueue_style('top-notch-layout', get_stylesheet_directory_uri() . '/css/layout-modifications.css', array('top-notch-typography'));
    wp_enqueue_style('top-notch-responsive', get_stylesheet_directory_uri() . '/css/responsive-breakpoints.css', array('top-notch-layout'));
}
add_action('wp_enqueue_scripts', 'wilmr_child_enqueue_styles');

// Enqueue Google Fonts
function wilmr_child_enqueue_google_fonts() {
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap', array(), null);
}
add_action('wp_enqueue_scripts', 'wilmr_child_enqueue_google_fonts');

// Elementor compatibility
function wilmr_child_elementor_compatibility() {
    if (did_action('elementor/loaded')) {
        // Add Elementor-specific CSS variables
        wp_add_inline_style('top-notch-variables', '
            :root {
                --e-global-color-primary: var(--primary-color);
                --e-global-color-secondary: var(--secondary-color);
                --e-global-color-text: var(--black);
                --e-global-color-accent: var(--primary-color);
                --e-global-typography-primary-font-family: var(--heading-font);
                --e-global-typography-secondary-font-family: var(--heading-font);
                --e-global-typography-text-font-family: var(--body-font);
                --e-global-typography-accent-font-family: var(--heading-font);
            }
        ');
    }
}
add_action('wp_enqueue_scripts', 'wilmr_child_elementor_compatibility', 20);

// WooCommerce compatibility
function wilmr_child_woocommerce_compatibility() {
    if (class_exists('WooCommerce')) {
        wp_enqueue_style('top-notch-woocommerce', get_stylesheet_directory_uri() . '/css/woocommerce-overrides.css', array('top-notch-responsive'));
    }
}
add_action('wp_enqueue_scripts', 'wilmr_child_woocommerce_compatibility');

// Add browser caching for performance
function wilmr_child_add_caching_headers() {
    if (!is_admin()) {
        header('Cache-Control: public, max-age=31536000');
    }
}
add_action('send_headers', 'wilmr_child_add_caching_headers');
