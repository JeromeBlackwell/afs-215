module.exports = class User {
    constructor(num1, num2, name = "John " , age = 15) {
        this.num1 = num1;
        this.num2 = num2;
        this.name = name;
        this.age = age;
    }

    add() {
        return this.num1 + this.num2
    }

    sub() {
        return this.num1 - this.num2
    }

    mult() {
        return this.num1 *  this.num2
    }

    div() {
        return this.num1 / this.num2
    }

    Greeting() {
        return this.name + this.age
    }
}

    



