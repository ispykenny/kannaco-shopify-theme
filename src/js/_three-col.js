export default function() {
  let $threeColSlider = $('.three-col');

  if($threeColSlider) {
    $threeColSlider.flickity({
      watchCSS: true,
      wrapAround: true,
      dragThreshold: 8
    });
  }
}