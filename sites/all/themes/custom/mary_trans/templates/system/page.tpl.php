<?php
/**
 * @file
 * Mary trans theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template normally located in the
 * modules/system directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 * - $hide_site_name: TRUE if the site name has been toggled off on the theme
 *   settings page. If hidden, the "element-invisible" class is added to make
 *   the site name visually hidden, but still accessible.
 * - $hide_site_slogan: TRUE if the site slogan has been toggled off on the
 *   theme settings page. If hidden, the "element-invisible" class is added to
 *   make the site slogan visually hidden, but still accessible.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['navigation']: Logo, Items for Main menu and Sign in link.
 * - $page['header']: Items for the header region.
 * - $page['content']: The main content of the current page.
 * - $page['footer']: Items for the footer region.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 * @see bartik_process_page()
 * @see html.tpl.php
 */
?>

<!-- HEADER -->
<div class="main-header">
    <nav class="navbar navbar-default navbar-fixed-top main-navigation">
        <div class="container">

            <div class="collapse navbar-collapse in" id="navbar-header-navigation">
                <ul class="nav navbar-nav nav-center">
                    <?php
                        $language_switcher = module_invoke('languageinterface', 'block_view', '0');
                        print $language_switcher['content'];
                    ?>
                    <?php if ($logged_in) : ?>
                        <li class="call-us"><a href="<?php print url('user/logout') ?>"><?php print t('Logout'); ?></a></li>
                        <li>|</li>
                        <?php if ($is_admin) : ?>
                            <li><a href="<?php print url('my-orders') ?>"><?php print t('Orders list'); ?></a></li>
                        <?php else : ?>
                            <li><a href="<?php print url('my-orders') ?>"><?php print t('My list'); ?></a></li>
                        <?php endif; ?>
                    <?php else : ?>
                        <li><a href="<?php print url('user/register') ?>"><?php print t('Register'); ?></a></li>
                        <li>|</li>
                        <li><a href="<?php print url('user/login') ?>"><?php print t('Login'); ?></a></li>
                    <?php endif; ?>
                </ul>
            </div>

        </div>
    </nav>
</div>
<!-- END HEADER -->

<!-- NAVIGATION -->
<nav class="navbar navbar-default main-navigation" data-spy="affix" data-offset-top="225">
    <div class="container">

        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar-main-navigation" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="tel:+40(755)358624" class="call-us-small navbar-toggle collapsed">
                <div class="float-left call-us-icon">
                    <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
                </div>
            </a>
            <a class="navbar-brand" href="<?php print $base_path ?>">
                <img src="<?php print $path_to_theme; ?>/images/logo.png"
                     alt="MaryTrans.com">
            </a>
        </div>

        <div class="collapse navbar-collapse" id="navbar-main-navigation">
            <?php print theme('mary_trans_main_menu', ['mary_trans_main_menu' => $main_menu]); ?>
        </div>

    </div>
</nav>
<!-- END NAVIGATION -->

<!-- MAIN CONTENT -->
<?php if ($messages): ?>
    <div class="container">
        <div id="messages">
            <div class="section clearfix">
                <?php print $messages; ?>
            </div>
        </div> <!-- /.section, /#messages -->
    </div>
<?php endif; ?>

<?php print render($page['content']); ?>
<!-- END MAIN CONTENT -->

<!-- FOOTER -->
<footer>
    <div class="footer">
        <div class="container">
            <div class="row">

                <?php if (!empty($page['footer'])) {
                    print $page['footer'];
                } ?>

                <?php print theme('mary_trans_footer', ['mary_trans_main_menu' => $main_menu]); ?>

            </div>
        </div>
    </div>
</footer>
<!-- END FOOTER -->