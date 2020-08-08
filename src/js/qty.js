export default function () {
  const qty = document.querySelectorAll('.qty');
  const change = document.querySelectorAll('.qty__change');

  const setInitialValues = () => {
    qty.forEach((element) => {
      const value = element.querySelector('input').value;
      element.querySelector('.qty__value').innerHTML = value;
    })
  }

  const doTheMathStuff = (number, equation) => {
    let newValue;
    
    if(equation === "add") {
      newValue = number + 1;
    } else { 
      if (number === 0)  {
        newValue = 0;
      } else {
        newValue = number - 1;
      }
    }
    return newValue;
  }

  const changeValue = event => {
    const currentInput = event.currentTarget;
    const parent = currentInput.closest('.qty')
    const currentValue = parent.querySelector('input').value;
    if(currentInput.classList.contains('add')) {
      
      currentInput
        .closest('.qty')
        .querySelector('input')
        .value = doTheMathStuff(parseInt(currentValue), 'add')
      
      parent
        .querySelector('.qty__value')
        .innerHTML = doTheMathStuff(parseInt(currentValue), 'add')
      
    } else {
      currentInput
        .closest('.qty')
        .querySelector('input')
        .value = doTheMathStuff(parseInt(currentValue))
      
      parent
        .querySelector('.qty__value')
        .innerHTML = doTheMathStuff(parseInt(currentValue))
    }
  }

  change.forEach((element) => {
    element.addEventListener('click', changeValue)
  })

  setInitialValues();
}