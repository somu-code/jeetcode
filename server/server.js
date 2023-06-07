const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const corsMiddleware = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type", "Authorization");
}

const app = express();
app.use(corsMiddleware);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/signin", (req, res) => {
    const { email, password } = req.body;
    if (email === "example@example.com" && password === "password") {
        res.send("Login successful");
    } else {
        res.status(401).send("Invalid credentials");
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});