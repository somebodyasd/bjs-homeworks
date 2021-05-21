function getSolutions(a, b, c) {
    let x1, x2;
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        return {D: D,
            roots: []
        }
    }else if (D === 0) {
        x1 = -b / (2 * a);
        return {D: D, 
            roots: [x1]
        };
    } else {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {D: D,
            roots: [x1, x2]
        };
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (Boolean(result.roots[0]) === false){
        console.log('Уравнение не имеет вещественных корней');
    } else if (Boolean(result.roots[0]) === true && Boolean(result.roots[1]) === false) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`)
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
    }

}

function getAverageScore(data) {
    if (Object.keys(data).length == 0) return 'no data'; 
    let newData = {};
    newData['average'] = 0;
     for (const [key, value] of Object.entries(data)) {
         newData[key] = getAverageMark(value);
         newData['average'] += newData[key];
     }
     newData['average'] /= Object.keys(data).length;

    // for (let i = 0; i < Object.keys(data).length; i++) {
    //     Object.keys(newData)[i] += (Object.keys(data)[i]);
    //     Object.values(newData)[i] += getAverageMark(Object.values(data)[i]);
        //Object.values(newData)[i] = marks;
    // }
    return newData;
}

function getAverageMark(marks) {
    if (marks.length == 0) {
        return 0;
    }
    let sumOfMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        sumOfMarks += marks[i]; 
    }
    return marks = sumOfMarks / (marks.length);
}

// console.log(getAverageScore({
//     algebra : [4, 5, 5, 4],
//     geometry : [],
//     russian : [3, 3, 4, 5],
//     physics : [5, 5],
//     music : [ 2, 2, 5],
//     english : [4, 4, 3, 3],
//     poetry : [5, 3, 4],
//     chemistry : [2],
//     french : [4, 4]})
//     )

function getPersonData(secretData) {
    let banditName = {} ;
    if (secretData.aaa == 0) {
        banditName.firstName = "Родриго";
    }
    if (secretData.aaa == 1) {
        banditName.firstName = "Эмильо";
    }
    if (secretData.bbb == 0) {
        banditName.lastName = "Родриго";
    }
    if (secretData.bbb == 1) {
        banditName.lastName = "Эмильо";
    }
    return banditName;
}

console.log(getPersonData({
    aaa: 1,
    bbb: 0
}))