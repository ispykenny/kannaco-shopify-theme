export default function() {
  let cta =  $('.cta-white');

  const animateSlide = event => {
    event.preventDefault();
    let $this = $(event.currentTarget)
    console.log($this.attr('href'))
    console.log($($this.attr('href')).offset().top)
    $('html, body').animate({
      scrollTop: $(`${$this.attr('href')}`).offset().top - $('header').height() + 'px'
    })
  }

  cta.on('click', event => animateSlide(event))
}