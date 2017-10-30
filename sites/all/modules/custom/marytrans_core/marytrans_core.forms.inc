<?php

/**
 * Implements hook_form_alter().
 */
function marytrans_core_form_alter(&$form, &$form_state, $form_id) {
    switch ($form_id) {
        case 'user_login':
            $form['name']['#title'] = '';
            $form['name']['#description'] = '';
            $form['name']['#attributes']['placeholder'] = 'E-mail';
            $form['pass']['#title'] = '';
            $form['pass']['#description'] = '';
            $form['pass']['#attributes']['placeholder'] = 'Password';
            $form['actions']['submit']['#attributes']['class'][] = 'rounded-button';
            $form['actions']['submit']['#value'] = 'Authenticate';
            unset($form['icon']);
            break;
        case 'contact_site_form':
            $form['copy']['#access'] = '0';
            $form['actions']['submit']['#attributes']['class'][] = 'rounded-button';
            $block = module_invoke('marytrans_core', 'block_view', 'marytrans_short_contacts');
            $form['#suffix'] = render($block['content']);
            $block = module_invoke('marytrans_core', 'block_view', 'marytrans_testimonials');
            $form['#suffix'] .= render($block['content']);
            $form['message']['#attributes']['class'][] = 'no-margin-bottom';
            break;
    }
}