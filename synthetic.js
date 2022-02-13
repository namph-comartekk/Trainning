/**=============JavaScript Basic ================*/

/**
 * Floating point
 * 
 * 0.1+0.2 != 0.3
 * Do bộ nhớ máy tính là có hạn, ta không thể lưu con số với độ chính xác tuyệt đối.
 * Có thể sử dụng các thư viện bigjs, decimaljs, numeraljs, ... để có được kết quả chính xác, tuy nhiên sẽ làm giảm hiệu suất của ứng dụng
 * Các cách làm tròn số: toFixed(i) và một số hàm Math làm tròn number: ceil, floor, round, trunc
 */
function floatingPoint() {
    console.log("floatingPoint:");
    const a = 0.1;
    const b = 0.2;
    console.log(a + b);
    console.log(a * b);
    console.log(3 * a + 3 * b);

    let c = a + b;
    // toFixed(i) làm tròn đến i số sau dấu . 
    console.log("toFixed: 0.1+0.2=" + c.toFixed(1));
    // ceil làm tròn lên
    console.log("ceil: 0.1+0.2=" + Math.ceil(c));
    // floor làm tròn xuống
    console.log("floor: 0.1+0.2=" + Math.floor(c));
    // round làm tròn 0.5
    console.log("round: 0.1+0.2+0.3=" + Math.round(c + 0.3));
    // trunc loại bỏ phần thập phân
    console.log("trunc: 0.1+0.2=" + Math.trunc(c));
    // parseFloat để làm việc với số thập phân
    console.log(parseFloat(a + b).toPrecision(12));
}
floatingPoint();

/**
 * null and undefined
 * undefined là khi không khai báo giá trị của biến, là một kiểu của JS
 * tức là một không tồn tại, không xác định 
 * nên không thể làm việc với các phép toán +,-...
 * null là một đối tượng,  được khai báo với giá trị null, 
 * tức nó đã được khai báo nhưng không có giá trị gì 
 */

function compareNullAndUndefined() {
    console.log(typeof null); //object
    console.log(typeof undefined); //undefined
    console.log(!null); //true
    console.log(!undefined); //true
    console.log(null + 1); //1
    console.log(undefined + 1); //NaN
}
compareNullAndUndefined();

/**
 * So sánh == và ===
 * - 2 dấu bằng "==" : Chuyển đổi về cùng kiểu để so sánh
 * - 3 dấu bằng "===" : So sánh cả kiểu dữ liệu và giá trị
 */
function compareEqual() {
    const emptyObject1 = {};
    const emptyObject2 = {};
    const comparationNum1 = 3;
    const comparationNum2 = 3;
    const comparationString = '3';
    /**
     * Mặc dù null khi chuyển number sẽ là 0 và undefined chuyển thành number sẽ là NaN
     * Tuy nhiên chúng đều là false khi chuyển sang boolean, nên khi sử dụng ==, kết quả
     * vẫn là true
     */
    console.log(null == undefined); //true
    /**
     * Khi so sánh 2 object, JS sẽ thực hiện so sánh địa chỉ ô nhớ của chúng trước
     */
    console.log(emptyObject1 == emptyObject2); //false
    /**
     * Đối với các kiểu nguyên thủy, JS sẽ không so sánh địa chỉ ô nhớ
     */
    console.log(JSON.stringify(emptyObject1) === JSON.stringify(emptyObject2)); //true
    console.log(comparationNum1 === comparationNum2); //true
    console.log(comparationNum1 === comparationString); //false
    /**
     * Khi so sánh 2 dấu bằng, JS sẽ cố chuyển đổi 2 vế về cùng kiểu dữ liệu
     */
    console.log(comparationNum1 == comparationString); //true
    console.log(comparationNum1 === +comparationString); //true
}
compareEqual();

/**
 * So sánh Object
 * So sánh object qua giá trị
 * Hoặc có thể ép kiểu string
 */
