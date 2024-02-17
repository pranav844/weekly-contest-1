let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

document.getElementById("mapButton").addEventListener("click", PrintStudentswithMap);
document.getElementById("forEachButton").addEventListener("click", PrintStudentsbyForEach);
document.getElementById("addDataButton").addEventListener("click", addData);
document.getElementById("removeFailedButton").addEventListener("click", removeFailedStudent);
document.getElementById("concatenateButton").addEventListener("click", concatenateArray);

function PrintStudentswithMap() {
  const studentsOver50 = arr.filter(student => student.marks > 50);
  studentsOver50.forEach(student => console.log(student));
}

function PrintStudentsbyForEach() {
  arr.forEach(student => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function addData() {
  const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(newStudent);
}

function removeFailedStudent() {
  arr = arr.filter(student => student.marks >= 50);
  console.log(arr);
}

function concatenateArray() {
  const newArray = [
    { id: 5, name: "alice", age: "21", marks: 70 },
    { id: 6, name: "bob", age: "22", marks: 55 },
    { id: 7, name: "charlie", age: "20", marks: 65 }
  ];
  arr = arr.concat(newArray);
  console.log(arr);
}
