export default function() {
  let prod_item = $('.collection-grid__item');

  const setCraftClass = () => {
    if(prod_item) {
      prod_item.each((index, element) => {
        let title = $(element).find('.prod-des h4');
        if(title.text().includes('craft') || title.text().includes('Craft')) {
          $(element).addClass('is-craft')
        }
      })
    }
  }

  const checkParams = () => {
    let windowParam = new URLSearchParams(window.location.search);

    if(windowParam.get('prod_type') && prod_item) {
      if(windowParam.get('prod_type').includes("craft") || windowParam.get('prod_type').includes("Craft")) {
        prod_item.show();
        setTimeout(() => {
          prod_item.each((index, element) => {
            if(!$(element).hasClass('is-craft')) {
              $(element).hide();
            }
            $('.filter-secondary').eq(1).addClass('active')
          })
        })
      }
    }
  }
  
  const checkBoxes = () => {
    if(prod_item) {
      prod_item.each((index, element) => {
        let currentBoxes = $(element);  
        let text = currentBoxes.find('h4').text()
          if(text.includes('Bundle') || text.includes('Box')) {
            $('.collection-grid__row').prepend(currentBoxes) 
          }
      })
    }
  }
  
  checkBoxes();
  checkParams();
  setCraftClass();
}