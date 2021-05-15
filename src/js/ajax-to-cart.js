import { data } from "flickity";

export default function () {
  // let $btn = $("#AddToCart");
  // let $btnCurrentText = $btn.text();

  const addToCart = (event) => {
    // event.preventDefault();
    let $current = $(event.currentTarget);
    let currentValue = parseInt($('#cart-element__qty span').text())
    

    let newValue = currentValue + 1;

    console.log(newValue + 1)
    

    $('#cart-element__qty span').text(newValue)
    $('#cart-element__qty span').parent().removeClass('hide')


    console.log($current.find('.variant-prod').val())

    
      // $.ajax({
      //   type: 'POST',
      //   url: '/cart/add.js',
      //   data: data,
      //   dataType: 'json',
      //   success: function(data) {
      //     console.log(data)
      //     setTimeout(() => $btn.text($btnCurrentText), 1200);
      //   }

      // })
      $.post(
        "/cart/add.js",
        {
          quantity: 1,
          id: $current.find('.variant-prod').val()

        },
        null,
        "json"
      );

      $current.find('button').text('Added to cart!')

      setTimeout(() => {
        $current.find('button').text('Add to cart')
      }, 1000)

      console.log('working')
  };

  $(".inf-btn").on('submit', event => addToCart(event))
}
