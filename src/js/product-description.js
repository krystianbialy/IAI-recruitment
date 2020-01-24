const minus = document.getElementById('product-quantity__minus');
const plus = document.getElementById('product-quantity__plus');
const displayValue = document.getElementById('product-quantity__number');

var value = 1;

displayValue.value = value;

let updateValue = itemClicked => {
  let operator = itemClicked.target.innerText;
  displayValue.value = '';

  switch (operator) {
    case '+':
      const operationPlus = eval(value + 1);
      console.log(operationPlus);
      value = operationPlus;
      displayValue.value = value;
      break;

    case '-':
      if (value === 1) {
        value = 1;
      } else {
        const operationMinus = value - 1;
        value = operationMinus;
      }
      displayValue.value = value;
      break;
  }
};

minus.addEventListener('click', updateValue);
plus.addEventListener('click', updateValue);

displayValue.onchange = () => {
  value = displayValue.value;
  console.log(value);
  if (displayValue.value === '') {
    displayValue.value = 1;
  }
};

$(document).ready(() => {
  const $productSpecificationSelectChoice = $(
    '.product-specification-select__choice'
  );

  $productSpecificationSelectChoice.click(function() {
    const $productSpecificationSelectList = $(this).next(
      '.product-specification-select__list'
    );
    $productSpecificationSelectList.slideToggle(200);
  });
});