console.log("Compare Object:");
// Hàm kiểm tra một giá trị là object
function isObject(obj) {
    return obj != null && typeof obj === "object";
}
// Hàm so sánh sâu với đệ quy
function isDeepEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    console.log("keys1", keys1); // trả về mảng các thuộc tính của obj1
    const keys2 = Object.keys(obj2); // trả về mảng các thuộc tính của obj2

    // nếu số lượng keys khác nhau thì chắc chắn khác nhau
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];

        // kiểm tra xem hai giá trị có cùng là object hay không
        const areObjects = isObject(val1) && isObject(val2);
        // nếu cùng là object thì phải gọi đệ quy để so sánh 2 object
        if (areObjects && !isDeepEqual(val1, val2)) {
            return false;
        }
        // nếu không cùng là object thì so sánh giá trị
        if (!areObjects && val1 !== val2) {
            return false;
        }
    }
    return true;
}
let point11 = { x: 1, y: 2, metadata: { type: "point", age: 12 } };
let point12 = { x: 1, y: 2, meta: { type: "point" } };
console.log("so sánh 2 object ", isDeepEqual(point11, point12));
console.log(JSON.stringify(point11) == JSON.stringify(point12));

/** 
 * Các vòng lặp for
 * forlet là nhanh nhất vì nó xác định điều kiện trước
 * forin lấy các chỉ số của các phần tử để thực hiện vòng lặp
 * forof lấy giá trị của các phần tử để thực hiện vòng lặp
 */
console.log("Các hàm for:")

function resFor() {
    const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let str = "";
    for (let x in numbers) {
        str += x + "." + numbers[x] + "|"
    }
    console.log(str);
    str = "";

    for (let n of numbers) {
        str += n + "|"
    }
    console.log(str);
    str = "";

    for (let i = 0; i < numbers.length; i++) {
        str += i + "." + numbers[i] + "|"
    }
    console.log(str);
}
resFor();

/**
 * So sánh typeof và instanceof
 * - Giá trị trả về của typeof là chuỗi, giá trị trả về của instanceof là boolean
 * - typeof được dùng khi ta muốn biết tên kiểu dữ liệu của biến
 * - instanceof được dùng khi ta muốn biết biến có phải là thực thể của đối tượng hay không
 */
function typeAndInstance() {
    console.log(typeof 3); //number
    console.log(typeof '3'); //string
    console.log(3 instanceof Number); //false
    console.log([] instanceof Array); //true
    console.log(null instanceof Object); //false
    console.log(typeof null); //object
}
typeAndInstance();

/**
 * Scope: phân biệt các biến có thể truy cập ở đâu
 * có phân chia đơn giản là global, trong block {} và trong function block {}
 * hay localscope, blockscope, functionscope
 * gobalscope hay toàn cục biến có thể truy cập đến mọi nơi và ở các blockscope con
 * blockspoce là khoảng trong giấu {}
 * functionscope là khoảng mà khi hàm được gọi sẽ được tạo ra một các riêng biệt 
 */

function myFunctionScope() {
    var name = "Duong";
}
myFunctionScope();
// console.log(name); biến name không thể gọi vì nó là ở trong functionscope 

if (true) {
    var agePerson = 30; // biến agePerson có thể gọi từ scope ngoài của một block
}
console.log(agePerson);

const a1 = 10;
const b1 = 1; {
    const a1 = 11;
    //lấy giá trị biến ở block ngoài nếu trong block không có biến đó
    console.log(b1);
}
//lấy giá trị biến có tại cùng scope
console.log(a1);

/**
 * Closures 
 * 1 function có thể return 1 hoặc nhiều function có trong hàm
 * để có thể giúp dút gọn code, hay để thêm bảo mật
 * vì sẽ chỉ có thể làm việc với 1 số hàm mà mình đưa ra.
 */
function addNumberClosures() {
    let n = 0;

    function add() {
        return ++n;
    }
    return add;
}
const closures = addNumberClosures();
console.log(closures()); //1
console.log(closures()); //2
console.log(closures()); //3
//Bitwise Operator
/* Đây là một phép toán đơn giản và nhanh, được hỗ trợ trực tiếp bởi bộ xử lý (processor).
 * Thông thường các phép tính bitwise nhanh hơn rất nhiều so với phép nhân, phép chia, đôi khi nhanh hơn đáng kể so với phép cộng.
 * Các phép tính bitwise sử dụng ít năng lượng hơn bởi nó ít sử dụng tài nguyên
 */

