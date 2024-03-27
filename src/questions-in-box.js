import {
  transformIntoHtmlAdditionStyle,
  transformIntoHtmlDivisionStyle,
  transformTextToBengali,
} from '../lib/helpers';
import { Problem } from '../lib/problem';

const generateButton = document.getElementById('generate-button');
const clearButton = document.getElementById('clear-button');
const benButton = document.getElementById('ben');
const problemType = document.getElementById('problem-type');
const digit = document.getElementById('digit');
const outputBox = document.getElementById('output-container');

generateButton.addEventListener('click', () => generate());
clearButton.addEventListener('click', () => clear());

// functions
const ifBengali = () => benButton.checked;
const getProblemType = () => problemType.value;
const getNumberOfDigit = () => digit.value;

// var problems = [];
var currentIndex = 0;

const generate = () => {
  const type = getProblemType();
  const digit = getNumberOfDigit();
  const bengali = ifBengali();

  for (let i = 0; i < 10; i++) {
    var problem = new Problem(type, digit);
    if (bengali) problem = problem.toBengali();
    var index = ++currentIndex;
    if (bengali) index = transformTextToBengali(index.toString());
    var div;
    if (type === 'division') {
      div = transformIntoHtmlDivisionStyle(
        problem.num1,
        problem.num2,
        problem.symbol,
        index
      );
    } else {
      div = transformIntoHtmlAdditionStyle(
        problem.num1,
        problem.num2,
        problem.symbol,
        index
      );
    }
    outputBox.appendChild(div);
  }
};

const clear = () => {
  outputBox.innerHTML = '';
  currentIndex = 0;
};
