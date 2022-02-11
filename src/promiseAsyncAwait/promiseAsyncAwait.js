// Example Promise
let promiseTest =  new Promise((resolve, reject) => { //executor
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            resolve(this.response)
        }
    };
    xmlHttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xmlHttp.send();
})

promiseTest
    .then(json => console.log(json))
    .catch(err => console.log(err))

// promise chain
promiseTest
    .then(json => {
        console.log(json)
        return promiseTest;
    }).then(json => console.log(json)) // wait the promiseTest
    .catch(err => console.log(err))

    
/// Example async await

async function testAsyncAwait(){
    try {
        let result  =  await promiseTest; // phần resolve  blocking
        console.log(result)
    } catch (error) {
        console.log(error) // reject của promise sẽ log lỗi ở đây
    }
}

async function testAsyncAwaitPromiseAll(){
    try {
        let  [result,result1,result2] =  await Promise.all([promiseTest,promiseTest,promiseTest])
        console.log(result,result1,result2)
    } catch (error) {
        console.log(error) // reject của promise sẽ log lỗi ở đây
    }
}


testAsyncAwaitPromiseAll();

console.log("Test Async Await")