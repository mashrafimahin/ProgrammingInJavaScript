/*
 ! Concept: check grade and then send message.

 ? Proccess:
    * set grade
    * set limit
    * send message with grade
*/

// set grade 
function setGrade(value) {
    let grade = '';

    if (value < 100 && value > 79) {
        grade += 'A+'
    }
    else if (value < 79 && value > 69) {
        grade += 'A'
    }
    else if (value < 69 && value > 59) {
        grade += 'B'
    }
    else if (value < 59 && value > 49) {
        grade += 'C'
    }
    else if (value < 49 && value > 39) {
        grade += 'D'
    }
    else {
        grade += 'F'
    }

    return grade;
}

// set limit
function hasPassed(value) {
    if (setGrade(value) === 'F') {
        return false;
    } else {
        return true;
    }
}


// send message
function message(value) {
    let func = setGrade(value);
    let func2 = hasPassed(value);

    let report = '';
    
    if (func2) {
        report += 'You passed the exam.';
    } else {
        report += 'You failed the exam.'
    }

    return `${report} Your grade is: ${func} and score is ${value}`;
}

message(70);
message(20);