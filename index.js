require("./connection");

const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const cors = require("cors");
const https = require("https");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "default")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 5500;
app.use(cors());

const server = app.listen(port, () => console.log(`server running at ${port}`));
module.exports = server;
