const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("server started");
});

app.get("/", (req, res) => {
    res.send({ name: "nishant" });
});
