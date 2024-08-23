const fs=require("fs");

function readfile(res){
    fs.readFile("a.txt","utf-8",function(err,data){
        res(data);
    });
}


let p = new Promise(readfile);
function callback(contents){
    console.log(contents);
}
p.then(callback);

// const fs = require("fs");

// function readfile(resolve) {
//     fs.readFile("a.txt", "utf8", function (err, data) {
//         resolve(data);
//     });
// }

// function readfilepromisified() {
//     return new Promise(readfile);
    
// }

// let p = readfilepromisified();

// function callback(contents) {
//     console.log(contents);
// }

// p.then(callback)
