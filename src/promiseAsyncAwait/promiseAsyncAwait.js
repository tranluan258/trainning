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

 
console.log("Test Promise")

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
        console.log("Error")
    } catch (error) {
        console.log(error) // reject của promise sẽ log lỗi ở đây
    }
}

testAsyncAwait();

console.log("Test Async Await")