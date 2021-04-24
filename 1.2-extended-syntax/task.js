"use strict";
function getResult(a,b,c){
    let x = [];
    let disc = Math.pow(b, 2) - 4 * a * c;

    if (disc < 0) {
        return x
    } 
    let firstArg, secondArg;
    firstArg = (-b + Math.sqrt(disc)) / (2 * a);
    secondArg = (-b - Math.sqrt(disc)) / (2 * a);

    if (firstArg === secondArg) {
        x = [firstArg];
    } else {
        x = [firstArg, secondArg];
    }

    return x;
}

function getAverageMark(marks){
    let averageSum = 0;

    if (marks.length > 5) {
        marks.splice(5, marks.length - 5)
    } 
    if (marks.length === 0) {
        return 0;
    } else {
        for (let i = 0; i < marks.length; i++) {
            averageSum += marks[i];
        }
        return averageSum / marks.length;
    }
}

function askDrink(name,dateOfBirthday){
    let yearsOld = dateOfBirthday.getFullYear();
    let result;
    if (new Date().getFullYear() - yearsOld >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
    return result;
}