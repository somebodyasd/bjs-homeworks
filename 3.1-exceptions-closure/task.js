const parseCount = (num) => {
    if (isNaN(Number.parseInt(num))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseInt(num);
};


function validateCount (count) {
    try {
        return parseCount(count);
    } catch(err) {
        return err;
    } 
}

//===========================================

class Triangle {
    constructor (a, b, c) {
        if ((a + b < c) || (a + c < b) || (c + b < a)) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
            this.a = a;
            this.b = b;
            this.c = c;
        }
        
    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let semiP = this.getPerimeter() * 0.5;
        return Number((Math.sqrt(semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c))).toFixed(3));
    }
}

const fakeTriangle = {
    getPerimeter() {
        return "Ошибка! Треугольник не существует";
    },
    getArea() {
        return "Ошибка! Треугольник не существует";
    }    
}

function getTriangle (a, b, c) {
    try {
    const triangle = new Triangle(a, b, c);
    return triangle;
    }
    catch {
        return fakeTriangle;
    }
}