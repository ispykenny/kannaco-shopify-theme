import { data } from "flickity";

export default function () {
  let $btn = $("#AddToCart");
  let $btnCurrentText = $btn.text();

  const addToCart = (event) => {
    let bubble = $("#cart-element__qty span");
    let total;
    event.preventDefault();

    if (bubble.text().length > 0) {
      let bubbleValue = parseInt(bubble.text());
      total = bubbleValue + parseInt($("#Quantity").val());
    } else {
      total = parseInt($("#Quantity").val());
    }

    if (total <= 10) {
      $("#cart-element__qty").fadeIn();
      bubble.text(total);

      $btn.text("Added!");

      let data = {
        quantity: $("#Quantity").val(),
        id: $('[name="id"]').val(),
        options_with_values: [
          {
            name: "Cream",
            value: "Cream 2"
          },
          {
            name: "Tincture",
            value: "Tincture 2"
          },
          {
            name: "Softgel",
            value: "Softgel 1"
          }
        ],
        variant_options: [
          'Cream 2', 'Tincture 2', 'Softgel 1'
        ]
      }

      $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: data,
        dataType: 'json',
        success: function(data) {
          console.log(data)
          setTimeout(() => $btn.text($btnCurrentText), 1200);
        }

      })
      // $.post(
      //   "/cart/add.js",
      //   {
      //     quantity: $("#Quantity").val(),
      //     id: $('[name="id"]').val(),

      //   },
      //   null,
      //   "json"
      // );

      
    } else {
      alert("Unable to add to cart. Exceeded limit (10) items");
    }
  };

  $("#AddToCartForm").on('submit', event => addToCart(event))
}
