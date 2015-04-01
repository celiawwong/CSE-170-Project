var nav = require('../navigation.json');
var poland = require('../poland.json');

exports.view = function(req,res) {
	console.log("in here");
	res.render('international_cafe', {
		'navigation': nav.navigation,
		'country': poland.country
	});	
};
