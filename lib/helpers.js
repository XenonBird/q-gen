export const bengaliNumerals = [
  '০',
  '১',
  '২',
  '৩',
  '৪',
  '৫',
  '৬',
  '৭',
  '৮',
  '৯',
];

export const randomNumber = (digit = 1) => {
  return Math.floor(Math.random() * Math.pow(10, digit));
};

export const transformTextToBengali = (text = '') => {
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

export const transformIntoHtmlListElement = (num1, num2, symbol, index) => {
  var indexPart = index ? `(${index}) ` : '';
  var question = indexPart + `${num1} + ${num2}`;

  const div = document.createElement('div');
  div.textContent = question;
  return div;
};

export const transformIntoHtmlAdditionStyle = (num1, num2, symbol, index) => {
  var indexPart = index ? `(${index}) ` : '';

  const div = document.createElement('div');
  div.setAttribute('class', 'addition-style-div');

  const topDiv = document.createElement('div');
  topDiv.innerHTML = `<span>${indexPart}</span><span>${num1}</span>`;

  const downDiv = document.createElement('div');
  downDiv.innerHTML = `<span>${symbol} </span><span>${num2}</span>`;

  const answerDiv = document.createElement('div');
  answerDiv.innerHTML = `<span>= </span>`;

  div.appendChild(topDiv);
  div.appendChild(downDiv);
  div.appendChild(answerDiv);
  return div;
};

export const transformIntoHtmlDivisionStyle = (num1, num2, symbol, index) => {
  var indexPart = index ? `(${index}) ` : '';

  const div = document.createElement('div');
  div.setAttribute('class', 'division-style-div');

  const indexDiv = document.createElement('div');
  indexDiv.textContent = indexPart;

  const leftDiv = document.createElement('div');
  leftDiv.textContent = num2;

  const middleDiv = document.createElement('div');
  middleDiv.textContent = num1;

  const answerDiv = document.createElement('div');
  answerDiv.textContent = `= `;

  div.appendChild(indexDiv);
  div.appendChild(leftDiv);
  div.appendChild(middleDiv);
  div.appendChild(answerDiv);
  return div;
};
