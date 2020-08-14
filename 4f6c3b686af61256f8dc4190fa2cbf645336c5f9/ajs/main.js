$( document ).ready(function() { 

    var winHeight = $(window).height(),
    docHeight = $(document).height(),
    sectionZero = $('.section-banners'),
    sectionZeroHeight = sectionZero.height(), 
    progressBar = $('progress'),
    max,value; 

    // $('.bookmarks').fadeOut('fast');
    // progressBar.fadeOut('fast');

    var topOfSectionOne = $("#article-section-one").offset().top - 200,
    topOfSectionTwo = $("#article-section-two").offset().top - 200,
    topOfSectionThree = $("#article-section-three").offset().top - 200;

    max = docHeight - winHeight - sectionZeroHeight;  
    progressBar.attr("max",max);

    $(".nav-to-top a").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });


    $("#bm-one").click(function() {
        $("html, body").animate({ scrollTop: topOfSectionOne + 200 }, "slow");
    });

    $("#bm-two").click(function() {
        $("html, body").animate({ scrollTop: topOfSectionTwo + 200 }, "slow");
    });

    $("#bm-three").click(function() {
        $("html, body").animate({ scrollTop: topOfSectionThree + 200 }, "slow");
    });

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.top-nav-projects').outerHeight();
    $(window).scroll(function() {
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
        hasScrolled();
        didScroll = false;
        }
    }, 150);

    function hasScrolled() {
        //hide navbar on scrolling down 
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop){
            $('.top-nav-projects').removeClass('nav-down').addClass('nav-up');
        } else {
            $('.top-nav-projects').removeClass('nav-up').addClass('nav-down');
        }
        lastScrollTop = st;
        //show bookmarks only after st>600 
        if (st>600)
        {
            $(".bookmarks").removeClass("hidden");
            $(progressBar).removeClass("hidden");
            $( ".nav-to-top" ).fadeIn(); 
            progressBar.fadeIn();
            $('.bookmarks').fadeIn();
        }
        else
        {
            $( ".nav-to-top" ).fadeOut(); 
            progressBar.fadeOut(); 
            $('.bookmarks').fadeOut();
        }
    }

    $(document).on('scroll',function(){
        value = $(window).scrollTop() - sectionZeroHeight; 
        progressBar.attr('value',value);

        if ($(window).scrollTop()>topOfSectionOne){
            $("#bm-one").css('opacity',1); 
            if ($(window).scrollTop()>topOfSectionTwo){
                $("#bm-two").css('opacity',1);
                $("#bm-one").css('opacity',.4);
                if ($(window).scrollTop()>topOfSectionThree){
                    $("#bm-three").css('opacity',1); 
                    $("#bm-two").css('opacity',.4);
                    $("#bm-one").css('opacity',.4);
                } else {$("#bm-three").css('opacity',.4);}
            } else {$("#bm-two").css('opacity',.4);}
        } else {
            $("#bm-one").css('opacity',.4);
        };
    });
});