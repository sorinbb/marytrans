<?php
/**
 * @file
 * The primary PHP file for this theme.
 */

/**
 * Implements hook_preprocess_page().
 */
function mary_trans_preprocess_page(&$vars) {
    $vars['path_to_theme'] = '/' . drupal_get_path('theme', 'mary_trans');

    $menu_item = menu_get_item();

    switch ($menu_item['path']) {
        case 'node/%':
            drupal_goto('node');
            break;
        case 'user/register':
            drupal_goto('user/login');
            break;
        case 'about':
            $block = module_invoke('marytrans_core', 'block_view', 'marytrans_what_we_offer');
            $vars['page']['footer'] = render($block['content']);
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
    ];
}