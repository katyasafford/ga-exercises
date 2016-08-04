var students = ['andrew', 'kevin', 'kyleigh'];

function iterator(array) {
  return function() {
    return array.pop();
  };
}

var studentGetter = iterator(students);
console.log(studentGetter());
console.log(studentGetter());
console.log(studentGetter());
console.log(studentGetter());
