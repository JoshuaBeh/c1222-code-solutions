var booksArr = [
  {
    isbn: '0001',
    title: 'The Hobbit',
    author: 'J. R. R. Tolkien'
  },
  {
    isbn: '0002',
    title: 'Harry Potter',
    author: 'J. K. Rowling'
  },
  {
    isbn: '0003',
    title: 'Eragon',
    author: 'Christopher Paolini'
  }
];
console.log('jsonArr:', booksArr);

var jsonArr = JSON.stringify(booksArr);
console.log('Stringify of booksArr:', jsonArr);

var studentJsonString = '{"id":"101","name":"Joe"}';
console.log('typeof studentJsonString:', typeof studentJsonString);

var parsedStudentJsonString = JSON.parse(studentJsonString);
console.log('parsed studentJsonString:', parsedStudentJsonString);
console.log('typeof parsedStudentJsonString:', typeof parsedStudentJsonString);
