// scroll top
$(document).ready(function(){
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 500){
            $(".arrow").fadeIn();
        }else{
            $(".arrow").fadeOut();
        }

        if(scrolling > 150){
            $(".head").addClass("head-fix");
        }else{
            $(".head").removeClass("head-fix");

        }
    });
});

// arrow click
$(".arrow").click(function(){
    $("body,html").animate({
        scrollTop:"0px"
    },1000);
});
