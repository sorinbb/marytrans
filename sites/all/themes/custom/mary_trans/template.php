<?php
/**
 * @file
 * The primary PHP file for this theme.
 */

/**
 * Implements hook_preprocess_page().
 */
function mary_trans_preprocess_page(&$vars) {
    $vars['path_to_theme'] = $vars['base_path'] . drupal_get_path('theme', 'mary_trans');

    $menu_item = menu_get_item();

    switch ($menu_item['path']) {
        case 'node/%':
            $type = $menu_item['page_arguments'][0]->type;
            switch ($type) {
                case 'car':
                    drupal_goto('node');
                    break;
                case 'faq':
                    drupal_goto('faq');
                    break;
                case 'what_we_offer':
                    drupal_goto('about-us');
                    break;
                case 'simple_page':
                    $block = module_invoke('marytrans_core', 'block_view', 'marytrans_what_we_offer');
                    $vars['page']['footer'] = render($block['content']);
                    break;
                default:
                    drupal_goto('home');
                    break;
            }
            break;
        case 'node':
            $block = module_invoke('marytrans_core', 'block_view', 'marytrans_order_car');
            $vars['page']['content']['#suffix'] = render($block['content']);
            break;
        case 'user/%':
            drupal_goto('home');
            break;
        case 'my-orders':
            if ($vars['is_admin']) {
                drupal_goto('home');
            }
            break;
    }
}

/**
 * Implements hook_preprocess_page().
 */
function mary_trans_css_alter(&$css) {

}

/**
 * Implements hook_preprocess_html().
 */
function mary_trans_preprocess_html(&$vars) {
    $menu_item = menu_get_item();

    if (!empty($menu_item['map'][0])) {
        switch($menu_item['map'][0]) {
            case 'search':
                break;
        }
    }
}

function mary_trans_theme() {
    return [
        'mary_trans_main_menu' => [
            'variables' => ['vars' => NULL],
            'template' => 'templates/mary_trans_main_menu',
        ],
        'mary_trans_footer' => [
            'variables' => ['vars' => NULL],
            'template' => 'templates/mary_trans_footer',
        ],
        'contact_site_form' => [
            'render element' => 'form',
            'template' => 'templates/mary_trans_contact_form',
        ],
        'user_login' => [
            'render element' => 'form',
            'template' => 'templates/mary_trans_login_form',
        ],
        'user_register_form' => [
            'render element' => 'form',
            'template' => 'templates/mary_trans_register_form',
        ],
    ];
}