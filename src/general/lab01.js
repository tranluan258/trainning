const fs = require('fs')
// const yargs = require('yargs')
const INDEX_COMMAND_LINE = 2;
// eslint-disable-next-line no-undef
let path = process.argv[INDEX_COMMAND_LINE];

// eslint-disable-next-line no-undef
console.log("Process agrv:" ,process.argv);

if(path) {
    try {
        let data = fs.readFileSync(path, 'utf8')
        console.log(data)
    } catch (err) {
        console.error("Error:", err)
    }
}else {
    console.log("Please enter path in command line")
}