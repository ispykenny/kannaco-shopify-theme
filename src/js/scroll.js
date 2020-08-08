export default function() {
  let windowOffSet = $(window).scrollTop();
  let didScroll = false;
  let heroParalax = $('.label-img__par');

  $.fn.inView = function(){
    var win = $(window);
    var obj = $(this);
    var scrollPosition = win.scrollTop();
    var visibleArea = win.scrollTop() + win.height() ;
    var objEndPos = (obj.offset().top + obj.outerHeight());
    return(visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
  };

  const initParalax = () => {
    if(heroParalax && !$('.mmenu__el').is(":visible")) {
      heroParalax.each((index, element) => {
        let indicator = $(element).parents('.lazy-river-container').find('.indicator-strip')
        if(indicator.inView()) {
          $(element).css({
            'transform': 'translateY('+ windowOffSet/50 +'%)'
          })
        }
      })
      $('.spaced-blob').css({
        'transform': 'translate(-'+ windowOffSet/30 +'%)'
      })
    }
  }

  initParalax();

  const updateDateScroll = () => {
    didScroll = true;
    windowOffSet = $(window).scrollTop();
  }

  const rafTicker = () => {
    if(didScroll) {
      initParalax();
      didScroll = false;
    }
    requestAnimationFrame(rafTicker);
  }

  requestAnimationFrame(rafTicker);
  $(window).on('scroll', updateDateScroll);
}