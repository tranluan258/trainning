const fs = require('fs');

function readFilePromise(path) {
    return new Promise(function (res,rej) {
        fs.readFile(path,{encoding:'utf8'},function (err,data) {
            if(err){
                rej(err);
            }else{
                res(data);
            }
        });
    });
}

readFilePromise('./test.js',)
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})