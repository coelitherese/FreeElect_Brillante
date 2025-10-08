const subj1 = "FREE-ELECTIVE ";
const subj2 = "COMPUTER NETWORKING ";
const subj3 = "SYSTEM INTEGRATION ";
const subj4 = "DATA STRUCTURES ";
const subj5 = "DESIGN AND DIGITAL MEDIA "

let $grade1 = parseFloat (prompt("Please enter the grade for the subject " + subj1));
let $grade2 = parseFloat (prompt("Please enter the grade for the subject " + subj2));
let $grade3 = parseFloat (prompt("Please enter the grade for the subject " + subj3));
let $grade4 = parseFloat (prompt("Please enter the grade for the subject " + subj4));
let $grade5 = parseFloat (prompt("Please enter the grade for the subject " + subj5));

let gradeTotal = ($grade1+$grade2+$grade3+$grade4+$grade5) / 5;
let gradeAverage = gradeTotal / 5;

console.log("~~~ PRELIM GRADES ~~~")
console.log("1. " + subj1 + $grade1);
console.log("2. " + subj2 + $grade2);
console.log("3. " + subj3 + $grade3);
console.log("4. " + subj4 + $grade4);
console.log("5. " + subj5 + $grade5);
console.log("\nGRADE TOTAL: " + gradeTotal);
console.log("GRADE AVERAGE: " + gradeAverage)