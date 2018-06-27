// Slideshow on pure JS

function showSlide(nameOfSlideshow, options) {
  // nameOfSlide = id or class (better a class) of the parent element of the slide

  // Read if the slideshow have "options", if not, use the defaults
  if (arguments.length >= 1) {
    let options = arguments[1];
    // Read them
    var slideIndex = options.slideIndex;
    var timming = options.timming;
  } else {
    // Defaults
    var slideIndex = 0;
    var timming = 2000;
  }

  // Finding the slides
  var slides = document.getElementById(nameOfSlideshow).getElementsByClassName('slide');

  // Clearing all the elements
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  if ((slideIndex + 1) > slides.length) {
    slideIndex = 0;
  }

  slides[slideIndex].style.display = 'inline-block';

  options = {
    slideIndex: slideIndex+1,
    timming: timming
  }
  // Next!
  setTimeout(showSlide, timming, nameOfSlideshow, options);
}
