const Job = require('./Job');
const Person = require('./Person');
const SomeClass = require('./SomeClass');
//const Student = require('./Student');
const teacher = new Job('Teacher', 'Teach stuff', 530);
const person1 = new Person('Peter', 'Salmon', 1991, teacher);

import Student from './Student';

person1.logPersonalInfo();

//static methods
//there is such method that does not require class instance. it is attached
//to the class definition. so you will be able to call it without initiating
//new object and they can be accesed throughout the program and are kept in one
//specific memory adress.
// | 1 | 2 | 3 | 4 | 5 | ... |
//initialing new Object()
// |  1 | 2  |  3 | the new object with all of its methods  | 4  | 5  | ... |

//now we would have to reffer to object and then call the methd

//for static
// if we have a static variable or a function then it is just written in a memory cell

// |  1 | static variable  | Static method | the new object with all of its methods  | 4  | 5  | ... |

SomeClass.help();
// SomeClass.helpAgain();
const example = new SomeClass();
example.helpAgain();
// example.help();

const student1 = new Student('Linda', 'Murray', 1987, 'JavaScript Junior');
student1.introduce();
