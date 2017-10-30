<?php
    $question_number = 1;
?>

<div class="contact-form">
    <div class="container">
        <div class="row">

            <p class="title">FAQ</p>

            <div class="panel-group accordion" id="faq-accordion" role="tablist" aria-multiselectable="true">

                <?php if (!empty($questions)) : ?>
                    <?php foreach ($questions as $question) : ?>
                        <?php $faq = field_get_items('node', $question, 'field_faq')[0]; ?>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="question-<?php print $question_number; ?>">
                                <a role="button" data-toggle="collapse" data-parent="#faq-accordion" href="#collapse-question-<?php print $question_number; ?>" aria-expanded="true" aria-controls="collapse-question-<?php print $question_number; ?>">
                                    <span class="glyphicon glyphicon-chevron-down"></span>
                                    <?php echo $question_number . '. ' . $faq['question']; ?>
                                </a>
                            </div>
                            <div id="collapse-question-<?php print $question_number; ?>" class="panel-collapse collapse" role="tabpanel" aria-labelledby="question-<?php print $question_number; ?>">
                                <div class="panel-body">
                                    <?php print $faq['answer']; ?>
                                </div>
                            </div>
                        </div>
                        <?php $question_number++; ?>
                    <?php endforeach; ?>
                <?php endif; ?>

            </div>

<!--            <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 contact-form-wrapper">-->
<!--                <p class="field-label">Have a question?</p>-->
<!--                <form>-->
<!--                    <textarea name="message"></textarea>-->
<!--                    <input type="submit" name="submit" value="Ask" class="rounded-button">-->
<!--                </form>-->
<!--            </div>-->

        </div>
    </div>
</div>