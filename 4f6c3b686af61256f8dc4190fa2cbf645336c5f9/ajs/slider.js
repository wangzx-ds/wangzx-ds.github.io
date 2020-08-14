
$(document).ready(function(){
    $('.slides').slick({
        prevArrow:"<img class='a-left control-c prev slick-prev' src='/images/arrow-left.png' height='16' alt='arrow left'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='/images/arrow-right.png' height='16' alt='arrow right'>",
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    });
});
