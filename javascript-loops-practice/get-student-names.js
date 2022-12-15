/* exported getStudentNames */
function getStudentNames(students) {
  var newArr = [];
  for (var i = 0; i < students.length; i++) {
    for (var prop in students[i]) {
      newArr.push(students[i][prop]);
    }
  }
  return newArr;
}
