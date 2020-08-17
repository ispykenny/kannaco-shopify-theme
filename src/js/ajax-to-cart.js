export default function() {
  let $btn = $('#AddToCart');
  let $btnCurrentText = $btn.text();


  const addToCart = event => {
    let bubble = $('#cart-element__qty span');
    let total;    
    event.preventDefault();
    
    if(bubble.text().length > 0) {
      let bubbleValue = parseInt(bubble.text());
       total = bubbleValue + parseInt($("#Quantity").val());
    } else {
      total = parseInt($("#Quantity").val());
    }
    
    if(total <= 10) {
      $("#cart-element__qty").fadeIn();
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
      alert('Unable to add to cart. Exceeded limit (10) items')
    }

  }
  
  $("#AddToCartForm").on('submit', event => addToCart(event))
}