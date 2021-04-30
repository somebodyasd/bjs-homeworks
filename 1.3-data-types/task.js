"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    let creditSum = amount - contribution;
    let numberOfPaidMonths = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    if ((date.getDate() - new Date().getDate) < 0) {
        numberOfPaidMonths++;
    }
    let p = percent / 12;
    let monthlyFee = creditSum - (creditSum * (p + p / (Math.pow(1 + p, numberOfPaidMonths)-1)));
    let totalAmount = numberOfPaidMonths * monthlyFee;
    return totalAmount.toFixed(2);
}

function getGreeting(name) {
    let greeting
    if (name.length === 0) {
        name = 'Аноним';
        greeting = 'Привет, мир! Меня зовут ' + name;
        return greeting;
    } else {
        greeting = 'Привет, мир! Меня зовут ' + name;
        return greeting;
        };
}