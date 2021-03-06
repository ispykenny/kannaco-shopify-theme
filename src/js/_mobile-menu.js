export default function() {
  let $body = $('body');
  let $mobileSlider = $('.mm-slider');
  let showingMobileMenu = false;
  let showingSearch = false;
  let $mobileSlideButtons = $('.mm-slider-btn button');
  let $mobileSearch = $("#mobile-search");
  let $mobileTrigger = $('[data-mobile-trigger]');

  const checkScreenSize = () => {
    if(!$('#mmenu').is(":visible") && showingMobileMenu) {
      $('.mm-mega').hide();
      $body.removeClass('mobileShowing');
      $mobileSlider.flickity('destroy');
      showingMobileMenu = false;
    }
  }

  let resizeTimeout = null;
  const doResizeTimeout = () => {
    resizeTimeout = setTimeout(() => {
      checkScreenSize()
    }, 400);
  },
  doResizeHandler = () => {
    if (resizeTimeout !== null) {
    clearTimeout(resizeTimeout);
    }
    doResizeTimeout();
  };

  window.onresize = () => doResizeHandler();


  const toggleSearch = event => {
    event.preventDefault();
    if(showingSearch) {
      $('.mm-search').slideUp(150);
      showingSearch = false;
    } else {
      $('.mm-search').slideDown(150);
      showingSearch = true;
    }
  }

  const initMobileMenu = event => {
    if(showingMobileMenu) {
      $('.mm-mega').hide();
      $body.removeClass('mobileShowing');
      showingMobileMenu = false;
    } else {
      $('.mm-mega').slideDown(150);
      $body.addClass('mobileShowing');
      showingMobileMenu = true;
    }
  }

  $mobileTrigger.on('click', event => initMobileMenu(event));
  $mobileSearch.on('click', event => toggleSearch(event));
}