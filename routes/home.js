var nav = require('../navigation.json');
var poland = require('../poland.json');

exports.view = function(req,res) {

	res.render('home', {
		'navigation': nav.navigation,
		'country': poland.country
	});	

};