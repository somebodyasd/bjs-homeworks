"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (percent < 0 || isNaN(percent) == true) {
        return 'введён невалидный процент';
    }
    if (contribution < 0 || isNaN(contribution) === true) {
        return 'введён отрицательный первоначальный взнос';
    }
    if (amount < 0 || isNaN(amount) === true) {
        return 'Введенные значения некоректны';
    }
    if (new Date().getFullYear() * 12 + new Date().getMonth() > date.getFullYear() * 12 + date.getMonth()) {
        return 'указана прошедшая дата';
    }

    let creditSum = amount - contribution;
    let numberOfPaidMonths = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    if ((date.getDate() - new Date().getDate()) < 0) {
        numberOfPaidMonths++;
    }

    let p = percent / 12 / 100;
    let monthlyFee = creditSum * (p + p / (Math.pow(1 + p, numberOfPaidMonths)-1));
    let totalAmount = numberOfPaidMonths * monthlyFee;
    return Number(totalAmount.toFixed(2));
}

// function getGreeting(name) {
//     let greeting
//     if (name.length === 0) {
//         name = 'Аноним';
//         greeting = 'Привет, мир! Меня зовут ' + name;
//         return greeting;
//     } else {
//         greeting = 'Привет, мир! Меня зовут ' + name;
//         return greeting;
//         };
// }

function getGreeting(name) {
    let greeting;
    return greeting = Boolean(name) ? `Привет, мир! Меня зовут ${name}.` : `Привет, мир! Меня зовут Аноним.`
}