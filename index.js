/*const result = '87';
switch (result) {
    case >='85' && <='100':
        console.log('A+ Pass with Distinction');
        break;
    case '>=80 <=84':
        console.log('Pass with Merit');
        break;
    case 'Joe':
        console.log('Hi Joe');
        break;
    case "Mary":
        console.log('Hi Mary');
        break;
    default:
        console.log('Hi');
        break;
    }*/

/*var result = 81;
if (result <=100 && >=85) {
    console.log('A+ Pass with Distinction');  
}
else if (result <=84 && >=80) {
    console.log('A Pass with Distinction');
}
else if (result >=75 && <=79) {
    console.log('A- Pass with Distinction');
}
else {
    console.log('Buy apples now'); 
}*/

/*var result = 85;
switch(true) {
    case 'Pass with Distinction':
    if ("Pass with Distinction" >=85 && <=100): {
        console.log('A+ Pass with Distinction');
    } else if(>=80 && <=84) {
        console.log('A Pass with Distinction');
    } else if(>=75 && <=79) {
        console.log('A- Pass with Distinction');
    }
    break;
    ...
    default:
}*/

/*var mark = 57;
var grade;

if (mark > 100) {console.log("Please choose a mark between 0 and 100")};

if(mark >= 75){
    grade = 1;
}
else if(mark >= 60) {}
    grade = 2;
}
else{
    grade
}
switch (grade) {
    case(1):
    console.log("Pass with Distinction");
    if( mark >= 85)
    
}*/

let grade;
let results = 76;
switch (true) {
    case (results <= 100 && results >= 85):
        grade = "A+";
    case (results <= 84 && results >= 80):      
        grade = "A";
        break;
    case (results <= 79 && results >= 75):
        grade = "A-";
        break;
    case (results <= 74 && results >= 90):
        grade = "B+";
        break;
    case (results <= 69 && results >= 65):
        grade = "B";
        break;
    case (results <= 64 && results >= 60):
        grade = "B-";
        break;
    case (results <= 59 && results >= 55):
        grade = "C+";
        break;
    case (results <= 54 && results >= 50):
        grade = "C";
        break;
    case (results <= 49 && results >= 40):
        grade = "D";
        break;
  default:
    grade = "E";
    break;
}
if (grade == "A+" || grade == "A" || grade == "A-") {
    result = ("Pass with Distinction");
}
else if (grade == "B+" || grade == "B" || grade == "B-") {
    result = ("Pass with Merit");
}
else if (grade == "C+" || grade == "C") {
    result = ("Pass");
}
else if (grade == "D") {
    result = ("Fail");
}
else {
    result = ("Fail");
}
console.log(grade + ' - ' + result);


