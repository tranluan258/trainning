const yargs = require('yargs')
const fs = require('fs')

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "path", describe: "Path file", type: "string", demandOption: true })
 .argv;

fs.readFile(options.path, {encoding: "utf-8"}, (err,data) => {
    console.log(data)
})