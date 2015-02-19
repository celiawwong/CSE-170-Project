var nav = require('../navigation.json');

exports.view = function(req,res) {
	res.render('names',nav);	
};

var namesList = require('../names.json');

exports.view = function(req, res) {
	res.render('names', namesList);
};

function play() {
    var audio = document.getElementById("audio");
    audio.play();
};