/**
 * Created by iocool on 2017-03-29.
 */

var config = require('config-lite');
var Mongolass = require('mongolass');
var mongolass = new Mongolass();
mongolass.connect(config.mongodb);