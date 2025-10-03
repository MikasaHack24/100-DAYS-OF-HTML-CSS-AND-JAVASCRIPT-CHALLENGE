



    


let totalUnits = 0;
let totalGradePoints = 0;
let cgpa;

document.getElementById('addBtn').addEventListener('click', function() {
    let courseName = document.getElementById('courseName').value;
    let grade = document.getElementById('grade').value.toUpperCase();
    let unit = parseFloat(document.getElementById('unit').value);   
    let gradePoint;

    switch(grade){   
        case 'A':
        gradePoint = 5;
        break;
    case 'B':
        gradePoint = 4;         
        break;
    case 'C':
        gradePoint = 3;         
        break;      
    case 'D':
        gradePoint = 2;         
        break;
    case 'E':
        gradePoint = 1;         
        break;
    case 'F':   
        gradePoint = 0;         
        break;
}
    let course = {
        name: courseName,
        grade: grade,
        unit: unit,
        gradePoint: gradePoint
    };
    totalUnits += unit;
    totalGradePoints += (gradePoint * unit);
    
    document.getElementById('courseName').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('unit').value = '';
    console.log(course);
    document.getElementById('courseList').textContent = `Course: ${courseName}, Total Units: ${totalUnits}, Total Grade Points: ${totalGradePoints}`;
    console.log(`Total Units: ${totalUnits}, Total Grade Points: ${totalGradePoints}`);
    
})   

document.getElementById('calculateBtn').addEventListener('click', function() {


cgpa = (totalGradePoints / totalUnits).toFixed(2);
    document.getElementById('result').innerText = `Your CGPA is: ${cgpa}`;


});



// document.getElementById('calculateBtn').addEventListener('click', function() {
//     score = parseFloat(document.getElementById('scoreInput').value);

//     switch (true) {
//     case (score >= 70 && score <= 100):
//         grade = 'A';
//         document.getElementById('result').innerText = `Your grade is: ${grade}`;
//         break;

//     case (score >= 60 && score < 70):
//         grade = 'B';
//         document.getElementById('result').innerText = `Your grade is: ${grade}`;
//         break;

//     case (score >= 50 && score < 60):
//         grade = 'C';
//         document.getElementById('result').innerText = `Your grade is: ${grade}`;
//         break;

//     case (score >= 45 && score < 50):
//         grade = 'D';
//         document.getElementById('result').innerText = `Your grade is: ${grade}`;
//         break;  

//     case (score >= 40 && score < 45):
//         grade = 'E';
//         document.getElementById('result').innerText = `Your grade is: ${grade}`;
//         break;

//     case (score >= 0 && score < 40):
//         grade = 'F';
//         document.getElementById('result').innerText = `Your grade is: ${grade}`;
//         break;

//     case (isNaN(score)):
//         grade = 'Please enter a valid number.';
//         document.getElementById('result').innerText = grade;
//         break;          
//     default:
//         grade = 'Invalid score. Please enter a score between 0 and 100.';
// }
    
// });



