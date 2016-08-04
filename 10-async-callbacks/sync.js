// var students = ['bob', 'bill', 'sara'];
// console.log('before loop');
// for (var i = 0; i < students.length; i++) {
//   console.log(students[i]);
// };
// console.log('after loop');

//async code would have button on click in between console logs

var students = ['bob', 'bill', 'sara'];
console.log('before loop');
students.forEach(function(student) {
  console.log(student);
});
console.log('after loop');
