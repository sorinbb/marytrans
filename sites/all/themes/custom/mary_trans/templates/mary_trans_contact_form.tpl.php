<?php
    $suffix = $form['#suffix'];
    $form['#suffix'] = '';
?>

<div class="contact-form">
    <div class="container">
        <div class="row">

            <p class="title"><?php print t('Contact Us'); ?></p>

            <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 contact-form-wrapper">
                <?php print drupal_render_children($form); ?>
            </div>

        </div>
    </div>
</div>

<?php //print $suffix; ?>