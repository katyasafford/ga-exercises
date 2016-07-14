var students = {};

students['bob'] = 99;
students['sam'] = 82;
students['fred'] = 69;

//console.log(students);

var studentName = 'fred';

//console.log(studentName + " score was " + students[studentName]);

// for(var key in students) {
//   console.log(key);
// }
//
// for(var key in students) {
//   console.log(students[key]);
// }

for (var key in students) {
  console.log(key + "'s score is " + students[key]);
}
