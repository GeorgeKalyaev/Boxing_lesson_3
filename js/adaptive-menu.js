$(function(){

    $('.adaptive-menu').on('click', function(){
        $(this).next().slideToggle(500, function(){
            var ul = $(this);

            if(ul.css('display') == 'none'){
                ul.removeAttr('style');
            }
        });
    });

});