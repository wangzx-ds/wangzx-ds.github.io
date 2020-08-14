/** */
$(function (){

    
    //loading control
    if($('#works').length !== 0){
        $('#works').imagesLoaded(function(){
            $("#page-loader").delay(50).fadeOut();
        })
    }else{
        if($('.project-banner').length){
            $('.project-banner').imagesLoaded( { background: true }, function() {
                $("#page-loader").delay(50).fadeOut();
            });
        }else{
            $('.project-images').eq(0).imagesLoaded(function(){
                $("#page-loader").delay(50).fadeOut();
            });
        }
    }




});