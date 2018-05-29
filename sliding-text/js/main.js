
$(document).ready(function(){
    $('.title').click(function(){
        $(this).next().slideToggle("slow");
        $(this).parent().siblings().find('.text').slideUp(); 
    });
});