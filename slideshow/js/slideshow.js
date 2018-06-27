// Slideshow on pure JS

var timer;

function showSlide(nameOfSlideshow, options) {
  // nameOfSlide = id or class (better a class) of the parent element of the slide

  // Read if the slideshow have "options", if not, use the defaults
  if (arguments.length >= 1) {
    let options = arguments[1];
    // Read them
    var slideIndex = options.slideIndex;
    var timming = options.timming;
    var automated = options.automated;
  } else {
    // Defaults
    var slideIndex = 0;
    var timming = 2000;
    var automated = true;
  }

  // Finding the slides
  var slides = document.getElementById(nameOfSlideshow).getElementsByClassName('slide');
  var dots = document.getElementById(nameOfSlideshow).getElementsByClassName('dot');

  // Clearing all the elements
  for (var i = 0; i < slides.length; i++) {
    // Hidding all the slides
    slides[i].style.display = 'none';
    // No active dot
    dots[i].className = 'dot';
  }

  if ((slideIndex + 1) > slides.length) {
    slideIndex = 0;
  }

  // Showing the slide
  slides[slideIndex].style.display = 'inline-block';
  // Activating the dot
  dots[slideIndex].className += ' active';

  // New options!
  options = {
    slideIndex: slideIndex + 1,
    timming: timming,
    automated: true
  }

  // Next!
  if (automated == true) {
    // if it's go auto
    timer = setTimeout(showSlide, timming, nameOfSlideshow, options);
  } else {
    // if not, first stop the timer
    clearTimeout(timer);
    // then start it again
    timer = setTimeout(showSlide, timming, nameOfSlideshow, options);
  }
}

function gotoSlide(name, n) {
  showSlide(name, { slideIndex: n-1, timming: 2000, automated: false });
}
