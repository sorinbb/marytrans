<?php

function marytrans_core_ask_question_form($form, &$form_state) {
    $form['question'] = [
        '#type' => 'textarea',
        '#required' => TRUE,
        '#maxlength' => 255,
        '#attributes' => [
            'class' => [
                'no-margin-bottom'
            ]
        ],
    ];
    $form['submit'] = [
        '#type' => 'submit',
        '#value' => t('Ask'),
    ];

    return $form;
}

function marytrans_core_ask_question_form_validate($form, &$form_state) {
    if (empty($form_state['values']['question'])) {
        drupal_set_message(t('Question shouldn\'t be empty.'), 'error');
    }
}

function marytrans_core_ask_question_form_submit($form, &$form_state) {
    global $user;

    $values = array(
        'type' => 'faq',
        'uid' => $user->uid,
        'status' => 0,
        'comment' => 0,
        'promote' => 0,
    );
    $entity = entity_create('node', $values);
    $ewrapper = entity_metadata_wrapper('node', $entity);
    $ewrapper->title->set($form_state['values']['question']);
    $entity->field_faq[LANGUAGE_NONE][0] = [
        'question' => $form_state['values']['question'],
        'answer' => ''
    ];

    $ewrapper->save();

    drupal_set_message(t('Question posted successfully!'));
}

function marytrans_core_order_car_form($form, &$form_state) {
    global $user;

    $form['name'] = array(
        '#type' => 'textfield',
        '#title' => '',
        '#default_value' => (user_is_anonymous() ? '' : $user->name),
        '#size' => 60,
        '#maxlength' => 128,
        '#required' => TRUE,
        '#attributes' => [
            'placeholder' => t('Name') .'*'
        ],
    );
    $form['mail'] = array(
        '#type' => 'textfield',
        '#title' => '',
        '#default_value' => (user_is_anonymous() ? '' : $user->mail),
        '#size' => 60,
        '#maxlength' => 128,
        '#required' => TRUE,
        '#attributes' => [
            'placeholder' => t('E-mail') .'*'
        ],
    );
    $form['message'] = [
        '#type' => 'textarea',
        '#required' => TRUE,
        '#maxlength' => 255,
        '#attributes' => [
            'class' => [
                'no-margin-bottom'
            ],
            'placeholder' => t('Message') .'*'
        ],
    ];
    $form['nid'] = [
        '#type' => 'hidden',
        '#attributes' => [
        'class' => [
            'mary-trans-car-nid'
        ],
    ],
    ];
    $form['actions']['submit'] = [
        '#type' => 'submit',
        '#value' => t('Order'),
        '#attributes' => [
            'class' => [
                'rounded-button'
            ],
        ],
        '#prefix' => '<div style="text-align: center">'
    ];
    $form['actions']['cancel'] = [
        '#type' => 'button',
        '#value' => t('Cancel'),
        '#attributes' => [
            'class' => [
                'rounded-button'
            ],
            'data-dismiss' => 'modal'
        ],
        '#suffix' => '</div>'
    ];

    return $form;
}

function marytrans_core_order_car_form_validate($form, &$form_state) {
    drupal_get_messages('error');

    if (empty($form_state['values']['name'])) {
        drupal_set_message(t('Name is required.'), 'error');
    }

    if (empty($form_state['values']['mail'])) {
        drupal_set_message(t('Email is required.'), 'error');
    }

    if (empty($form_state['values']['message'])) {
        drupal_set_message(t('Message is required.'), 'error');
    }

    if (empty($form_state['values']['nid'])) {
        drupal_set_message(t('Undefined car.'), 'error');
    } else {
        $car = node_load($form_state['values']['nid']);

        if (empty($car) || $car->type != 'car') {
            drupal_set_message(t('Undefined car.'), 'error');
        } else {
            $form_state['values']['nid'] = $car;
        }
    }
}