/**
 * & - AND
 * Trả về 1 nếu cả 2 bit là 1 và ngược lại là 0 nếu cả 2 bit là 0
 * | - OR	
 * Nếu 1 trong 2 bit là 1 giá trị trả về là 1, là 0 nếu cả 2 bit là 0
 * ^ - XOR	
 * Nếu hai bit khác nhau, giá trị trả về là 1, ngược lại trả về 0
 * ~ - NOT	
 * Đảo ngược tất cả các bit, 0 thành 1 và 1 thành 0.
 * << - Zero Fill
 * Dịch chuyển tất cả các bit sang bên trái.
 * >> - Sign Preserving
 * Dịch chuyển tất cả các bit sang bên phải ngoại trừ bit đầu tiên.
 * >>> - Zero Fill
 * Dịch chuyển tất cả các bit sang bên phải.
 */

/*
So sánh tham chiếu và tham trị
    *
    Tham chiếu: 2 đối tượng cùng chiếu đến một ô nhớ *
    Tham trị: 2 biến khác ô nhớ nhưng giá trị giống nhau *
    */
//Tham chiếu
const object1 = {};
const object2 = object1;
object2.data = 'data';
console.log(object1); //{ data: 'data' }
console.log(object2); //{ data: 'data' }
//Tham trị
const num1 = 1;
let num2 = num1;
num2++;
console.log(num1);
console.log(num2);

class User {
    constructor(name, emails, favorites) {
            this.name = name;
            this.emails = emails;
            this.favorites = favorites;
            this.friendRequests = [];
        }
        /**
         * Thêm sở thích
         * @param favorite - Sở thích cần thêm
         */
    addFavorite(favorite) {
            this.favorites.push(favorite);
        }
        /**
         * Xóa sở thích
         * @param favorite - Sở thích cần xóa
         */
    removeFavorite(favorite) {
        const rmIndex = this.favorites.indexOf(favorite);
        this.favorites.splice(rmIndex, 1);
    }
}
const user1 = new User(
    'Andrew', ['andrew@email.vn'], ['football', 'music', 'games']
);
const user2 = new User(
    'Anna', ['anna09091999@email.vn'], ['travel', 'shopping']
);
const users = [user1, user2];

//Tham trị
//{"emails":["andrew@email.vn"],"favorites":["football","music","games"]}
users[0].removeFavorite('music');
users[0].emails[1] = 'drw@email.com';
console.log(users);
//{"emails":["andrew@email.vn","drw@email.com"],"favorites":["football","games"]}

//Tham chiếu
console.log(JSON.stringify(users[1]));
//{"friendRequests":[]}
users[1].friendRequests[0] = users[0]; //Thêm user0 vào danh sách friendRequest của user1
users[0].favorites[1] = 'swim'; //Sửa favorite của user0
console.log(JSON.stringify(users[1])); //Ở user1, trong danh sách friendRequest, user0 bị thay đổi
//{ "friendRequests":[ { "favorites":["football","swim"] } ] }
// Class Es5
function UserEs5(name, emails, favorites) {
    this.name = name;
    this.emails = emails;
    this.favorites = favorites;
    this.friendRequests = [];
}
UserEs5.prototype.addFavorite = function(favorite) {
    this.favorites.push(favorite);
}
UserEs5.prototype.removeFavorite = function(favorite) {
    const rmIndex = this.favorites.indexOf(favorite);
    this.favorites.splice(rmIndex, 1);
}
const user1Es5 = new UserEs5(
    'Andrew', ['andrew@email.vn'], ['football', 'music', 'games']
);
const user2Es5 = new UserEs5(
    'Anna', ['anna07022001@email.vn'], ['travel', 'shopping']
);
const usersEs5 = [user1Es5, user2Es5];
// this 
/**
 * Từ khóa this là gì?
 * Từ khóa "this" được sử dụng để đại diện cho đối tượng chứa scope, nơi this được sử dụng
 */
console.log(this); //Object[global] - Nếu chạy bằng node; Window {...} - Nếu chạy bằng trình duyệt
var test = 'am I in this object?';
console.log(this); //Object[global] - Nếu chạy bằng node; Window {test: "am I in this object?", ...} - Nếu chạy bằng trình duyệt
function whatIsThis() {
    var test = 'am I in this of function?';
    console.log(this.test); //undefined - Nếu chạy bằng node, "am I in this object?" - Nếu chạy bằng trình duyệt
    console.log(test); //"am I in this of function?"
}
whatIsThis();
// bind, call, apply
/*
 * bind
 *  bind() là hàm trả về một đối tượng hàm mới, mà this của nó sẽ được thay thế bằng đối tượng được truyền vào.
 * bind() sẽ không thực hiện hàm này mà chỉ trả về một đối tượng hàm mới.
 * call
 * call() sẽ thực hiện hàm này và truyền các tham số vào hàm này.
 * call() sẽ không trả về một đối tượng hàm mới.
 * apply
 * apply() sẽ thực hiện hàm này và truyền các tham số vào hàm này.
 * apply() sẽ không trả về một đối tượng hàm mới.    
 * 
 */
