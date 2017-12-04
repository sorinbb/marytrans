<?php ?>

<div class="modal fade marytrans-modal-popup" id="carOrderMoreDetails" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title"><?php print t('Order details'); ?></h4>
            </div>
            <div class="modal-body">
                <table class="table table-hover">
                    <tr>
                        <td><p class="order-details-item order-key"><b>Key:</b></p></td>
                        <td><p class="order-details-item order-key"><span class="value"></span></p></td>
                    </tr>
                    <tr>
                        <td><p class="order-details-item order-damage"><b>Damage:</b></p></td>
                        <td><p class="order-details-item order-damage"><span class="value"></span></p></td>
                    </tr>
                    <tr>
                        <td><p class="order-details-item order-loading"><b>Loading:</b></p></td>
                        <td><p class="order-details-item order-loading"><span class="value"></span></p></td>
                    </tr>
                    <tr>
                        <td><p class="order-details-item order-vin"><b>VIN:</b></p></td>
                        <td><p class="order-details-item order-vin"><span class="value"></span></p></td>
                    </tr>
                    <tr>
                        <td><p class="order-details-item order-fuel"><b>Fuel:</b></p></td>
                        <td><p class="order-details-item order-fuel"><span class="value"></span></p></td>
                    </tr>
                    <tr>
                        <td><p class="order-details-item order-body-style"><b>Body Style:</b></p></td>
                        <td><p class="order-details-item order-body-style"><span class="value"></span></p></td>
                    </tr>
                    <tr>
                        <td><p class="order-details-item order-engine-type"><b>Engine Type:</b></p></td>
                        <td><p class="order-details-item order-engine-type"><span class="value"></span></p></td>
                    </tr>
                    <tr>
                        <td><p class="order-details-item order-transmission"><b>Transmission:</b></p></td>
                        <td><p class="order-details-item order-transmission"><span class="value"></span></p></td>
                    </tr>
                    <tr>
                        <td><p class="order-details-item order-lot-number"><b>Lot #:</b></p></td>
                        <td><p class="order-details-item order-lot-number"><span class="value"></span></p></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>