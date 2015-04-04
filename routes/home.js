var nav = require('../navigation.json');
var curr = require('../featured_country.json');

exports.view = function(req,res) {

	res.render('home', {
		'navigation': nav.navigation,
		'country': curr.country
	});	

};