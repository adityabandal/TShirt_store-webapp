const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) => {
    return res.send("homepage");
});

app.get("/login", (req, res) => {
    return res.send("You are visiting login route");
});

app.get("/signup", (req, res) => {
    return res.send("You are signed up");
});

app.get("/signout", (req, res) => {
    return res.send("You are logged out");
});

app.get("/aditya", (req, res) => {
    return res.send("How u doin?");
});

const admin = (req, res) => {
    return res.send("Admin dashboard");
};
const isAdmin = (req, res, next) => {
    console.log("isAdmin is running");
    next();
};
const isLoggedIn = (req, res, next) => {
    console.log("User logged in");
    next();
};
app.get("/admin", isLoggedIn, isAdmin, admin);

app.listen(port, () => {
    console.log("Server is running...");
});
