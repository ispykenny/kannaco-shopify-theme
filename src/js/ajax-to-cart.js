export default function() {
  let bubble = $('#cart-element__qty span');
  let bubbleValue = bubble.text()

  const addToCart = event => {
    event.preventDefault();

    $.post('/cart/add.js', $('form[action="/cart/add"]').serialize());


  }
  

  // $("#addToCart").on('click', function(event) {
  //   event.[reve]
  //   let qty = parseInt($("#Quantity").val());
  //   let updateNumber = parseInt(bubbleValue) + qty;

  //   console.log(updateNumber, 'here')
  //   bubble.html(updateNumber)
  // })
  $("#AddToCartForm").on('submit', event => addToCart(event))
}