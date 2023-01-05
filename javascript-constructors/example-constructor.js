function ExampleConstructor() {

}
console.log('value of ExampleConstructor prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor prototype:', typeof ExampleConstructor.prototype);

var myExampleConstructor = new ExampleConstructor();
console.log('value of myExampleConstructor:', myExampleConstructor);

var instanceOfCheck = myExampleConstructor instanceof ExampleConstructor;
console.log('Is myExampleConstructor an instance of original function?:', instanceOfCheck);
