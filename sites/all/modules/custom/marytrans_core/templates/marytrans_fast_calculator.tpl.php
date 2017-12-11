<div class="fast-calculator">
    <div class="container">
        <div class="row">

            <div class="deliver-your-car">
                <div class="deliver-your-car-text">
                    <p><?php print t('Deliver your US auction car to port'); ?></p>
                </div>
                <div class="calculate-price">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 internal-options">
                            <p class="calculate-price-title"><?php print t('Local transportation'); ?></p>
                            <div class="select-wrapper">
                                <select name="auction" class="choose-auction">
                                    <option disabled="disabled" selected="selected">Choose auction</option>
<!--                                    <option value="1">COPART</option>-->
<!--                                    <option value="2">I A A I</option>-->
<!--                                    <option value="3">Manheim Simulcast</option>-->
<!--                                    <option value="4">ADESA</option>-->
<!--                                    <option value="5">OVE / AuctionPipeline</option>-->
<!--                                    <option value="6">TRA</option>-->
                                </select>
                            </div>
                            <div class="select-wrapper">
                                <select name="location" class="choose-location">
                                    <option disabled="disabled" selected="selected">Choose location</option>
                                </select>
                            </div>
                            <div class="select-wrapper">
                                <select name="exit_port" class="choose-exit-port">
                                    <option disabled="disabled" selected="selected">Select exit port</option>
                                </select>
                            </div>
                            <div class="select-wrapper">
                                <select name="country" class="choose-country">
                                    <option disabled="disabled" selected="selected">Select country</option>
                                </select>
                            </div>
                            <div class="select-wrapper">
                                <select name="port_city" class="choose-port">
                                    <option disabled="disabled" selected="selected">Select Port/City</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 cars-per-container">
                            <p class="calculate-price-title"><?php print t('Price per one car'); ?></p>
                            <div class="select-cars-per-container">
                                <label for="sedan_per_container">
                                    <input type="radio" name="load_type" id="sedan_per_container" checked="checked" disabled="disabled">
                                    <img src="<?php print $path_to_theme; ?>/images/sedan.png" alt="sedan">
                                    x4 (Sedan) <?php print t('per container'); ?>
                                </label>
                                <label for="universal_per_container">
                                    <input type="radio" name="load_type" id="universal_per_container" disabled="disabled">
                                    <img src="<?php print $path_to_theme; ?>/images/universal.png" alt="universal">
                                    x3 (SUV) <?php print t('per container'); ?>
                                </label>
                            </div>
                            <div class="total-rates">
                                <div class="ground-rate rate">
                                    <div class="rate-label float-left"><?php print t('Ground rate'); ?></div>
                                    <div class="right-triangle float-left"></div>
                                    <div class="rate-price float-left" data-price="">-</div>
                                </div>
                                <div class="ocean-rate rate">
                                    <div class="rate-label float-left"><?php print t('Ocean rate'); ?></div>
                                    <div class="right-triangle float-left"></div>
                                    <div class="rate-price float-left" data-price="">-</div>
                                </div>
                                <div class="total-rate rate">
                                    <div class="rate-label float-left"><?php print t('Total'); ?></div>
                                    <div class="right-triangle float-left"></div>
                                    <div class="rate-price float-left">-</div>
                                </div>
<!--                                <div>-->
<!--                                    <a href="#make-order"-->
<!--                                       class="yellow-button make-order">Make-->
<!--                                        your order</a>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 load-type">
                            <p class="calculate-price-title"><?php print t('Load Type'); ?></p>
                            <div class="select-load-type">
                                <label for="medium_duty_truck">
                                    <input type="radio" name="load_type" id="medium_duty_truck" disabled="disabled">
                                    <img src="<?php print $path_to_theme; ?>/images/medium-duty-truck.png" alt="medium duty truck">
                                    <?php print t('Medium Duty Truck'); ?>
                                </label>
                                <br>
                                <label for="van">
                                    <input type="radio" name="load_type" id="van" disabled="disabled">
                                    <img src="<?php print $path_to_theme; ?>/images/van.png" alt="van">
                                    <?php print t('VAN'); ?>
                                </label>
                                <br>
                                <label for="motorcycle">
                                    <input type="radio" name="load_type" id="motorcycle" disabled="disabled">
                                    <img src="<?php print $path_to_theme; ?>/images/motorcycle.png" alt="motorcycle">
                                    <?php print t('Motorcycle'); ?>
                                </label>
                                <br>
                                <label for="quadrocycle">
                                    <input type="radio" name="load_type" id="quadrocycle" disabled="disabled">
                                    <img src="<?php print $path_to_theme; ?>/images/quadrocycle.png" alt="quadrocycle">
                                    <?php print t('Quadrocycle'); ?>
                                </label>
                                <br>
                                <label for="truck">
                                    <input type="radio" name="load_type" id="truck" disabled="disabled">
                                    <img src="<?php print $path_to_theme; ?>/images/truck.png" alt="truck">
                                    <?php print t('Truck'); ?>
                                </label>
                                <br>
                                <label for="yacht">
                                    <input type="radio" name="load_type" id="yacht" disabled="disabled">
                                    <img src="<?php print $path_to_theme; ?>/images/yacht.png" alt="yacht">
                                    <?php print t('Yacht'); ?>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="calculation-note">
                    * <?php print t('Bobcat sizes vary but this is the price for the standard Bobcat. Please enquire for an accurate price if your Bobcat does not have standard dimensions.'); ?>
                </div>
            </div>

        </div>
    </div>

</div>