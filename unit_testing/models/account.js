var Backbone = require('backbone');

exports.Account = Backbone.Model.extend({

	defaults:{
		"balance":0,
		"interest":2
	},
	add:function(amount){
		new_balance = this.get("balance") + amount;
		this.set({balance:new_balance});
	},
	doInterest:function(){
		new_balance = this.get("balance") + (this.get("balance") * (this.get("interest")/100));
		this.set({balance:new_balance});
	}

});
