function areaOfCircle(r){
    pi = 3.14;
    Area = pi * (r)**2
    return Area;
}
circleArea = areaOfCircle(30)
console.log(`The Area of the Circle is: ${circleArea}`);


function gradeCheck(score, totalScore){
    gradePercentage = (score/totalScore)*100;
    isPassed = gradePercentage > 75;
    return isPassed;
}

isPassingScore = gradeCheck(5, 25);
console.log(isPassingScore);