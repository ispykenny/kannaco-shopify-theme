export default function() {
  let $btn = $('#AddToCart');
  let $btnCurrentText = $btn.text();

  const addToCart = event => {
    let bubble = $('#cart-element__qty span');
    let bubbleValue = parseInt(bubble.text());
  
    event.preventDefault();

    let total = bubbleValue + parseInt($("#Quantity").val());


    if(total <= 11) {
      bubble.text(total);

      $btn.text('Added!')

      $.post('/cart/add.js', 
          {
            quantity: $("#Quantity").val(),
            id: $('[name="id"]').val()
          },
          null,
          'json'
        
      );

      setTimeout(() => $btn.text($btnCurrentText), 1200)
    } else {
      alert('unable to add to cart. Exceeded limit (11) items')
    }


  }
  
  $("#AddToCartForm").on('submit', event => addToCart(event))
}