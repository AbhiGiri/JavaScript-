//// "Map", "Filter", and Reduce are basically "Array Methods". 

// They are used to iterate over an Array, and perform a Transformation/Computation.
// Each may or may not retrun a new array, based on the result of the function.

// Map: Map Method is used for creating a New Array from existing one, 
//      by applying a function to each of the elements of the array.

// "map"    Returns "Each & Every Value", and Modifies it accoding to the "condition of the callback".
// "filter" Returns only those value, which "satisfies the "condition of the callback"".


const students = [
  { name: "Abhi",     rNum: 03, marks: 65 },
  { name: "Abhis",    rNum: 05, marks: 39 },
  { name: "Abhishe",  rNum: 07, marks: 70 },
  { name: "Abhishek", rNum: 09, marks: 80 }
];

//// [1]. Return "name" of the students in Capital. 

const names1 = students.map((stu) => stu.name.toUpperCase());
console.log(names1);


//// [2]. Return Only details of those who scored more than 60. 

const names2 = students.filter((stu) => stu.marks > 60);
console.log(names2);


//// [3]. Return only details of those who scored more than 60, and Roll Number less than 4.

const names3 = students.filter((stu) => stu.marks > 60 && stu.rNum < 04);
console.log(names3);


//// [4]. Return Sum of marks of all the students. 

const total_marks = students.reduce((acc, curr) => {
  acc += curr.marks;
  return acc;
}, 0);
console.log(total_marks);

//// OR... "one liner code" without "return" >>>>>>>>>
// const totalMarks = students.reduce((acc, curr) => acc + curr.marks, 0);
// console.log(totalMarks);


//// [5]: Return only names who scores more than 65.

const names5 = students
  .filter((stu) => stu.marks > 65)
  .map((stu) => stu.name);

console.log(names5);


//// (6): Return total marks, for students who scored more than 60 after 20 marks have
//  been added to those who scored less than 60;

const totalMarks = students.map((stu) => {
  if (stu.marks < 60) {
    stu.marks += 20
  };
  return stu;
})
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(totalMarks);

