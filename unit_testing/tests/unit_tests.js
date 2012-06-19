var fs = require('fs');
eval(fs.readFileSync('../config.js', encoding='ascii'));
var should  = require('should');
var Accounts = require('../models/account');
var server = require('../server.js');
var http = require('http');
var express = require('express');



module.exports = {

	serverTests: {
		setUp: function(callback){
			this.server = express.createServer();
			this.server.use(server)
			this.server.listen(config.port);
			this.server.on("listening", callback);
		},

		tearDown: function(callback){
			this.server.close();
			callback();
		},

		"Test Body": function(test){
			var options = {
				host:"localhost",
				port:config.port,
				path:"/"

			}
			request = http.get(options,function(response){
				var body = "";
				response.on('data', function(chunk){
					body += chunk;
				});
				response.on('end', function(chunk){
					test.ok(body.should.be.eql("Hello there!"));
					test.done();
				});
			});
		},
		"Test Headers": function(test){
			var options = {
				host:"localhost",
				port:config.port,
				path:"/"

			}
			request = http.get(options,function(response){
				response.on('end', function(){
					test.ok(response.statusCode.should.be.eql(200));
					test.done();
				});
			});
		}
	},

/*	
	"Create New Account": function(test){

		var myAccount = new Accounts.Account();
		test.ok(myAccount.has("balance"));	
		test.ok(myAccount.get("balance").should.be.eql(0));
		delete myAccount;
		test.done();
		
	},
	"Add To Balance": function(test){
		var myAccount = new Accounts.Account();
		test.ok(myAccount.has("balance"));
		test.ok(myAccount.get("balance").should.be.eql(0));
		
		myAccount.add(1000);
		
		test.ok(myAccount.get("balance").should.be.eql(1000));
		delete myAccount;
		test.done();
	},
	"Calculate Interest": function(test){
		var myAccount = new Accounts.Account();
		test.ok(myAccount.has("balance"));	
		test.ok(myAccount.get("balance").should.be.eql(0));

		myAccount.add(1000);
		myAccount.doInterest();
		test.ok(myAccount.get("balance").should.be.eql(1020));
		delete myAccount;
		test.done();
	}
*/	
}
