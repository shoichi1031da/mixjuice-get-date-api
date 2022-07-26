const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors({
    origin: "https://fukuno.jig.jp",
}));

const nowDate = () => {
    let date = new Date()

    let year = date.getFullYear() + "\n";
    let month = date.getMonth() + 1  + "\n";
    let day = date.getDate() + "\n";
    let hour = (date.getHours() + 9) % 24 + "\n";
    let minute = date.getMinutes() + "\n";
    let second = date.getSeconds() + "\n";

    let now = [year,month,day,hour,minute,second];
    return now;
}

app.get("/",(req,res) => {
    let sendDate = "";
    let index = 0;
    if(req.query.i)index = req.query.i;
    index = parseInt(index,10);
    let now = nowDate();
    for (let t of now) {
        index = index % 102 ; // Maximum number of elements in an array is 102.
        sendDate = sendDate + "[" + index + "]=" + t;
        index++;
    }
    console.log(sendDate);
    res.send(sendDate);
    }
)

app.listen(PORT, () => {
    console.log("running server on " + PORT);
})