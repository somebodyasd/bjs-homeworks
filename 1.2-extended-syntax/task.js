"use strict";
function getResult(a,b,c){
    let x = [];
    let disc = Math.pow(b, 2) - 4 * a * c;

    if (disc < 0) {
        return x
    } else {
        let firstArg, secondArg;
        firstArg = (-b + Math.sqrt(disc)) / 2;
        secondArg = (-b - Math.sqrt(disc)) / 2;
        x = [firstArg, secondArg];
    }
    
    if (x[0] === x[1]) {
        x.pop();
    }

    return x;
}

function getAverageMark(marks){
    let avgSum = 0;
    let averageMark;
    if (marks.length > 5) {
        for (let i = marks.length; i > 5; i--) {
            marks.pop();
        }
    } 
    if (marks.length === 0) {
        averageMark = 0;
    } else {
        for (let i = 0; i < marks.length; i++) {
            avgSum += marks[i];
        }
        averageMark = avgSum / marks.length;
    }
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let yearsOld = dateOfBirthday.getFullYear();
    let now = new Date();
    let result;
    if (now.getFullYear() - yearsOld >= 18) {
        result = "Не желаете ли олд-фэшн, " + name + " ?";
    } else {
        result = "Сожалею, " + name + " , но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!";
    }
    return result;
}