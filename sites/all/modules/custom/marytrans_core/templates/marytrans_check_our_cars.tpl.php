<?php
    $loop = 0;
?>

<div class="check-our-cars">
    <div class="container">
        <div class="row">

            <p class="underlined-title"><?php print t('Check our cars'); ?></p>

            <?php if (!empty($cars)) : ?>

                <div class="carousel slide multi-item-carousel" id="our-cars">
                    <div class="carousel-inner">
                        <?php foreach ($cars as $car) : ?>
                            <?php
                                $uri = field_view_field('node', $car, 'field_image')['#items'][0]['uri'];
                                $price = field_view_field('node', $car, 'field_price')['#items'][0]['value'];
                            ?>
                            <div class="item<?php print (($loop == 0) ? ' active' : ''); ?>">
                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                                    <a>
                                        <img src="<?php print file_create_url($uri); ?>" class="img-responsive">
                                        <p class="car-brand"><?php print $car->title; ?></p>
                                        <p class="car-price">$<?php print number_format($price)?></p>
                                    </a>
                                </div>
                            </div>
                            <?php $loop++; ?>
                        <?php endforeach; ?>
                    </div>
                    <a class="left carousel-control" href="#our-cars" data-slide="prev">
                        <i class="glyphicon glyphicon-chevron-left"></i>
                    </a>
                    <a class="right carousel-control" href="#our-cars" data-slide="next">
                        <i class="glyphicon glyphicon-chevron-right"></i>
                    </a>
                </div>

            <?php endif; ?>

        </div>
    </div>
</div>