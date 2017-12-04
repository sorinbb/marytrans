<?php ?>

<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
    <ul class="menu-items">
        <?php foreach ($mary_trans_main_menu as $menu_item) : ?>
            <li><?php print l(t($menu_item['title']), $menu_item['href']); ?></li>
        <?php endforeach; ?>
    </ul>
</div>
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
    <div class="locations">
        <div class="location">
            <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
            <span class="country-city">212 Johnson Ave Newark NJ 07108</span>
            <span class="address">Tel:  <a href="tel:+1(202)2411427">+1 (202) 241-14-27</a> (U.S.A)</span>
            <span class="address">Tel:  <a href="tel:+40(755)358624">+40 (755) 358 624</a> (RO)</span>
            <span class="address">Tel:  <a href="tel:+37367686868">+373 676-86-868</a> (MD)</span>
            <span class="address">E-mail: <a href="mailto:marytrans.office@gmail.com">marytrans.office@gmail.com</a></span>
        </div>
    </div>
</div>
