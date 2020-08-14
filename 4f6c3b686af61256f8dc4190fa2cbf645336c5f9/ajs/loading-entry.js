//LOADER -- Thanks to Petr Tichy's tutorial: https://ihatetomatoes.net/a-simple-one-page-template-with-a-preloading-screen/
var loadedCount = 0; 
var imagesToLoad = $("img").length; 
var loadingProgress = 0 

$("img").imagesLoaded({
    background: true
}).progress(function(instance,image){
    loadProgress(); 
}); 

function loadProgress(imgLoad, image){
    //Updates the progress of the greenSock timeline progressTL
    loadedCount++; 
    loadingProgress = (loadedCount/imagesToLoad) 
    TweenLite.to(progressTl, 0.7, {progress:loadingProgress, ease:Linear.easeNone});
}

//progress timeline
var progressTl = new TimelineMax({
    paused: true,
    onUpdate: progressUpdate,
    onComplete: loadComplete
});
 
progressTl
    //tween the progress bar width
    .to($('.progress span'), 1, {width:400, ease:Linear.easeNone});
 
//as the progress bar width updates and grows we put the percentage loaded in the screen
function progressUpdate()
{
    //the percentage loaded based on the tween's progress
    loadingProgress = Math.round(progressTl.progress() * 100);
 
    //we put the percentage in the screen
    $(".txt-perc").text(loadingProgress + '%');
 
}

function loadComplete() {
 
    // preloader out
    var preloaderOutTl = new TimelineMax();
 
    preloaderOutTl
        .to($('.progress'), 0.3, {autoAlpha: 0, ease:Back.easeIn})
        .to($('.loader-img'), 0.3, {autoAlpha: 0, ease:Back.easeIn}, "-=0.2")
        .to($('.txt-perc'), 0.3, {autoAlpha: 0, ease:Back.easeIn}, 0.1, "-=0.2")
        .set($('body'), {className: '-=is-loading'})
        .to($('#preloader'), .6, {autoAlpha: 0, ease:Power4.easeInOut})
        .from($(".top-nav-projects"), .3, {autoAlpha:0, ease:Power1.easeOut}, "-=0.2")
        .from($('#intro-title'), .3, {y: 20, autoAlpha: 0, ease:Power1.easeOut}, '-=0.2')
        .from($('#intro-p'), .3, {y:20, autoAlpha: 0, ease:Power1.easeOut}, '-=0.1')
        .from($('#lottie'), .3, {y: 20, autoAlpha: 0, ease:Power1.easeOut}, '-=0.1')
        .from($("#scroll-arrow"), .3, {autoAlpha: 0, ease:Power1.easeOut}, "-=0.1")
 
    return preloaderOutTl;
}

$(".arrow-container.center-aligned a").click(function() {
       $('html, body').animate({
            scrollTop: $(".full-screen.section-projects").offset().top
        }, 800);
});

