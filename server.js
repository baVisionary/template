"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var questions_1 = require("./app/backend/api/questions");
var app = express();
var port = 8042;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./app/frontend/'));
app.use('/app/backend/api/questions', questions_1["default"]);
app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '/app/frontend/index.html'));
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
exports["default"] = app;
