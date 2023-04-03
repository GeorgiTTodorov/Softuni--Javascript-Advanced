class Person {
    constructor (name, lastName, age, email) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString() {
        return `${this.name} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());
