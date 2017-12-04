<?php ?>

<div class="my-cars">

    <div class="container">
        <div class="row">
<!--            <a href="--><?php //print url('node/add/order') ?><!--" class="yellow-button make-order">-->
<!--                <span class="glyphicon glyphicon-plus-sign"></span>-->
<!--                Create new order-->
<!--            </a>-->
            <p class="title text-center"><?php print ($is_admin ? t('Orders list') : t('My orders')); ?></p>

            <div class="table-responsive text-center">
                <table class="table table-hover">
                    <tr class="table-header">
                        <th class="text-center"><?php print t('Date'); ?></th>
                        <th class="text-center"><?php print t('Year'); ?></th>
                        <th class="text-center"><?php print t('Mark'); ?></th>
                        <th class="text-center"><?php print t('Model'); ?></th>
                        <th class="text-center"><span class="glyphicon glyphicon-camera"></span></th>
                        <th class="text-center"><?php print t('VIN'); ?></th>
                        <th class="text-center"><?php print t('Name'); ?></th>
                        <th class="text-center"><?php print t('ID number'); ?></th>
                        <th class="text-center"><?php print t('Debit'); ?></th>
                        <th class="text-center"><?php print t('Received'); ?></th>
                        <th class="text-center"><?php print t('Days'); ?></th>
                        <th class="text-center"><?php print t('Container'); ?>#</th>
                        <th class="text-center"><?php print t('Balance'); ?></th>
                        <th></th>
                        <th></th>
                    </tr>

                    <?php $modals = []; ?>

                    <?php if (!empty($orders)) : ?>
                        <?php
                            $debit_total = 0;
                            $received_total = 0;
                            $balance_total = 0;
                            $date = new DateTime();
                        ?>

                        <?php foreach ($orders as $order) : ?>
                            <?php
                                $debit = field_get_items('node', $order, 'field_debit')[0]['value'];
                                $debit_total += (int)$debit;
                            ?>
                            <?php
                                $received = field_get_items('node', $order, 'field_received')[0]['value'];
                                $received_total += (int)$received;
                            ?>
                            <?php
                                $balance = field_get_items('node', $order, 'field_balance')[0]['value'];
                                $balance_total += (int)$balance;
                            ?>
                            <?php
                                $order_created = new DateTime();
                                $order_created->setTimestamp($order->created);
                                $days_diff = $date->diff($order_created)->d;
                                $nid = $order->nid;
                                $vin_full = field_get_items('node', $order, 'field_vin')[0]['value'];
                                $car_vin = substr($vin_full, -6);
                                $invoice = field_get_items('node', $order, 'field_invoice')[0]['uri'];

                                $more_details_data = [];
                                $key = field_get_items('node', $order, 'field_key')[0]['value'];
                                $more_details_data[] = 'data-key="' . $key . '"';
                                $damage = field_get_items('node', $order, 'field_damage')[0]['value'];
                                $more_details_data[] = 'data-damage="' . $damage . '"';
                                $loading = field_get_items('node', $order, 'field_loading')[0]['value'];
                                $more_details_data[] = 'data-loading="' . $loading . '"';
                                $more_details_data[] = 'data-vin="' . $vin_full . '"';
                                $fuel = field_get_items('node', $order, 'field_fuel')[0]['value'];
                                $more_details_data[] = 'data-fuel="' . $fuel . '"';
                                $body_style = field_get_items('node', $order, 'field_body_style')[0]['value'];
                                $more_details_data[] = 'data-body-style="' . $body_style . '"';
                                $engine_type = field_get_items('node', $order, 'field_engine_type')[0]['value'];
                                $more_details_data[] = 'data-engine-type="' . $engine_type . '"';
                                $transmission = field_get_items('node', $order, 'field_transmission')[0]['value'];
                                $more_details_data[] = 'data-transmission="' . $transmission . '"';
                                $lot_number = field_get_items('node', $order, 'field_lot_')[0]['value'];
                                $more_details_data[] = 'data-lot-number="' . $lot_number . '"';
                            ?>
                            <tr>
                                <td><?php print date('Y/m/d', $order->created); ?></td>
                                <td><?php print field_get_items('node', $order, 'field_year')[0]['year']; ?></td>
                                <td><?php print $order->title; ?></td>
                                <td><?php print field_get_items('node', $order, 'field_model')[0]['value']; ?></td>
                                <td><a class="my-orders-slider cursor-pointer" data-order-nid="<?php print $nid; ?>"><span class="glyphicon glyphicon-picture"></span></a></td>
                                <td><?php print '...' . $car_vin; ?></td>
                                <td><?php print field_get_items('node', $order, 'field_name')[0]['value']; ?></td>
                                <td><?php print field_get_items('node', $order, 'field_id_number')[0]['value']; ?></td>
                                <td>$<?php print number_format($debit); ?></td>
                                <td>$<?php print number_format($received); ?></td>
                                <td>+<?php print $days_diff; ?></td>
                                <td><?php print field_get_items('node', $order, 'field_container')[0]['value']; ?></td>
                                <td>$<?php print number_format($balance); ?></td>
                                <td><a href="<?php print file_create_url($invoice); ?>" target="_blank"><span class="glyphicon glyphicon-search"></span></a></td>
                                <td>
                                    <a class="order-more-details" <?php print implode(' ', $more_details_data); ?>>
                                        More <span class="glyphicon glyphicon-chevron-down"></span>
                                    </a>
                                </td>
                            </tr>

                            <?php
                                $images = field_get_items('node', $order, 'field_image');
                                $count = count($images);
                                $i = 1;

                                $order_modal = '<div id="orders-modal-' . $nid . '" class="orders-modal">';
                                $order_modal .= '<span class="orders-modal-close cursor-pointer" data-order-nid="' . $nid . '">X</span>';
                                $order_modal .= '<div class="orders-modal-content">';

                                foreach ($images as $image) {
                                    $order_modal .= '<div class="orders-modal-slides">';
                                    $order_modal .= '<div class="orders-modal-numbertext">' . $i++ . ' / ' . $count . '</div>';
                                    $order_modal .= '<img src="' . file_create_url($image['uri']) . '">';
                                    $order_modal .= '</div>';
                                }

                                $order_modal .= '<a class="orders-modal-prev" data-order-nid="' . $nid . '">&#10094;</a>';
                                $order_modal .= '<a class="orders-modal-next" data-order-nid="' . $nid . '">&#10095;</a>';
                                $order_modal .= '</div>';
                                $order_modal .= '</div>';

                                $modals[] = $order_modal;
                            ?>
                        <?php endforeach; ?>

                        <tr class="table-header">
                            <td><?php print t('Totals'); ?></td>
                            <td colspan="7"></td>
                            <td>$<?php print number_format($debit_total); ?> </td>
                            <td>$<?php print number_format($received_total); ?> </td>
                            <td colspan="2"></td>
                            <td>$<?php print number_format($balance_total); ?> </td>
                            <td colspan="2"></td>
                        </tr>

                    <?php endif; ?>
                </table>
            </div>

            <?php if (!empty($modals)) print implode(' ', $modals); ?>

        </div>
    </div>

</div>