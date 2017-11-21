<?php ?>

<ul class="nav navbar-nav nav-center">
    <?php foreach ($mary_trans_main_menu as $menu_item) : ?>
        <li><?php print l(t($menu_item['title']), $menu_item['href']); ?></li>
    <?php endforeach; ?>
</ul>
<ul class="nav navbar-nav navbar-right">
    <li class="call-us">
        <a href="tel:+37360837652">
            <div class="float-left call-us-icon">
                <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
            </div>
            <div class="float-left call-us-phone">
                <span class="country-code">+373</span>
                <span class="phone-number">60837652</span>
            </div>
        </a>
    </li>
</ul>