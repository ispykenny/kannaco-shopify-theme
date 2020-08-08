export default function() {
  const footerCategory = $('.footer-category');
  const footerNav = $('.footer-li');
  const navHamburger = $('[data-mobile-trigger]')
  const speed = 150;

  const toggleFooterNav = event => {
    if(!navHamburger.is(':visible')) return;
    let $this = $(event.currentTarget);

    if($this.parent().hasClass('active')) {
      $this.parent().find('.footer-li').slideUp(speed);
      $this.parent().removeClass('active');
    } else {
      $this.parent().find('.footer-li').slideDown(speed);
      $this.parent().addClass('active');
    }
  }


  footerCategory.on('click', event => toggleFooterNav(event))
}