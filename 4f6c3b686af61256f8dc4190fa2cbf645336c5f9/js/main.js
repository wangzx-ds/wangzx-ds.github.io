/** */
$(function (){

    


    // //bootstrap tooltip component
    // $('[data-toggle="tooltip"]').tooltip();

    // //calculate the image
    // $('.works-item').each(function(index){
    //     $item = $(this);
    //     var itemWidth = $item.width();
    //     var itemHeight = itemWidth * 0.8;
    //     if($item.hasClass('big')){
    //         itemHeight = itemWidth * 1.2;
    //     }else if($item.hasClass('middle')){
    //         itemHeight = itemWidth * 1;
    //     }
    //     //itemHeight += itemHeight * 0.2 * Math.random();
    //     $item.find('.works-image').height(itemHeight);

    // });


    
    //loading control
    if($('#works').length !== 0){
        $('#works').imagesLoaded(function(){
            $("#page-loader").delay(50).fadeOut();

            if(helper.isIndex()){
                //add animation in index page
                $('.header').addClass('animated fadeInDown');
                $('.home').addClass('animated fadeInDown');
                $('#works').addClass('animated fadeInDown');
            }
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


    //when scrolling down, hide navigation
    var $header = $('#header');
    if(!$header.hasClass('header-index')){
        var lastScrollTop = 0;
        var st = $(this).scrollTop();
        if(st === 0){
            $('#header').addClass('is-top');
        }else{
            $('#header').removeClass('is-top');
            if($('.project-banner').length && st < $('.project-banner').height()){
                $('#header').addClass('is-opacity');
            }else{
                $('#header').removeClass('is-opacity');
            }
        }

        $(window).scroll(function(){
            st = $(this).scrollTop();

            if(st === 0){
                $header.addClass('is-top');
            }else{
                $header.removeClass('is-top');
                if($('.project-banner').length && st < $('.project-banner').height()){
                    $('#header').addClass('is-opacity');
                }else{
                    $('#header').removeClass('is-opacity');
                }
            }

            if (st - lastScrollTop > 10){
                $header.removeClass('slideDown').addClass('animated slideUp');
                //$('.handler').fadeOut();
            }

            if(st - lastScrollTop < -10) {
                $header.removeClass('slideUp').addClass('animated slideDown');
                //$('.handler').fadeIn();
            }

            lastScrollTop = st;
        });

    }

});