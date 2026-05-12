// 1.looping statement
   //1.print numbers

for( let a=1 ; a<=20;a++){
    console.log(a);
}
//output:1.2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20

//2.odd numbers
   
   for(let i=1; i<50;i++){
    if(i%2 !==0){
        console.log(i);
    }
   }

   //output:1,3,5,,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49

// Multiplication Table of 7

for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
} 

//output:
//7 x 1 = 7
//7 x 2 = 14
//7 x 3 = 21
//7 x 4 = 28
//7 x 5 = 35
//7 x 6 = 42
//7 x 7 = 49
//7 x 8 = 56
//7 x 9 = 63
//7 x 10 = 70

//4.Reverse counting
let i=20;
while(i>=1){
    console.log(i);
    i--;
}
  //output:20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1

  //5.sum of number
  let sum=0;
  for(let i=1; i<=100; i++){
    sum=sum+i;
  }
  console.log("sum:",sum);
  //output:5050

//6.Array loop
let fruits=["apple","banana","orange","grapes"];
for(let i=0; i<fruits.length;i++){
    console.log(fruits[i]);

}
//output:
//apple
//banana
//orange
//grapes

//7.count Even Number
  let count=0;
  for(let i=1;i<=50;i++){
    if(i%2==0){
        count++;

    }
  }
  console.log("total Even number:",count);

  //output:total even number 25  

  //8.print this pattern using loops:
  for(let i=1; i<=5; i++){
    let stars="";
    for(let j=1; j<=i; j++){
       stars +="*"; 
    }
    console.log(stars);
  }
  //output:
  //*
 // **
//  ***
//  ****
//  *****

//9.simple function
function welcome(){
    console.log("Welcome to javascript");
}
welcome() 
//output: welcome to jsvascript


//10.function with parameter
const greet = (name)=> {
    console.log(`hello ${name}`);
}
greet("vaishu"); 
//output:hello vaishu



//11. Add Two numbers
 function add(num1,num2){
    return num1+num2;

 }
 let result=add(10,20);
 console.log(result);
 console.log(add(5,15));
 console.log(add(100,250));
 //output:
 //30
 //20
 //350

 //12.salary bonus
   function addbonus(salary,bonus){
    return salary+bonus;
   }
    let salary=50000;
    let bonus=5000;


    let totalsalary=addbonus(salary,bonus);
    console.log("total salary:", totalsalary);

    console.log("total:", addbonus(5000,5000));
    console.log("total:", addbonus(30000,2000));
   //output:
//Total Salary: 55000
//Total: 55000
//Total: 32000

//13.object loop
let student = {
    name: "Rahul",
    course: "JavaScript",
    marks: 95
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}


for (let key in student) {
    console.log(`${key} : ${student[key]}`);
}
//output:
//name : Rahul
//course : JavaScript
//marks : 95

//14.find largest Number
// 2 numbers la periya number return pannura function

function largest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}


console.log(largest(10, 50)); 
console.log(largest(100, 25)); 
console.log(largest(7, 7)); 
//output:
//50
//100
//7

//15.mini employee object and print
// 1. Employee object create pannurathu
let employee = {
    name: "vaishnavi",
    department: "IT",
    salary: 40000
};


function calculateTotalSalary(emp, bonus) {
    let totalSalary = emp.salary + bonus;
    
    
    console.log("Employee Name:", emp.name);
    console.log("Department:", emp.department);
    console.log("Salary:", emp.salary);
    console.log("Salary after bonus:", totalSalary);
    
    return totalSalary;
}


calculateTotalSalary(employee, 5000);
//output
//Employee Name: vaishnavi
//Department: IT
//Salary: 40000
//Salary after bonus: 45000