'use strict';
require('./vendor')();

module.exports = angular.module('app', []);
// default params
var printMessage = (status) => {
// let
  let message = 'ES6';
// template string
  console.log(`${message} is ${status}`);
};
printMessage();
