<div class="about-us">
    <div class="container">
        <div class="row">

            <?php if (!empty($body[0]['value'])) : ?>
                <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
                    <?php print $body[0]['value']; ?>
                </div>
            <?php endif; ?>

            <?php if (!empty($field_testimonials_image[0]['uri'])) : ?>
                <img src="<?php print image_style_url('1024x768', $field_testimonials_image[0]['uri']); ?>">
            <?php endif; ?>

            <?php if (!empty($field_body_2[0]['value'])) : ?>
                <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
                    <?php print $field_body_2[0]['value']; ?>
                </div>
            <?php endif; ?>

        </div>
    </div>
</div>
