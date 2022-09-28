import { currencyRequest } from './js/currencyRequest';
import { markUpSelect } from './js/markUpSelect';

const input1El = document.querySelector('.converter-value1');
const select1El = document.querySelector('.currency-name1');
const input2El = document.querySelector('.converter-value2');
const select2El = document.querySelector('.currency-name2');
const clickBtn = document.querySelector('.click-btn');

let currencyResponce;
let input1;
let input2;
let currentValueInput1;
let currentValueInput2;

currencyFetch();

input1El.addEventListener('input', onInputChange1);
input2El.addEventListener('input', onInputChange2);
clickBtn.addEventListener('click', onClickBtn);
select1El.addEventListener('change', onInputChange2);
select2El.addEventListener('change', onInputChange1);

function onInputChange1(e) {
  calcValueCurrency1(currencyResponce);
}

function onInputChange2(e) {
  calcValueCurrency2(currencyResponce);
}

async function currencyFetch() {
  currencyResponce = await currencyRequest();
  currencyResponce.push({
    txt: 'Гривня',
    rate: 1,
    cc: 'UAH',
  });
  select1El.innerHTML = markUpSelect(currencyResponce, 'UAH');
  select2El.innerHTML = markUpSelect(currencyResponce, 'USD');
}

function calcValueCurrency1() {
  input1 = input1El.value;
  input2 = ((input1 * select1El.value) / select2El.value).toFixed(2);
  input2El.value = input2;
}

function calcValueCurrency2() {
  input2 = input2El.value;
  input1 = ((input2 * select2El.value) / select1El.value).toFixed(2);
  input1El.value = input1;
}

function onClickBtn() {
  currentValueInput1 = input1El.value;
  currentValueInput2 = input2El.value;

  const arr1 = select1El.options;
  const arr2 = select2El.options;

  const name1 = select1El.selectedOptions[0].textContent;
  const name2 = select2El.selectedOptions[0].textContent;

  [...arr1].map(el => {
    if (el.textContent === name1) {
      el.removeAttribute('selected');
    }
    if (el.textContent === name2) {
      el.setAttribute('selected', true);
    }
  });

  [...arr2].map(el => {
    if (el.textContent === name2) {
      el.removeAttribute('selected');
    }
    if (el.textContent === name1) {
      el.setAttribute('selected', true);
    }
  });
  input2El.value = currentValueInput1;
  input1El.value = currentValueInput2;
}
