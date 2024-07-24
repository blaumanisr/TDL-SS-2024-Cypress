class Person {
    constructor (name, surname, birthYear, job) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.job = job;
    }

    calcAge() {
        return 2024-this.birthYear
    }
//there is no commas in class, as there is in objects
    logPersonalInfo() {
        console.log(`${this.name} is ${this.calcAge()} years old.
        ${this.name} is the ${this.job.title} in whole world
        that's why he gets ${this.job.salary} Euros every month`)
    }

    logPersonalInfo2() {
        console.log(`${this.name} is ${this.age} years old.
        ${this.name} is the ${this.job.title} in whole world
        that's why he gets ${this.job.salary} Euros every month`)
    }

    introduce() {
        console.log(`Hi my name is ${this.name}`)
    }
}

module.exports = Person

// new Person('Janis', 'Klavins', '1981', 'plumber').introduce();
new Person('Janis', 'Klavins', '1981', 'plumber').logPersonalInfo();
// new Person('Janis', 'Klavins', '1981', 'plumber').logPersonalInfo2();