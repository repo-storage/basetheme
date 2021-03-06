/*
 * wordpress theme scripts
 */
jQuery(document).ready(function($) {

    /**
     * toggle adminbar view or move admin to the bottom of the page
     */

//check if user is logged

    if ($('body').data('logged-in') == 1) {
        //logged in lets proceed
        var admin_bar_option = $('body').data('adminbar-option');
        if (admin_bar_option == 'bottom') {
            $('#wpadminbar').addClass('bar-to-bottom');
            $('body').addClass('hidden-admin-bar');
        } else {
            $('#wpadminbar').hide('slow');
            $('body').addClass('hidden-admin-bar');
            $('#wpadminbar').find('#hide-wpadminbar').show('slow');
            $('<button id="hide-wpadminbar" class="custom">AdminBar</button>').appendTo('body').click(function() {
                $('#wpadminbar').fadeToggle('slow');
                //$('body').toggleClass('hidden-admin-bar');
            });
        }
    }

});

