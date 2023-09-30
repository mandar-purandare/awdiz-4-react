class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    myAge() {
        console.log(`Hello my age is ${this.age}`)
    }
}
const john = new Person('John', 30);
john.sayHello(); 
john.myAge();