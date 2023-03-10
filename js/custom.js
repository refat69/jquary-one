$(".img-main").slick({
    slidesToShow: 2,
    slidesToScroll:1,
    autoplay: true,
    speed:2000,
    nextArrow:".next",
    prevArrow:".prev",
    dots:true,
});
//counter timer
var countDownDate = new Date("Jan 23, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo1").innerHTML = days + "d ";
  document.getElementById("demo2").innerHTML = hours + "h ";
  document.getElementById("demo3").innerHTML = minutes + "m ";
  document.getElementById("demo4").innerHTML = seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
//counter up
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
