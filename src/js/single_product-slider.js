import Flickity from 'flickity';
import asNavFor from 'flickity-as-nav-for';

const prodSliderInit = () => {
  let flickity = new Flickity();
  $('.product-single__img').flickity({
    pageDots: false
  });


  $('.all-images').flickity({
    asNavFor: '.product-single__img',
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false
  });

}

export default prodSliderInit;