const setHero = () => {
  $('.k-hero').flickity({
    prevNextButtons: false,
    pageDots: true,
    watchCSS: true,
    wrapAround: true,
    dragThreshold: 10
  })
  $('.k-hero__column').eq(0).addClass('active')
}

const setActiveHeader = () => {
  $('.k-hero__column').on('mouseenter', function() {
    $('.k-hero__column').each((index, $el) => {
      $($el).removeClass('active')
    })
    $(this).addClass('active')
  })
}

export {setHero, setActiveHeader};