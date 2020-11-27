export default function () {
  const createTestimonialSlide = () => {
    let selector = $(".has-slider-full-width-banner");

    if (selector.find(".content-container").length > 1) {
      selector.flickity({
        pageDots: false,
        autoPlay: 3000,
        prevNextButtons: false,
        pauseAutoPlayOnHover: false,
        wrapAround: true,
        adaptiveHeight: true,
      });
    }
  };

  if (document.querySelector(".has-slider-full-width-banner")) {
    createTestimonialSlide();
  }
}
