export default function() {
  let drop_downs = document.querySelectorAll('.dropdown__name');
  let dropDowns = document.querySelectorAll('.dropdown-parent')
  let product_options = document.querySelectorAll('.dropdown input[type="checkbox"]');
  let selected_products = [];
  let allowed_selection = 3;

  const showCounter = () => {
    dropDowns.forEach((dropDown) => {
      let indy_checkboxes = dropDown.querySelectorAll('input[type="checkbox"]');
      let numberElement = dropDown.querySelector('.count');
      let groupedChecked = [];
      for(let i = 0; i < indy_checkboxes.length; i++) {
        if(indy_checkboxes[i].checked == true) {
          groupedChecked.push(indy_checkboxes[i])
        }
        numberElement.innerHTML = `(${groupedChecked.length})`;
      }
    })
  }



  const showSelected = selected_products => {
    let selected = '';
    selected_products.forEach((product, index) => {
      selected += index == selected_products.length - 1 ? `${product}` : `${product}, `
    })
    document.querySelector('.showing-selected').innerHTML = selected;
  }

  const updateSelection = event => {
      let checkbox = event.currentTarget;
      let checkBoxValue = checkbox.getAttribute('name');
      let checkboxValueIndex = selected_products.indexOf(checkBoxValue);
    
    if(checkbox.checked == true) {
      if(selected_products.length >= allowed_selection) {
        alert('You can only select three')
        checkbox.checked = false;
        return;
      } else {
        if(!selected_products.includes(checkBoxValue)) {
          selected_products.push(checkBoxValue);
        }	
      }
      
    } else {
      selected_products.splice(selected_products.indexOf(checkBoxValue), 1)
    }
    showSelected(selected_products);
    
    showCounter();
  }


  const toggleDropDown = event => {
    let selectedItem = event.currentTarget;
    let parent = event.currentTarget.closest('.dropdown-parent');
    
    
    if(parent.classList.contains('active')) {
        parent.classList.remove('active')
    } else {
        dropDowns.forEach((dropDownItem) => {
          dropDownItem.classList.remove('active')
        })
        parent.classList.add('active')
    }
  }

  const closeDropDown = event => {
    let isDropDown = event.target.closest('.dropdown-parent');
    
    if(!isDropDown) {
      dropDowns.forEach((dropDownItem) => {
        dropDownItem.classList.remove('active')
      })
    } 
  }


  drop_downs.forEach((dropdown) => {
    dropdown.addEventListener('click', event => toggleDropDown(event))
  })

  product_options.forEach((checkbox) => {
    checkbox.addEventListener('change', event => updateSelection(event))
  })

  document.addEventListener('click', event => closeDropDown(event))
}