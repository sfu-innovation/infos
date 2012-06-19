
global.jihoon = "test";

function test(name, age) {
    console.log(this.jihoon);
    console.log(name+" : "+age);
}
test.jihoon = "JIHADIOON";

var empty = {
    jihoon: "Jihooooon"
}




//test();
//test.call(empty, "herp", 7);
//test.apply(empty, ["herp", 7]);

//var newFunction = test.bind(empty, "HEDY");

//newFunction(7);
//newFunction(9);
//newFunction(44);


var n =5;
for (var i = 0; i < n; ++i) {
    setTimeout((function(i) {
        console.log(i);
    }).bind(undefined, i), 1000);
    
}





