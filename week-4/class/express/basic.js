const express = require("express");

function calculateSum(a,b) {
    return a+b;
}

const app = express();

app.get("/", function(req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const ans = calculateSum(a,b);
    res.send(ans.toString())
});

app.listen(3000);


// const express = require("express");

// function calculateSum(n) {
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         ans = ans + i;
//     }
//     return ans;
// }

// const app = express();
// app.get("/", function(req, res) {
//     const n = req.query.n;
//     const ans = calculateSum(n);
//     res.send(ans.toString());
// });

// app.listen(3000);
