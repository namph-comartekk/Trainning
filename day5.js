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
    }
    );
//promise.allSettled
//Promise allSettled sẽ chạy hết tất cả Promise có trong array, bất kể chúng return reject hay fulfilled,
const promise4 = Promise.resolve('done!');
    const promise5 = 10;
    const promise6 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done!');
        }, 2000);
    }
    );
    Promise.allSettled([promise4, promise5, promise6]).then((values) => {
        console.log(values);
    }
    );
//promise.any
//Promise.any return ngay khi một Promise có state Fulfilled bất kể có nhiều Promise sẽ return về Rejected 
const promise7 = Promise.resolve('done!');
    const promise8 = 10;
    const promise9 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done!');
        }, 2000);
    }
    );
    Promise.any([promise7, promise8, promise9]).then((values) => {
        console.log(values);
    }
    );
//promise.prototype.catch
const promise10 = Promise.resolve('done!');
    const promise11 = 10;
    const promise12 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('done!');
        }, 2000);
    }
    );
    promise12.catch((error) => {
        console.log(error);
    }
    );
//promise.prototype.finally
const promise16 = Promise.resolve('done!');
    const promise17 = 10;
    const promise18 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done!');
        }, 2000);
    }
    );
    promise18.finally(() => {
        console.log('finally');
    }
    );
//promise.prototype.then
const promise19 = Promise.resolve('done!');
    const promise20 = 10;
    const promise21 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done!');
        }, 2000);
    }
    );
    promise21.then((value) => {
        console.log(value);
    }
    );
    //promise.reject
    //Promise.race return ngay khi một Promise đầu tiên nào đó return về bất kể (Rejected hay Fulfilled)
const promise22 = Promise.resolve('done!');
    const promise23 = 10;
    const promise24 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('done!');
        }, 2000);
    }
    );
    promise24.catch((error) => {
        console.log(error);
    }
    );
//promise.resolve
const promise25 = Promise.resolve('done!');
const promise26= 72;
const promise27 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done!');
    }, 2000);
}
);
Promise.resolve(promise25).then((value) => {
    console.log(value);
}
);
Promise.resolve(promise26).then((value) => {
    console.log(value);
}
);
Promise.resolve(promise27).then((value) => {
    console.log(value);
}
);
// Example of Axios using Promise
 const axios = require('axios');   
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    axios.get(url).then((response) => {
        console.log(response.data);
    }
    ).catch((error) => {
        console.log(error);
    }
    );
// Example of async and  await using Promise 
const getTodo = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    const response = await axios.get(url);
    return response.data;
}
getTodo(1).then((todo) => {
    console.log(todo);
}
);



   




