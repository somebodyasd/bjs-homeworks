class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    set state (number) {
        if (number < 0) {
            this._state = 0;
        } else if (number > 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    }

    get state() {
        return this._state;
    }

    fix() {
        return this.state = this.state * 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, 100);
        this.type = "magazine";
    }
}

class Book extends Magazine {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, 100);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super( author, name, releaseDate, pagesCount, 100);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount, 100);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount, 100);
        this.type = "detective";
    }
}


//==================================================================


class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let book of Object.values(this.books)) {
            if (book[type] == value) {
                return book;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (const [id, book] of Object.entries(this.books)) {
            if (book.name == bookName) {
                this.books.splice(id, 1);
                return book;
            }
        }
        return null;
    }
}

//======================================================================

class StudentLog {
    constructor (name) {
        this.name = name;
        this.lessonObj = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (grade < 1 || grade > 5 || isNaN(grade)) {
            this.lessonObj[subject] = [];
            return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.` + "\n" + this.lessonObj[subject].length;
        }

        if (!(subject in this.lessonObj)) {
            this.lessonObj[subject] = [];
        }

        this.lessonObj[subject].push(grade)
        return this.lessonObj[subject].length;
    }

    getAverageBySubject(subject) {
        if (!(subject in this.lessonObj)) return 0;
        let avgScore = 0;
        for (let i = 0; i < this.lessonObj[subject].length; i++) {
            avgScore += this.lessonObj[subject][i];
        }
        return avgScore / this.lessonObj[subject].length;
    }
    getTotalAverage() {
        let avgScore = 0;
        let allScores = [];
        let allScoresSum = 0;
        if (Object.keys(this.lessonObj).length > 0) {
            for (let i = 0; i < Object.keys(this.lessonObj).length; i++) {
                allScores = allScores.concat(Object.values(this.lessonObj)[i]);
            }
            for (let i = 0; i < allScores.length; i++) {
                allScoresSum += allScores[i];
            }
            return avgScore = allScoresSum / allScores.length;
        }
    }
}

const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); // 3,75