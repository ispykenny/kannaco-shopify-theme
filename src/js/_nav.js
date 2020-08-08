export default function() {
  let $body = $('body');
  

  // mega nav slider

  let $dropDownDesktop = $("#has-menu-dropdown");
  let $sliderParent = $('.mega__slider');

  let $sliderButton = $('#mega-slide-buttons button');
  let $menuNavUl = $('.is-mega-nav__el');
  let showingMega = false;
  let userEnableTransition;
  let clearAddedClass;
  let $megaContainer = $('#mega-menu-container');


 
  const slideSlider = event => {
    let $this = $(event.currentTarget);
    if($this.hasClass('prev')) {
      $sliderParent.flickity('previous');
    } else {
      $sliderParent.flickity('next');
    }
  }

  $body.addClass('mega-showing');
  $sliderParent.flickity({
    cellAlign: 'left',
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
    draggable: false,
    bgLazyLoad: true
  });
  $body.addClass('mega-set');
  $body.addClass('user-enabled');
  
  $menuNavUl.addClass('active')
  showingMega = true;

  $(window).on('load', () => {
    clearTimeout(userEnableTransition);
      clearTimeout(clearAddedClass);
      $body
        .removeClass('mega-showing')
        .removeClass('mega-set')
        .removeClass('user-enabled');
      $menuNavUl.removeClass('active');
      showingMega = false;
      $sliderParent.flickity('destroy');
  })

  const initMegaMenu = (event, leftMobileMenu) => {
    event.preventDefault();
    
    
    if(showingMega || leftMobileMenu) {
      clearTimeout(userEnableTransition);
      clearTimeout(clearAddedClass);
      $body
        .removeClass('mega-showing')
        .removeClass('mega-set')
        .removeClass('user-enabled');
      $menuNavUl.removeClass('active');
      showingMega = false;
      $sliderParent.flickity('destroy');
    } else {
      
      $body.addClass('mega-showing');
      $sliderParent.flickity({
        cellAlign: 'left',
        pageDots: false,
        prevNextButtons: false,
        wrapAround: true,
        draggable: false,
        bgLazyLoad: true
      });
      $body.addClass('mega-set');
      userEnableTransition = setTimeout(() => {
        $body.addClass('user-enabled');
      }, 1100)
      $menuNavUl.each((index, element) => {
        let $this = $(element);
        clearAddedClass = setTimeout(() => {
          $this.addClass('active')
        }, 80 * index)
      })
      showingMega = true;
    }
  }

  $sliderButton.on('click', event => slideSlider(event));
  $dropDownDesktop.on('click', event => initMegaMenu(event));
  $megaContainer.on('mouseleave', event => initMegaMenu(event, true))
}