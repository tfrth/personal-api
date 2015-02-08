var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 8777;

var me = {
	name: "Ty",
	location: "Portland, OR",
	hobbies: ["hiking", "soccer", "surfing", "wood working", "cycling"],
	occupations: ["hobo", "vagabond", "javascript poet"],
	mentions: "cabinporn.com",
	references: ["2 chainz", "dr. dre", "william wordsworth", "thomas jefferson"],
};

var skills = {
  id: 1,
  name: 'Javascript',
  experience: 'Intermediate'
};

app.listen(port);

app.use(bodyParser.json());

app.use(function(req, res, next){
  res.setHeader('Access-Cnotrol-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

app.get('/name', function(req, res){
	res.json(me.name);
})

app.get('/location', function(req, res){
	res.json(me.location);
})

app.put('/location', function(req, res){
	me.location = req.body.location;
	res.json(me);
})

app.get('/hobbies', function(req, res){
	if(req.query.order === 'asc') {
		res.json(me.hobbies.sort());
	}
})

app.get('/occupations', function(req, res){
	res.json(me.occupations);
})

app.get('/occupations/latest', function(req, res){
	var last = me.occupations[me.occupations.length - 1];
	res.json(last); 
})






