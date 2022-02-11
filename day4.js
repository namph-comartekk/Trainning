//es6
// let + const in ES6   
for ( let i=0; i<10;i++){
    console.log(i);

}
 
const todoList = ["ĐI HỌC", "ĐI ĂN", "ĐI NGỦ"];
console.log(todoList);

// Template String in ES6
const name = "Nguyễn Văn A";
const age = 20;
const job = "Developer";
const city = "Hà Nội";
console.log(`Tôi tên là ${name}, tôi ${age} tuổi, tôi là một ${job} tại ${city}`);

//promise in ES6
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done!');
    }, 2000);
});
promise.then((data) => {
    console.log(data);
  }
  );
  
//Arrow function in ES6
const add = (a, b) => a + b;
console.log(add(1, 2));
//enhanced object in ES6
const person = {
    name: "Nguyễn Văn A",
    age: 20,
    job: "Developer",
    city: "Hà Nội",
    sayHello: function () {
        console.log(`Xin chào ${this.name}`);
    }
};
person.sayHello();
//class in ES6
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Xin chào ${this.name}`);
    }
}
const person1 = new Person("Nguyễn Văn A", 20);
person1.sayHello();
//default parameter in ES6
function showMessage(message, from) {
    if (message === void 0) { message = "Hello World"; }
    if (from === void 0) { from = "Anonymous"; }
    console.log(`${message} from ${from}`);
}
showMessage();
showMessage("Hello");
showMessage("Hello", "Nguyễn Văn A");
//destructuring in ES6
const person2 = {
    name: "Nguyễn Văn A",
    age: 20,
    job: "Developer",
    city: "Hà Nội",
    sayHello: function () {
        console.log(`Xin chào ${this.name}`);
    }
};
const { name, age, job, city } = person2;
console.log(name, age, job, city);

//rest in ES6
function add(...numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    }); 
    return sum;
}
console.log(add(1, 2, 3, 4, 5));
// Enhanced obiect property in ES6
function person3(name, age) {
    const salary = "salary";
    return {
          name,
             age,
             getName(){
                return this.name + " " + this.age;
             },
             [`${ salary} ofA`]: "1000000"
  
    };
  }
  console.log(person3("Nguyễn Văn A", 20));
  console.log(person3("Nguyễn Văn A", 20).getName());

// spread in es6    
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);
// async await in es6
const axios = require("axios");
const getPerson = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    return response.data;
};
const person4 = async () => {
    const person = await getPerson();
    console.log(person);
};  
person4();

