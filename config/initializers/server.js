
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    http = require('http'),
    path = require('path'),
    url = require('url'),
    app;

var start = function(cb) {
    'use strict';
    // Configure express
    app = express();

    if (cb) {
        return cb();
    }
};

module.exports = start;
