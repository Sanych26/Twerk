$(function(){
  //**************************menu btn*******************
$(".navicon").on("click", function(){
  $(".menu").show();
});

//****************esc menu btn************************
$(".esc").on("click", function(){
  $(".menu").hide();
});
$(".menu-item").on("click", function(){
  $(".menu").hide();
});

//******************esc registration btn***************************
$(".registration-esc").on("click", function(){
  $(".registration-back").hide();
  $(".registration").hide();
});
$(".registration-esc-done").on("click", function(){
  $(".registration-back").hide();
  $(".registration-done").hide();
});

//******************notebook*******************************
let endVideo = document.getElementsByClassName('video')[0];
endVideo.addEventListener('ended',endVid,true);
function endVid(){
  $(".playpause").fadeIn();
};
$(".video").parent().click(function () {
  if($(this).children(".video").get(0).paused){
    $(this).children(".video").get(0).play();
    $(this).children(".playpause").fadeOut();
  }else{
    $(this).children(".video").get(0).pause();
    $(this).children(".playpause").fadeIn();
  }
});

//**********************start btn**********
$(".course-start,.start-button").on("click",function(){
    $(".registration-back").show();
    $(".registration").show();

});
$(".registration-form, .reg-form").submit(function( event ){
    $(".registration").hide();
    $(".registration-back").show();
    $(".registration-done").show();
    console.log(event);
    setTimeout(function(){
      window.location.href = "https://t.me/galileyska_twerk";
    }, 3 * 1000);
    event.preventDefault;
    return false;
});


//***************backtotop btn*******************
  var btn = $('.backtotop');
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0},'500');
  });

//******************slider*************
var slider = document.getElementsByClassName('slider')[0];
slider.addEventListener('touchstart', handleTouchStart, false);
slider.addEventListener('touchmove', handleTouchMove, false);

var swipe = 0;
var doAnimate = false;
var containerWidth = $(".slider").width();
$(".slider .why-txt .why").css({width: containerWidth-(containerWidth*0.1)+"px"});
$(".why-txt").eq(0).css("left","0px");
$(".why-txt").eq(1).css("left",containerWidth+"px");
let viewSliders = document.querySelectorAll(".viewSlide");
let viewSlide = 0;
viewSliders[0].style.backgroundColor = "#AE73AB";

var xDown = null;
var yDown = null;
function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            if(doAnimate){
              return false;
            }
            doAnimate = true;
            setTimeout(function(){ doAnimate = false; },600);
            viewSliders[viewSlide].style.backgroundColor = "#FFFFFF";
            let leftPos = parseInt($(".why-txt").eq(0).css("left"))- containerWidth;
            let value = $(".why-txt").eq(0).find(".why").length;
            swipe += 1;
            if(swipe >= value || swipe<1){
              let backPos = parseInt($(".why-txt").eq(1).css("left"))- containerWidth;
              $(".why-txt").eq(1).animate({left:backPos+"px"}, 600);
              $(".why-txt").eq(0).animate({left:leftPos+"px"}, 600);
              $(".why-txt").eq(0).css("left",containerWidth+"px");
              $(".why-txt").eq(0).insertAfter($(".why-txt").eq(1));
              if(swipe>=value)
              swipe=swipe-value;
              viewSlide=0;
              viewSliders[0].style.backgroundColor = "#AE73AB";
            }
            else{
              viewSlide++;
              viewSliders[viewSlide].style.backgroundColor = "#AE73AB";
              $(".why-txt").eq(1).css("left",containerWidth+"px");
              $(".why-txt").eq(0).animate({left:leftPos+"px"}, 600);
            }
        } else {
            /* right swipe */
            if(doAnimate){
              return false;
            }
            doAnimate = true;
            setTimeout(function(){ doAnimate = false; },600);
            viewSliders[viewSlide].style.backgroundColor = "#FFFFFF";
               let slideValue = $(".why-txt").eq(1).find(".why").length;
                 if(swipe <= -slideValue) {
                   swipe=0;
                   $(".why-txt").eq(1).insertBefore($(".why-txt").eq(0));
            }
                 let widthFirst = $(".why-txt").eq(0).width();
                   if(swipe==0){
                     viewSlide=3;
                     viewSliders[2].style.backgroundColor = "#AE73AB";
                     $(".why-txt").eq(1).hide();
                     $(".why-txt").eq(1).css("left","0px");
                     $(".why-txt").eq(1).show();
                     $(".why-txt").eq(0).css("left",-widthFirst+"px");
              }
                   let backPrevPos = parseInt($(".why-txt").eq(0).css("left"))+ containerWidth;
                   let prevPos = parseInt($(".why-txt").eq(1).css("left"))+ containerWidth;
                     $(".why-txt").eq(0).animate({left: backPrevPos+"px"},600);
                     $(".why-txt").eq(1).animate({left: prevPos+"px"},600);
                     swipe-= 1;
                     viewSlide--;
                     viewSliders[viewSlide].style.backgroundColor = "#AE73AB";
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

//******************slide bar*************
    let slideWidth = $(".cont-txt").width();
    $(".cont-item").css("left", -slideWidth+"px");

    let bar = document.getElementsByClassName("item-slide")[0];
    let barCont = document.getElementsByClassName("cont-item")[0];
    bar.addEventListener('touchstart', barTouchStart, false);
    barCont.addEventListener('touchmove', barTouchMove, false);

    var xDown = null;
    var yDown = null;
    function getTouches(evt) {
      return evt.touches ||
             evt.originalEvent.touches;
    }

    function barTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    function barTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                /* left swipe */
                if(doAnimate){
                  return false;
                }
                doAnimate = true;
                setTimeout(function(){ doAnimate = false; },500);
                $(".cont-item").animate({left:-slideWidth+"px"}, 500);
            } else {
                /* right swipe */
                if(doAnimate){
                  return false;
                }
                doAnimate = true;
                setTimeout(function(){ doAnimate = false; },500);
                $(".cont-item").animate({left:"0px"}, 500);
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    };
//**********************video bar**********
$(".video-button").on("click",function(){
    $(".vid-back").show();
    $(".vid-open").show();
});
$(".play-open").parent().click(function () {
  if($(this).children("video").get(0).paused){
    $(this).children("video").get(0).play();
    $(this).children(".play-open").fadeOut();
  }else{
    $(this).children("video").get(0).pause();
    $(this).children(".play-open").fadeIn();
  }
});
let end = document.getElementsByClassName('vid-open')[0];
end.addEventListener('ended',playPause,true);
function playPause(){
  $(".play-open").fadeIn();
};
$(".vid-esc").on("click", function(event){
  if ($(".video-open").get(0).played){
    $(".video-open").get(0).pause();
    $(".play-open").fadeIn();
  }
  $(".vid-back").hide();
  $(".vid-open").hide();
  event.preventDefault();
  return false;
});
});
