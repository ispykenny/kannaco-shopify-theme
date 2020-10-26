export default function() {
  let prod_item = document.querySelectorAll('.collection-grid__item');

  const setCraftClass = () => {
    if(prod_item) {
      prod_item.forEach((element, index) => {
        let title = element.querySelector('.prod-des h4').innerText;
        if(title.includes('craft') || title.includes('Craft')) {
          element.classList.add('is-craft')
        }
      })
    }
  }

  const checkParams = () => {
    let windowParam = new URLSearchParams(window.location.search);

    if(windowParam.get('prod_type') && prod_item) {
      if(windowParam.get('prod_type').includes("craft") || windowParam.get('prod_type').includes("Craft")) {
        prod_item.forEach((element) => element.style.display = 'block');
        setTimeout(() => {
          prod_item.forEach((element, index) => {
            if(!element.classList.contains('is-craft')) {
              element.style.display = 'none';
            }
          })
        })
      }
    }
  }
  
  const checkBoxes = () => {
    if(prod_item) {
      prod_item.forEach((element, index) => {
        let currentBoxes = element;  
        let text = currentBoxes.querySelector('h4').innerText;
          if(text.includes('Bundle') || text.includes('Box')) {
            document.querySelector('.collection-grid__row').prepend(currentBoxes)
          }
      })
    }
  }
  
  checkBoxes();
  checkParams();
  setCraftClass();
}