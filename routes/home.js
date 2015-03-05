var nav = require('../navigation.json');

exports.view = function(req,res) {

	var random_num = Math.random();

	if (random_num > 0.5) {
		res.render('home',nav);	
	}
	else {
		res.render('home_alternate',nav);
	}
};