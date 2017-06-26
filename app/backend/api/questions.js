"use strict";
exports.__esModule = true;
var express = require("express");
var request = require("request");
var router = express.Router();
router.get('/opentdb/:amount/:category/:difficulty/:type', function (req, res) {
    var url = 'https://opentdb.com/api.php/';
    var key = req.query.key;
    console.log(req.query);
    var APIcall = "" + url;
    for (var val in req.query) {
        if (req.query.hasOwnProperty(val)) {
            var element = req.query[val];
            APIcall += val + "=" + element + "&";
        }
    }
    console.log(APIcall);
    request(APIcall).then(function (data) {
        console.log(data);
        res.json(data.results);
    })["catch"](function (err) {
        res.json(err);
    });
});
exports["default"] = router;
