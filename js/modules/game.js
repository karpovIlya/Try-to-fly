'use strict';

export default class Game {
  constructor(inputsSelector, heroSelector, ...requiredOtions) {
    this._inputs = document.querySelectorAll(inputsSelector);
    this._hero = document.querySelector(heroSelector);
    this._requiredOtions = requiredOtions;

    this._inputs.forEach(input => {
      input.addEventListener('input', () => {
        this.useEnteredStyle();
        this.checkCode();
      });
    });
  }

  checkCode() {
    let countRightAnswer = 0;

    for (let i = 0; i < this._inputs.length; i++) {
      for (let j = 0; j < this._requiredOtions.length; j++) {
        if (this._inputs[i].value === this._requiredOtions[j]) {
          countRightAnswer++;
        }
      }
    }

    if (countRightAnswer === this._requiredOtions.length) {
      alert('Ты прошел этот уровень, молодец, ты на шаг ближе ко знанию flexbox!');
      this.resetTask();
    }
  }

  resetTask() {
    this._inputs.forEach(input => {
      input.value = '';
    });

    this._hero.style.cssText = '';
  }

  returnInputValueInText() {
    let result = '';

    this._inputs.forEach(input => {
      result += input.value + '\n';
    });

    return result;
  }

  useEnteredStyle() {
    console.log();
    this._hero.style.cssText = `
      ${this.returnInputValueInText()};
    `;
  }
}