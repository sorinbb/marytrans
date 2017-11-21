<?php ?>

<div class="modal fade marytrans-modal-popup" id="carOrderModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title"><?php print t('New order'); ?></h4>
            </div>
            <div class="modal-body">
                <?php if (!empty($form)) : ?>
                    <?php print render($form); ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>