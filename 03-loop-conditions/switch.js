
var grade = 'B';

switch (grade) {
  case "A":
  case "B":
  case "C":
    console.log('Pass');
    break;
  case "D":
  case "F":
    console.log('Fail');
    break;
  default:
    console.log('Unexpected grade value entered');
}

// switch (grade) {
//   case "A":
//     console.log('Awesome job');
//     break;
//   case "B":
//     console.log('Good job')
//     break;
//   case "C":
//     console.log('Okay job');
//     break;
//   case "D":
//     console.log('Not so good job');
//     break;
//   case "F":
//     console.log('Eeeeek!');
//     break;
//   default:
//     console.log('Unexpected grade value entered');
// }

// if (grade === 'A') {
//   console.log('Awesome job')
// } else if (grade === 'B') {
//   console.log('Good job')
// } else if (grade === 'C') {
//   console.log('Okay job')
// } else if (grade === 'D') {
//   console.log('Not so good job')
// } else if (grade === 'F') {
//   console.log('Eeeeek!')
// } else {
//   console.log('Unexpected grade value entered')
// }
