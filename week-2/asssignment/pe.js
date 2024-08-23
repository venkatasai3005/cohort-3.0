console.log("Current working directory:", process.cwd());

const fs=require("fs");

const data=fs.readFileSync("c.txt","utf-8");
console.log(data);