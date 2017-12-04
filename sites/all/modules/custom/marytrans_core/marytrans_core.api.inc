<?php

function marytrans_core_home() {
    $content = '';

    $block = module_invoke('marytrans_core', 'block_view', 'marytrans_fast_calculator');
    $content .= render($block['content']);

    $block = module_invoke('marytrans_core', 'block_view', 'marytrans_order_steps');
    $content .= render($block['content']);

    $block = module_invoke('marytrans_core', 'block_view', 'marytrans_check_our_cars');
    $content .= render($block['content']);

    $block = module_invoke('marytrans_core', 'block_view', 'marytrans_testimonials');
    $content .= render($block['content']);

    return $content;
}

function marytrans_core_faq() {
    $content = '';

    $block = module_invoke('marytrans_core', 'block_view', 'marytrans_faq');
    $content .= render($block['content']);

    return $content;
}

function marytrans_core_my_orders() {
    $content = '';

    $block = module_invoke('marytrans_core', 'block_view', 'marytrans_my_orders');
    $content .= render($block['content']);

    return $content;
}

function marytrans_core_prices_and_fees() {
    $content = '';

    $block = module_invoke('marytrans_core', 'block_view', 'marytrans_prices_and_fees');
    $content .= render($block['content']);

    return $content;
}