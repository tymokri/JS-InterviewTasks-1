'use strict';

const inputsNumber = parseInt(prompt('Будь ласка вкажіть Ваш вік'));


if (isNaN(inputsNumber) || inputsNumber === 0 || inputsNumber < 0) {
    alert("Помилка! Будь ласка оновіть сторінку та введіть число");
} else if (inputsNumber === 1) {
    alert("Ваш вік: " + inputsNumber + " рік");
} else if (inputsNumber > 4) {
    alert("Ваш вік: " + inputsNumber + " років");
} else {
    alert("Ваш вік: " + inputsNumber + " роки");
}