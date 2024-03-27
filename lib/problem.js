import { randomNumber, transformTextToBengali } from './helpers';

export class Problem {
  constructor(problemType, digit) {
    const x = randomNumber(digit);
    const y = randomNumber(digit);
    if (problemType === 'division') {
      this.num1 = x * y;
      this.num2 = y;
      this.symbol = '÷';
    } else if (problemType === 'multiplication') {
      this.num1 = x;
      this.num2 = y;
      this.symbol = '×';
    } else if (problemType === 'subtraction') {
      this.num1 = x > y ? x : y;
      this.num2 = x < y ? x : y;
      this.symbol = '-';
    } else {
      this.num1 = x;
      this.num2 = y;
      this.symbol = '+';
    }

    this.isBengali = false;
  }

  toBengali() {
    return {
      num1: transformTextToBengali(this.num1.toString()),
      num2: transformTextToBengali(this.num2.toString()),
      isBengali: true,
      symbol: this.symbol,
    };
  }
}
