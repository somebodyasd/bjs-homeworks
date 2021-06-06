const parseCount = (num) => {
    if (isNaN(Number.parseInt(num))) {
        throw "Невалидное значение";
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
            throw "Треугольник с такими сторонами не существует";
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter() {
        // try {
            return 0.5 * (this.a + this.b + this.c);
        // }
        // catch (err) {
        //     return "Ошибка! Треугольник не существует";
        // }
    }
    getArea() {
        // try {
            return Number((Math.sqrt(this.getPerimeter() * (this.getPerimeter() - this.a) * (this.getPerimeter() - this.b) * (this.getPerimeter() - this.c))).toFixed(3));
        // }
        // catch (err) {
            // return "Ошибка! Треугольник не существует";
        // }
    }
}

function getTriangle (a, b, c) {
    // try {
        const triangle = new Triangle(a, b, c);
        return triangle;
    // }
    // catch (err) {
    //     let i;
    //     let j;
    //     return {
    //        i = triangle.getArea(),
    //        j = triangle.getPerimeter()
    //     }
    // }
}
