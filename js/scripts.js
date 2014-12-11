/**
 * Created by alexbenson on 7/30/14.
 */
$(document).ready(function() {


    $('#trigger-overlay, .overlay').click(function() {
        $('.overlay').toggleClass("open");
        console.log('overlay');
    });

    var parentHeight = $('.parent').height();
    var childHeight = $('.child').height();
    $('.child').css('margin-top', (parentHeight - childHeight) / 2);
});
