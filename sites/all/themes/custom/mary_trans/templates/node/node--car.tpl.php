<?php
    $loop = 0;
    $images = $field_image[LANGUAGE_NONE];
    $first_image = $images[0];
    unset($images[0]);
    $path_to_theme = '/' . drupal_get_path('theme', 'mary_trans');
?>

<?php if ($type == 'car') : ?>
    <div class="our-cars-list">

        <div class="container">
            <div class="row">

                <div class="car-item">
                    <div class="car-image">
                        <img src="<?php print file_create_url($first_image['uri']); ?>" class="float-left">
                        <?php if ((!empty($field_loading)) && ($field_loading[LANGUAGE_NONE][0]['value'] == 'Yes')) : ?>
                            <p class="sold">SOLD</p>
                        <?php endif; ?>
                    </div>
                    <div class="car-info">
                        <p class="title"><?php print $title; ?></p>
                        <span class="actions">
                            <?php if (!empty($images)) : ?>
                                <a class="rounded-button float-left show-car-details"><?php print t('Show Details'); ?></a>
                            <?php else: ?>
                                <a class="rounded-button float-left show-car-details no-details"><?php print t('No Details'); ?></a>
                            <?php endif; ?>

                            <a class="rounded-button float-left order" data-toggle="modal" data-target="#carOrderModal" data-nid="<?php print $nid; ?>"><?php print t('Order'); ?></a>
                        </span>
                        <p class="price">
                            <?php if ($logged_in): ?>
                                $<?php print number_format($field_price[LANGUAGE_NONE][0]['value']); ?>
                                - €<?php print number_format($field_euro_price[LANGUAGE_NONE][0]['value']); ?>
                            <?php else: ?>
                                &nbsp;
                            <?php endif; ?>
                        </p>
                        <p class="description"><?php print $body[0]['value']; ?></p>
                        <p class="specifications">
                            <span class="specification-item">
                                <img src="<?php print $path_to_theme; ?>/images/acceleration.png">
                                <?php print $field_acceleration[LANGUAGE_NONE][0]['value']; ?>mi
                            </span>
                            <span class="specification-item">
                                <img src="<?php print $path_to_theme; ?>/images/engine.png">
                                <?php print $field_engine[LANGUAGE_NONE][0]['value']; ?>
                            </span>
                            <span class="specification-item">
                                <img src="<?php print $path_to_theme; ?>/images/fuel-consumption.png">
                                <?php print $field_fuel_consumption[LANGUAGE_NONE][0]['value']; ?>l / 100km
                            </span>
                        </p>
                    </div>
                    <div class="cars-images-slider display-none">
                        <?php if (!empty($images)) : ?>
                            <div class="carousel slide multi-item-carousel" id="our-cars-list-<?php print $nid; ?>">
                                <div class="carousel-inner">
                                    <?php foreach ($images as $image) : ?>
                                        <div class="item<?php print (($loop == 0) ? ' active' : ''); ?>">
                                            <a>
                                                <div class="col-xs-4">
                                                    <img src="<?php print file_create_url($image['uri']); ?>" class="img-responsive">
                                                </div>
                                            </a>
                                        </div>
                                        <?php $loop++; ?>
                                    <?php endforeach; ?>
                                </div>
                                <a class="left carousel-control" href="#our-cars-list-<?php print $nid; ?>" data-slide="prev">
                                    <i class="glyphicon glyphicon-chevron-left"></i>
                                </a>
                                <a class="right carousel-control" href="#our-cars-list-<?php print $nid; ?>" data-slide="next">
                                    <i class="glyphicon glyphicon-chevron-right"></i>
                                </a>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>

            </div>
        </div>

    </div>

<?php endif; ?>