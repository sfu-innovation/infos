var 
	es = require('com.izaakschroeder.elasticsearch').createClient('142.58.221.202', 9200)

var ties = es.index('cat-db').mapping('ties');

ties.document("tie-1", {
	name: "Hawaiian",
	icon: "/path/to/icon",
	votes: [4, 5, 2, 7, 9]
	}, function(err){
		if (err)
			console.log("Unable to save document.");

})

ties.document("tie-2", {
	name: "Red Dots",
	icon: "/path/to/icon",
	votes: [1, 5, 2, 7, 9]
	}, function(err){
		if (err)
			console.log("Unable to save document.");

})

ties.search({
	query: { match_all : {}},
	filter: { prefix: { name : ""}}
}, function(err, results){
	results.hits.hits.forEach(function(result){
		var item = result._source;
		var score = item.votes.reduce(function(a, b){
			return a + b
		})/item.votes.length;
		console.log(item.name + ": " + score);
})
})