import lazyLoad from "./lazy-load/index";
import _dropDown from "./_drop-down";
import useCaseSlide from "./use-case-slide";
import { runAboutSlider, accordion } from "./about";
import initCategorySlider from "./category-slider";
import ajaxToCart from "./ajax-to-cart";
import _craftLogo from "./_craft-logo";
import prodSliderInit from "./single_product-slider";
import productAccordion from "./accordion.js";
import byob from "./_byob";
import createTestimonialSlide from "./testimonial-slide"; 


byob();
ajaxToCart();

$(window).on({
  load: () => {
    $("body").addClass("loaded");
    if ($(".two-col-offset").length >= 2) {
      useCaseSlide();
    }
    runAboutSlider();

    // setTimeout(() => initCategorySlider() , 200)
    _craftLogo();

    if ($(".product-single")) {
      prodSliderInit();
      productAccordion();
    }

    createTestimonialSlide();
  },
});

import { showPasswordReset, justShowPassword } from "./password-reset";
showPasswordReset();

$("#init-password-reset").on("click", justShowPassword);

import mobileMenu from "./_mobile-menu";
mobileMenu();

import threeColSlider from "./_three-col";
threeColSlider();

import footer from "./footer";
import qty from "./qty";
footer();

if ($(".qty").length > 0) {
  qty();
}

import scroll from "./scroll";
import search from "./search";
import batch from "./batch";
import setFeaturedBlogMarkup from "./featured-blogs";

scroll();

search();
batch();
setFeaturedBlogMarkup();


document.querySelectorAll(".address-delete-form").forEach((deleteForm) => {
  deleteForm.addEventListener("submit", (event) => {
    const confirmMessage = event.target.getAttribute("data-confirm-message");

    if (
      !window.confirm(
        confirmMessage || "Are you sure you wish to delete this address?"
      )
    ) {
      event.preventDefault();
    }
  });
});

$(".category__list li").on("click", (event) => accordion(event));
