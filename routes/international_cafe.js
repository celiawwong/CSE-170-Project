var nav = require('../navigation.json');
var curr = require('../featured_country.json');

exports.view = function(req,res) {
	console.log("in here");
	res.render('international_cafe', {
		'navigation': nav.navigation,
		'country': curr.country
	});	
};
