<?php
    $loop = 0;
?>

<div class="testimonials">
    <div class="container">
        <div class="row">

            <?php if (!empty($testimonials)) : ?>
                <p class="underlined-title"><?php print t('Testimonials'); ?></p>

                <div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12">
                    <div class="carousel slide" id="testimonials-carousel" data-ride="carousel" data-interval="4500">

                        <ol class="carousel-indicators">
                            <?php for ($i = 0; $i < count($testimonials); $i++) : ?>
                                <li data-target="#testimonials-carousel" data-slide-to="<?php print $i; ?>"<?php print (($i == 0) ? ' class="active"' : ''); ?>></li>
                            <?php endfor; ?>
                        </ol>

                        <div class="carousel-inner">
                            <?php foreach ($testimonials as $testimonial) : ?>
                                <?php $uri = field_get_items('node', $testimonial, 'field_testimonials_image')[0]['uri']; ?>
                                <div class="item<?php print (($loop == 0) ? ' active' : ''); ?>">
                                    <img src="<?php print image_style_url('large', $uri); ?>">
                                    <p><?php print $testimonial->title; ?></p>
                                </div>
                                <?php $loop++; ?>
                            <?php endforeach; ?>
                        </div>

                    </div>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>