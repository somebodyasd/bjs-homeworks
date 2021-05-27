String.prototype.isPalindrome = function() {
    a = this.toUpperCase().replace(/\s/g, '');
    for (let i = 0; i < Math.floor(a.length / 2); i++) {
        if (a[i] !== a[a.length - 1 - i]) {
            return false;
        }
    }
    return true;
}




// "А роза упала на лапу Азора".isPalindrome();

function getAverageMark(marks) {
    if (!marks.length) return 0;
    let averageMark = 0;
    for (let i = 0; i < marks.length; i++) {
        averageMark += marks[i]
    }
    return Math.round(averageMark / marks.length);
}

function checkBirthday(birthday) {
    let now = Date.now();
    // const formatter = new Intl.DateTimeFormat("ru");
    let diff = now - Date.parse(birthday);
    let age = diff / 3.154e+10;

    return verdict = age > 18 ? true : false;
}