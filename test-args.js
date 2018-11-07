const command = process.argv[2];
console.log(command);
const inputArgs = process.argv;
let input = "";
//console.log(inputArgs.slice(2).join(" "));
input = inputArgs.slice(3).join(" ")
console.log(input);