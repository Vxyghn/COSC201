 //Example using class
 //Example 1

 class Car {
    constructor(o) { this.brand = o; }
    drive() { console.log(`Driving a ${this.brand}`); }
}

new Car('Benz').drive();

//Example 2
class Counter {
    count = 0;
    increment() { console.log(++this.count); }
}

new Counter().increment(); 
