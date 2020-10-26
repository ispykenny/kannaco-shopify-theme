export default function() {
  
  if(!document.querySelector('.two-col-parent-slide')) return;
  var carousel = document.querySelector('.two-col-parent-slide');
  var flkty = new Flickity( carousel, {
    imagesLoaded: true,
    wrapAround: true,
    prevNextButtons: false,
    percentPosition: false,
    adaptiveHeight: true
  });

  var imgs = carousel.querySelectorAll('.floating-img__el');
  // get transform property
  var docStyle = document.documentElement.style;
  var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';

  flkty.on( 'scroll', function() {
    flkty.slides.forEach( function( slide, i ) {
      var img = imgs[i];
      var x = ( slide.target + flkty.x ) * -1/14;
      img.style[ transformProp ] = 'translateX(' + x  + 'px)';
    });
  });

}