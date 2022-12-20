console.log('hello, world');

var h1Query = document.querySelector('h1');
console.log('h1Query', h1Query);
console.dir(document.querySelector('h1'));

var idQuery = document.querySelector('#explanation');
console.log('idQuery', idQuery);
console.dir(document.querySelector('#explanation'));

var classQuery = document.querySelector('.hint');
console.log('classQuery', classQuery);
console.dir(document.querySelector('.hint'));

var pNodeList = document.querySelectorAll('p');
console.log('pNodeList', pNodeList);

var classNodeList = document.querySelectorAll('.example-link');
console.log('classNodeList', classNodeList);
