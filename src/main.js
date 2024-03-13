const generateButton = document.getElementById('generate-button');
const clearButton = document.getElementById('clear-button');
const benButton = document.getElementById('ben');
const problemType = document.getElementById('problem-type');
const digit = document.getElementById('digit');
const outputBox = document.getElementById('output-container');

generateButton.addEventListener('click', () => generate());
clearButton.addEventListener('click', () => (outputBox.innerHTML = ''));

const bengaliNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

// functions
const ifBengali = () => benButton.checked;
const getProblemType = () => problemType.value;
const getNumberOfDigit = () => digit.value;

const randomNumber = () =>
  Math.floor(Math.random() * Math.pow(10, getNumberOfDigit()));

const transformText = (text = '') => {
  var transformedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    var newChar;
    if (char === ' ') newChar = ' ';
    !isNaN(parseInt(char))
      ? (newChar = bengaliNumerals[parseInt(char)])
      : (newChar = char);
    transformedText += newChar;
  }
  return transformedText;
};

// Arithmetic operations makers
const additionSum = (quantity = 10) => {
  const container = document.createElement('div');
  for (let i = 0; i < quantity; i++) {
    const x = randomNumber();
    const y = randomNumber();
    var question = `(${i + 1}) ${x} + ${y}`;
    question = ifBengali() ? transformText(question) : question;
    const div = document.createElement('div');
    div.textContent = question;
    container.append(div);
  }
  return container;
};

const subtractionSum = (quantity = 10) => {
  const container = document.createElement('div');
  for (let i = 0; i < quantity; i++) {
    const x = randomNumber();
    const y = randomNumber();
    var question = x > y ? `(${i + 1}) ${x} - ${y}` : `(${i + 1}) ${y} - ${x}`;
    question = ifBengali() ? transformText(question) : question;
    const div = document.createElement('div');
    div.textContent = question;
    container.append(div);
  }
  return container;
};

const multiplicationSum = (quantity = 10) => {
  const container = document.createElement('div');
  for (let i = 0; i < quantity; i++) {
    const x = randomNumber();
    const y = randomNumber();
    var question = `(${i + 1}) ${x} × ${y}`;
    question = ifBengali() ? transformText(question) : question;
    const div = document.createElement('div');
    div.textContent = question;
    container.append(div);
  }
  return container;
};

const divisionSum = (quantity = 10) => {
  const container = document.createElement('div');
  for (let i = 0; i < quantity; i++) {
    const divider = randomNumber();
    const dividend = randomNumber();
    var question = `(${i + 1}) ${dividend * divider} ÷ ${divider}`;
    question = ifBengali() ? transformText(question) : question;
    const div = document.createElement('div');
    div.textContent = question;
    container.append(div);
  }
  return container;
};

const generate = () => {
  var container;
  switch (getProblemType()) {
    case '+':
      container = additionSum();
      break;
    case '-':
      container = subtractionSum();
      break;
    case 'x':
      container = multiplicationSum();
      break;
    case '÷':
      container = divisionSum();
      break;

    default:
      break;
  }
  outputBox.appendChild(container);

  // alert(
  //   `bengali->${ifBengali()} digit->${getNumberOfDigit()} type->${getProblemType()}`
  // );
};
