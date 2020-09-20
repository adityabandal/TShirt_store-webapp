require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");

const authRoutes = require("./routes/auth");

const app = express();

// DB connection
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("!!! DB CONNECTED !!!");
    });

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// My routes
app.use("/api", authRoutes);

// port
const port = process.env.PORT || 8000;

// starting the server
app.listen(port, () => {
    console.log(`App is running at ${port}`);
});
