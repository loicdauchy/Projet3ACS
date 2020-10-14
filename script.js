$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".headernav").addClass("active_headernav");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".headernav").removeClass("active_headernav");
        }
    });
});