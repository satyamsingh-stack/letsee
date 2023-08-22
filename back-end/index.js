const express = require('express')
const cors = require("cors")
require('./db/config');
const User = require('./db/Users');
const app = express()

app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    resp.send(req.body);
})

app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user)
            resp.send(user)
        else
            resp.send({ result: "No user found " })
    }
    else
        resp.send({ result: "No user found " })
})

app.listen(5000);