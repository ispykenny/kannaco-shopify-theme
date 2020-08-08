export default function() {
  
  const showSearch = event => {
    event.preventDefault();
    
    if($('body').hasClass('showing-search')) {
      $('body').removeClass('showing-search');
    } else {
      $('body').addClass('showing-search');
    }
  }


  $('#main-nav-dk li:last-of-type').on('click', event => showSearch(event))

  $('.cancel').on('click', event => showSearch(event));
}