var rabit = {};
rabit.speak = function(line) {
    console.log("the rabit says: " + line + "");

}
rabit.speak("hello");

function speak(libe) {
    console.log("the rabit says: " + libe + "");
}
var whiteRabbit = { type: "white", speak: speak };
var blackRabbit = { type: "black", speak: speak };
whiteRabbit.speak("oh my god");
blackRabbit.speak("oh   my god");
///////////////////////////
function speak(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
}
var whiteRabbit = { type: "white" };
var fatRabbit = { type: "fat" };
var sexyRabbit = { type: "sexy" };

speak.apply(whiteRabbit, ["I'm alive."]);
// => The white rabbit says 'I'm alive.'

speak.call(fatRabbit, "I'm alive.");
// => The fat rabbit says 'I'm alive.'

var sexyRabbitSpeak = speak.bind(sexyRabbit, "I'm alive.");
sexyRabbitSpeak();
// => The sexy rabbit says 'I'm alive.'
function Person(_name) {
    var name = _name;
    this.setName = function(_name) {
        name = _name;
    }
    this.getName = function() {
        return name;
    }
}
//es6
// let + const in ES6   
for (let i = 0; i < 10; i++) {
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
});

//Arrow function in ES6
const add = (a, b) => a + b;
console.log(add(1, 2));
//enhanced object in ES6
const person = {
    name: "Nguyễn Văn A",
    age: 20,
    job: "Developer",
    city: "Hà Nội",
    sayHello: function() {
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
    sayHello: function() {
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
        getName() {
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
const getPerson = async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    return response.data;
};
const person4 = async() => {
    const person = await getPerson();
    console.log(person);
};
person4();
//promise.all
//Promise all sẽ reject ngay khi có một Promise trong Array đưa vào return về reject
const promise1 = Promise.resolve('done!');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done!');
    }, 2000);
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
//promise.allSettled
//Promise allSettled sẽ chạy hết tất cả Promise có trong array, bất kể chúng return reject hay fulfilled,
const promise4 = Promise.resolve('done!');
const promise5 = 10;
const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done!');
    }, 2000);
});
Promise.allSettled([promise4, promise5, promise6]).then((values) => {
    console.log(values);
});
//promise.any
//Promise.any return ngay khi một Promise có state Fulfilled bất kể có nhiều Promise sẽ return về Rejected 
const promise7 = Promise.resolve('done!');
const promise8 = 10;
const promise9 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done!');
    }, 2000);
});
Promise.any([promise7, promise8, promise9]).then((values) => {
    console.log(values);
});
//promise.prototype.catch
const promise10 = Promise.resolve('done!');
const promise11 = 10;
const promise12 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('done!');
    }, 2000);
});
promise12.catch((error) => {
    console.log(error);
});
//promise.prototype.finally
const promise16 = Promise.resolve('done!');
const promise17 = 10;
const promise18 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done!');
    }, 2000);
});
promise18.finally(() => {
    console.log('finally');
});
//promise.prototype.then
const promise19 = Promise.resolve('done!');
const promise20 = 10;
const promise21 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done!');
    }, 2000);
});
promise21.then((value) => {
    console.log(value);
});
//promise.reject
//Promise.race return ngay khi một Promise đầu tiên nào đó return về bất kể (Rejected hay Fulfilled)
const promise22 = Promise.resolve('done!');
const promise23 = 10;
const promise24 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('done!');
    }, 2000);
});
promise24.catch((error) => {
    console.log(error);
});
//promise.resolve
const promise25 = Promise.resolve('done!');
const promise26 = 72;
const promise27 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done!');
    }, 2000);
});
Promise.resolve(promise25).then((value) => {
    console.log(value);
});
Promise.resolve(promise26).then((value) => {
    console.log(value);
});
Promise.resolve(promise27).then((value) => {
    console.log(value);
});
// Example of Axios using Promise
const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.log(error);
});
// Example of async and  await using Promise 
const getTodo = async(id) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    const response = await axios.get(url);
    return response.data;
}
getTodo(1).then((todo) => {
    console.log(todo);
});