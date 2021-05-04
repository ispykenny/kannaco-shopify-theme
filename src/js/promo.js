import Cookies from 'js-cookie';

export default function() {

  // manual cookie reset
  const params = (new URL(document.location)).searchParams;
  if(params.get('clear') === 'true') {
    Cookies.remove('hide_promo')
  }

  const $cta = $('.promo__cta');
  const cookies_expiration = $('.promo').attr('data-expiration')
  
  let the_promo_flag = Cookies.get('hide_promo');

  if(the_promo_flag) {
    $('.promo').hide();
  }

  const copyCTA = event => {
    event.preventDefault();

    $(event.currentTarget).addClass('cta-copied')
    const copiedText = $('.copy_code').select();
    const theCopy = document.execCommand('copy')

    setTimeout(() => {
      if($(event.currentTarget).hasClass('cta-copied')) {
        $(event.currentTarget).removeClass('cta-copied')
      }
    }, 2000)
  }

  $cta.on('click', event => copyCTA(event))

  const hidePromo = (event) => {
    event.preventDefault();
    Cookies.set('hide_promo', true, {expires: parseInt(cookies_expiration)})
    $('.promo').hide();
  }
  
  $('.hide-promo--btn').on('click', event => hidePromo(event))

}