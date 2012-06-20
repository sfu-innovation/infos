var 
	mysql = require('mysql').createClient({
		host: '142.58.221.202',
		user: 'root',
		password: 'testing'
	}),
	dbname = 'catherinedb'

mysql.query('CREATE DATABASE IF NOT EXISTS ' + dbname, function(err){
	if (err){
		console.log("Unable to create databse!" + err);
		return
	}

	mysql.query("USE " + dbname, function(err){
		if (err) {
			console.log("Unable to select database.");
			return;
		}
		
		mysql.query("CREATE TABLE IF NOT EXISTS " + "ties (" + 
			"id INT NOT NULL AUTO_INCREMENT," + 
			"name VARCHAR(40)," + 
			"icon VARCHAR(250)," +
			"PRIMARY KEY (id)" + 
			")", function(err){
			if (err) {
				console.log("Unable to make table " + err);
				return;
			}
			/*
			[
				{ name: "Hawaiian", icon : "/abc" },
				{ name: "Red dots", icon : "/abc" },
				{ name: "Blue stripy", icon : "/abc" },
			].forEach(function(item){
				mysql.query('INSERT INTO ties' +
					'(name, icon) VALUES' + 
					'("' +  item.name + '","' + item.icon + '")', function(err){
						if (err)
							console.log("Error.");

					} )
			})
			*/

			var rl = require('readline');
			var i = rl.createInterface(process.stdin, process.stdout, null);

			i.question("Search? ", function(query){

				mysql.query("SELECT * FROM ties WHERE name LIKE " + mysql.escape(query + '%'), function(err, rows){
					rows.forEach(function(row){
						console.log("Got tie: " + row.name)
					})
				})
				i.close();
				process.stdin.destroy();
				mysql.end();
			})
		})
	})
		
});

