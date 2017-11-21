<?php ?>

<div class="what-we-offer">
    <div class="container">
        <div class="row">

            <?php if (!empty($offers)) : ?>
                <div class="what-we-offer-title"><?php print t('What we offer'); ?></div>

                <?php foreach ($offers as $offer) : ?>
                    <?php
                        $uri = field_get_items('node', $offer, 'field_testimonials_image')[0]['uri'];
                        $body = field_get_items('node', $offer, 'body')[0]['value'];
                    ?>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 offer-item-wrapper">
                        <div class="offer-item">
                            <img src="<?php print image_style_url('480x640', $uri); ?>">
                            <p class="offer-item-title"><?php print $offer->title; ?></p>
                            <p class="offer-item-description"><?php print $body; ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>

            <?php endif; ?>

        </div>
    </div>
</div>