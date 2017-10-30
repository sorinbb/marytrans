<?php ?>

<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <ul class="menu-items">
        <?php foreach ($mary_trans_main_menu as $menu_item) : ?>
            <li><?php print l($menu_item['title'], $menu_item['href']); ?></li>
        <?php endforeach; ?>
    </ul>
</div>
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <div class="locations">
        <div class="location">
            <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
            <span class="country-city">Romania, Bucharest</span>
            <span class="address">str. 31 August 1989 / +37360837652</span>
        </div>
        <div class="location">
            <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
            <span class="country-city">Romania, Bucharest</span>
            <span class="address">str. 31 August 1989 / +37360837652</span>
        </div>
    </div>
</div>
