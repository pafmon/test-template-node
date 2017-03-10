/*!
teste-template-node 1.0.0, built on: 2017-03-10
Copyright (C) 2017 pafmon
http://www.isa.us.es/
https://github.com/pafmon/test-template-node

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.*/


'use strict';

/*
 * Put here your dependecies
 */
var logger = require('./logger/logger');
var moment = require('moment');
var Promise = require('bluebird');

/*
 * If you are going to use express, please include helmet library 
 * in order to increase security in your webapp
 */
//var express = require('express');
//var helmet = require('helmet');
//var app = express();
//app.use(helmet());

/*
 * Export functions and Objects
 */
module.exports = {
    myfunction: _myfunction,
    myPromiseFunction: _myPromiseFunction
};


/*
 * Implement the functions
 */
function _myfunction(param1, param2) {

    logger.info('Hello world!');
    logger.info('Param1: %s', param1);
    logger.info('Param2: %s', param2);

    logger.custom('Date: %s', moment().toISOString());

    return param1 + "-" + param2;

}

function _myPromiseFunction(param1, param2) {

    return new Promise(function (resolve, reject) {
        if (param1 && param2) {
            resolve(param1 + "-" + param2);
        } else {
            reject(new Error("Params are required"));
        }
    });

}

console.log("System up and ready !!!");