function marytrans_core_order_car_form_submit($form, &$form_state) {
    global $language;

    drupal_mail(
        'marytrans_core',
        'car_order',
        variable_get('site_mail', 'example@marytrans.com'),
        $language,
        $form_state['values'],
        $form_state['values']['name'] . ' <' . $form_state['values']['mail'] . '>',
        TRUE
    );

    drupal_set_message(
        t(
            'Car \':car\' was ordered successfully! Our team member will contact you as soon as possible.',
            [':car' => $form_state['values']['nid']->title]
        )
    );
}

/**
 * Implements hook_form_alter().
 */
function marytrans_core_form_alter(&$form, &$form_state, $form_id) {
    switch ($form_id) {
        case 'user_login':
            $form['name']['#title'] = '';
            $form['name']['#description'] = '';
            $form['name']['#attributes']['placeholder'] = t('Username');
            $form['pass']['#title'] = '';
            $form['pass']['#description'] = '';
            $form['pass']['#attributes']['placeholder'] = t('Password');
            $form['actions']['submit']['#attributes']['class'][] = 'rounded-button';
            $form['actions']['submit']['#value'] = t('Authenticate');
            unset($form['icon']);
            break;
        case 'user_register_form':
            $form['account']['name']['#title_display'] = "invisible";
            $form['account']['name']['#description'] = '';
            $form['account']['name']['#attributes']['placeholder'] = t('Username');
            $form['account']['mail']['#title_display'] = "invisible";
            $form['account']['mail']['#description'] = '';
            $form['account']['mail']['#attributes']['placeholder'] = t('E-mail');
            $form['account']['pass']['#process'] = [
                'form_process_password_confirm',
                'register_alter_password_confirm'
            ];
            $form['field_phone'][LANGUAGE_NONE][0]['value']['#title_display'] = "invisible";
            $form['field_phone'][LANGUAGE_NONE][0]['value']['#attributes']['placeholder'] = t('Phone');
            $form['actions']['submit']['#attributes']['class'][] = 'rounded-button';
            $form['actions']['submit']['#value'] = t('Create account');
            unset($form['icon']);
            break;
        case 'contact_site_form':
            $form['name']['#title_display'] = 'invisible';
            $form['name']['#attributes']['placeholder'] = t($form['name']['#title']) . '*';
            $form['mail']['#title_display'] = 'invisible';
            $form['mail']['#attributes']['placeholder'] = t($form['mail']['#title']) . '*';
            $form['subject']['#title_display'] = 'invisible';
            $form['subject']['#attributes']['placeholder'] = t($form['subject']['#title']) . '*';
            $form['message']['#title_display'] = 'invisible';
            $form['message']['#attributes']['placeholder'] = t($form['message']['#title']) . '*';
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

/**
 * Alter password and confirm password fields to remove title and insert placeholder.
 */
function register_alter_password_confirm($element) {
    $element['pass1']['#title_display'] = "invisible";
    $element['pass1']['#attributes']['placeholder'] = t('Password');
    $element['pass2']['#title_display'] = "invisible";
    $element['pass2']['#attributes']['placeholder'] = t('Confirm password');

    return $element;
}

/**
 * Implements hook_mail().
 */
function marytrans_core_mail($key, &$message, $params) {
    switch ($key) {
        case 'car_order':
            $message['subject'] = 'MaryTrans - car was ordered';
            $message['body'][] = 'Hi.';
            $message['body'][] = 'There was ordered new car on MaryTrans.';
            $message['body'][] = 'Short info:';
            $message['body'][] = "\t\tName: " . $params['name'];
            $message['body'][] = "\t\tEmail: " . $params['mail'];
            $message['body'][] = "\t\tMessage: " . $params['message'];
            $message['body'][] = "\t\tCar: " . l(
                    $params['nid']->title,
                    'node/' . $params['nid']->nid,
                    [
                        'attributes' => [
                            'target' => '_blank'
                        ]
                    ]
                );
            break;
    }
}