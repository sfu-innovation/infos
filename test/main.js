// This seems to load the class
var Fruit = require('./Fruit');
var Apple = require('./Apple');

var app =  new Apple("Granny Smith", "Green");
var app2 = new Fruit("MacIntosh", "Red");

console.log( app.looks() );
console.log( app2.looks());