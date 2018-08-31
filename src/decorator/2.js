const { autobind }  = require('core-decorators');

class Person {
    @autobind
    getPerson() {
        return this;
    }
}

let person = new Person();
let getPerson = person.getPerson;

console.log(getPerson() === person);
