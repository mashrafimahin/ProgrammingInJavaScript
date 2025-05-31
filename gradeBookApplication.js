// Here I made student GradeBook System

// Let's jump to code

// At first we created a function for get average number for the class and we named it as "getAverage()"

function getAverage(totalScore){
    let avg = 0;
    for (let i = 0; i < totalScore.length; i++) {
        avg += totalScore[i];
    }
    let num = avg / totalScore.length;
    return num.toFixed(2);
}

// Then we created a function for get grade for a student number and we named it as "getGrade()"
// Here's the reference for grade 

//    100 - 90 = A++
//    80 - 89 = A
//    70 - 79 = B
//    60 - 69 = C
//    33 - 59 = D
//    32 - 0 = F

function getGrade(data){
    let grade = "";
    if (data <= 100 && data >=90) {
        grade = "A++";
    }
    else if (data <= 89 && data >=80) {
        grade = "A";
    }
    else if (data <= 79 && data >=70) {
        grade = "B";
    }
    else if (data <= 69 && data >=60) {
        grade = "C";
    }
    else if (data <= 59 && data >=33) {
        grade = "D";
    }
    else if (data < 33 && data >0) {
        grade = "F";
    }
    return grade;
}


// Then we created a function for get only passed score for a student number but if it says false then print false to the console and we named it as "getPassing()"

function getPassing(pass) {
    return getGrade(pass) !== "F";
}


// Then we created a function for final message for the student grade and we named it as "getMessage()"

function getMessage(scores , studentScore) {
    let message = "";
    if (getPassing(studentScore)) {
        message = "You passed the test.";
    } else {
        message = "You failed the test.";
    }
    return "Class average: " + getAverage(scores) + ". Your grade is: " + getGrade(studentScore) + ". " + message;
}

// Here we take some random array and number to check the code
let myArr = [50,80,85,94,99,76,85];
let number = 93;
// And finally console it.
console.log(getMessage(myArr , number));
// Yes, It worked successfully.