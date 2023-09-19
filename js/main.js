(function($) {
 
$(function () {
    var display = function () {
    if ($(this).scrollTop() > 4500) { //scroll量
            $(".Bnr").fadeOut();
        } else {
            $(".Bnr").fadeIn();
        }
    };
    $(window).on("scroll", display);
    //click
    $(".Bnr p.close a").click(function(){
    $(".Bnr").fadeOut();
    $(window).off("scroll", display);
    });
});
 
})(jQuery);


