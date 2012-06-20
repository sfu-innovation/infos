var 
	client = require('redis').createClient(6379, '142.58.221.202');
/*
client.set("best-person", "catherine", function(){
	console.log("best person set.");
});
*/

client.info(function(err, info){
	console.log(info);
});
client.get("best-person", function(err, a){
	console.log("The best person is " +  a);

	client.end();
})

client.expire("best-person", 1)