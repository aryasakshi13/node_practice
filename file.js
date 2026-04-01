const fs = require("fs");

//  sync call
fs.writeFileSync("./test.txt", "Hey there");

//  async 

fs.writeFile("./tv.txt", " hello world", (err) => {});


// File read

fs.readFileSync("./contact","utf-8" )



