'use strict';

const pressDrink = document.querySelectorAll('.toggle-button');
for (const item of pressDrink) {
    item.addEventListener('click', event => {
        event.currentTarget.parentElement.classList.toggle('toggle-open');
    });
}

function initCount(element) {
    const countPlus = element.querySelector('.plus');
    const countMinus = element.querySelector('.minus');
    const countInput = element.querySelector('input');
    countPlus.addEventListener('click', () => {
        countInput.valueAsNumber += 1;
    });
    countMinus.addEventListener('click', () => {
        if (countInput.valueAsNumber > 1) {
            countInput.valueAsNumber -= 1;
        }
    });
}

for (const element of document.querySelectorAll('.count')) {
    initCount(element);
}
   

