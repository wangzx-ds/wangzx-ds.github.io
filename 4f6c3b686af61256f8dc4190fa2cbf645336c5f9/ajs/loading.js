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
    .to($('.pace-progress span'), 1, {width:3000, ease:Linear.easeNone});
 
//as the progress bar width updates and grows we put the percentage loaded in the screen
function progressUpdate()
{
    //the percentage loaded based on the tween's progress
    loadingProgress = Math.round(progressTl.progress() * 100);
 
}

function loadComplete() {
 
    // preloader out
    var preloaderOutTl = new TimelineMax();
 
    preloaderOutTl
        .to($('.pace-progress'), 0.3, {autoAlpha: 0, ease:Back.easeIn})
        .set($(".pace"),{className: "+=pace-inactive"})
        .set($('body'), {className: '-=is-loading'})
        // .set($('h1'), {className: '-=is-hidden'})
        // .set($('h1'), {className: '+=is-visible'})
        // .from($('h1'), 0.3, {x:-600, autoAlpha: 0, ease:Power1.easeOut})
        // .from($('.project-banner-image'), 0.6, {x:600, autoAlpha: 0, ease:Power1.easeOut},'-=.6')
        // .from($('.banner-video-container'), 0.6, {autoAlpha: 0, ease:Power1.easeOut})
    return preloaderOutTl;
}