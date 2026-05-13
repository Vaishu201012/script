//1. Username function
function welcomeUser(name) {
    console.log(`Welcome ${name}`);
}

welcomeUser("vaishnavi");

//Output=Welcome vaishnavi

//2.Square number function
function squareNumber(num) {
    return num ** 2;
}

console.log(squareNumber(5)); 

//Output=25

//3.Object Function

// 3. Object Function

const employee = {
    name: "vaishnavi",
    salary: 50000,

    employeeBonus: function(bonus) {
        let totalSalary = this.salary + bonus;
        console.log("Name: " + this.name);
        console.log("Total Salary: " + totalSalary);
    }
};

employee.employeeBonus(5000);

// Output:
// Name: vaishnavi
// Total Salary: 55000

//4.Scope Checking


var a = "VAR Variable";

function checkScope() {
    let b = "LET Variable";
    const c = "CONST Variable";

    console.log(a);
    console.log(b);
    console.log(c);
}

checkScope();

// Output:
// VAR Variable
// LET Variable
// CONST Variable



//5.Arrow function
const add = (a, b) => {
    console.log(a + b);
};

add(10, 20);

//output=30

//6.callback function
function multiply(a, b) {
    console.log(a * b);
}

function calculator(callback, num1, num2) {
    callback(num1, num2);
}

calculator(multiply, 10, 5);

//output=50

//7. Generator Function
function* offers() {
    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

let offer = offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

//output
//50% OFF
//Free Delivery
//Cashback

//8.Default parameter
function student(name, course = "JavaScript") {
    console.log("Name: " + name);
    console.log("Course: " + course);
}

student("vaishnavi");

//output
//Name: vaishnavi
//Course: JavaScript

//9.Currying
function multi(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}

console.log(multi(2)(3)(4));

//output = 24

//10.spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [...arr1, ...arr2];

console.log(result);

//output
//[1, 2, 3, 4, 5, 6]

//11.Object Spread - Merge two objects

const obj1 = { name: "vaishnavi" };
const obj2 = { role: "Developer" };

const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);

// Output:
// { name: 'vaishnavi', role: 'Developer' }

//12.Rest Operator

function numbers(...num) {
    console.log(num);

    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }

    console.log(sum);
}

numbers(1, 2, 3, 4);

// Output:
// [1, 2, 3, 4]
// 10

// 1. Students array - ella student object um ithula store aagum
let students = [];

// 2. Add Student - Object + Spread Operator use pannurathu
function addStudent(name, course, ...marks) {
    // Spread operator ...marks - rest operator la vaanguna marks ah spread pannuthu
    let newStudent = {
        name: name,
        course: course,
        marks: [...marks], // spread - marks array copy pannurathu
        total: 0,
        bonusTotal: 0
    };
    
    students = [...students, newStudent]; // array la new student add - spread use pannom
    console.log(`${name} added successfully!`);
}

// 3. Print Students - Array loop + Callback use pannurathu
function printStudents(callback) {
    console.log("\n--- Student List ---");
    students.forEach((student, index) => {
        console.log(`${index + 1}. Name: ${student.name}, Course: ${student.course}`);
    });
    
    // Callback function run pannu - optional
    if (callback) {
        callback();
    }
}

// 4. Calculate Marks - Function + Rest Operator
function calculateMarks() {
    students.forEach(student => {
        // reduce use panni total calculate
        student.total = student.marks.reduce((sum, mark) => sum + mark, 0);
        console.log(`${student.name} - Total Marks: ${student.total}`);
    });
}

// 5. Add Bonus Marks - Function + Parameter
function addBonusMarks(bonus) {
    console.log(`\n--- Adding ${bonus} Bonus Marks ---`);
    students.forEach(student => {
        student.bonusTotal = student.total + bonus;
        console.log(`${student.name} - After Bonus: ${student.bonusTotal}`);
    });
}

// ============ EXECUTION ============

// Students add pannurathu - rest operator ...marks
addStudent("Rahul", "JavaScript", 85, 90, 95); // 3 marks
addStudent("Priya", "Python", 78, 88); // 2 marks  
addStudent("Arjun", "Java", 92, 85, 90, 88); // 4 marks

// Print students + callback
printStudents(() => {
    console.log("All students printed!\n");
});

// Marks calculate pannurathu
calculateMarks();

// Bonus add pannurathu
addBonusMarks(10);
//output:
//Rahul added successfully!
//Priya added successfully!
//Arjun added successfully!

//--- Student List ---
//1. Name: Rahul, Course: JavaScript
//2. Name: Priya, Course: Python
//3. Name: Arjun, Course: Java
//All students printed!

//Rahul - Total Marks: 270
//Priya - Total Marks: 166
//Arjun - Total Marks: 355

//--- Adding 10 Bonus Marks ---
//Rahul - After Bonus: 280
//Priya - After Bonus: 176
//Arjun - After Bonus: 365