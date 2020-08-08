const aboutSlider = $('.about-slider');
const $contentBox = $('.category__content-item');

const runAboutSlider = () => {
  if(aboutSlider) {
    aboutSlider.flickity({
      contain: true,
      cellSelector: '.about-slider__item',
      wrapAround: true,
      prevNextButtons: false
    });

    $('.category__list ul').flickity({
      freeScroll: true,
      contain: true,
      // disable previous & next buttons and dots
      prevNextButtons: false,
      pageDots: false,
      watchCSS: true

    });
  }
  
}


const accordion = event => {
  let $activeTab = $(event.currentTarget);

  if(!$activeTab.hasClass('active')) {
    $('.category__list li').removeClass('active')
    $activeTab.addClass('active')
    $contentBox.hide();
    $contentBox.eq($activeTab.index()).fadeIn();
  } 
}



export  {runAboutSlider,  accordion };