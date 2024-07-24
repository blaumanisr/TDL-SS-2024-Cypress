let Person = require('./Person.js');
class Student extends Person {
  //there is a method named super()
  //that inherits all variables and methods from parent class
  constructor(name, surname, birthYear, course) {
    super(name, surname, birthYear, null);
    this.course = course;
  }
}

module.exports = Student;
