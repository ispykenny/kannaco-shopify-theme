const showPasswordReset = () => {
  if(window.location.hash) {
    console.log(window.location.hash)
    if(window.location.hash === "#recover") {
      $('.reset-password-form').fadeIn();

      $('body, html').animate({
        scrollTop: $(window.location.hash).offset().top - $('header').outerHeight() + 'px'
      }, 700)
    }
  }
}

const justShowPassword = () => {
  $('.reset-password-form').fadeIn();
   setTimeout(() => {
    $('body, html').animate({
      scrollTop: $(window.location.hash).offset().top - $('header').outerHeight() + 'px'
    }, 700)
   }, 100)
}


export {showPasswordReset, justShowPassword };