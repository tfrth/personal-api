var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.json());

var port = 8777;r

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

   if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);

app.listen(port);
console.log('listening on port: ' + port);


var me = {
	name: "Ty",
	location: "Portland, OR",
	hobbies: ["hiking", "soccer", "surfing", "wood working", "cycling"],
	occupations: ["hobo", "vagabond", "javascript poet"],
	mentions: ["cabinporn.com"],
	references: ["2 chainz", "dr. dre", "william wordsworth", "thomas jefferson"],
	skills: [
				{
					id: 1,
					name: 'Javascript',
					experience: 'Intermediate'
				},
				{
					id: 2,
					name: 'CSS',
					experience: 'Beginner'
				},
				{
					id: 3,
					name: 'surfing',
					experience: 'advanced'
				}
			]
};

skills = {
  id: 1,
  name: 'Javascript',
  experience: 'Intermediate'
};



// app.use(function(req, res, next){
//   res.setHeader('Access-Cnotrol-Allow-Origin','*');
//   res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');  //can install extra node module!
//   next();
// })

app.get('/name', function(req, res){
	res.json(me.name);
})

app.get('/location', function(req, res){
	res.json(me.location);
})

app.put('/location', function(req, res){
	me.location = req.body.location;
	res.json(me.location);
})

app.get('/hobbies', function(req, res){
	if (req.query.order === 'asc') {
		res.json(me.hobbies.sort());
	}
	else if(req.query.order === 'desc') {
		res.json(me.hobbies.reverse());
	} else {
		res.json(me.hobbies);
	}
})

app.get('/occupations', function(req, res){
	if (req.query.order === 'asc') {
		res.json(me.occupations.sort());
	}
	else if (req.query.order === 'desc') {
		res.json(me.occupations.reverse());
	} else {
		res.json(me.occupations);
	}
})

app.get('/occupations/latest', function(req, res){
	var last = me.occupations[me.occupations.length - 1];
	res.json(last); 
})

app.get('/references', function(req, res){
	res.json(me.references);
})

app.get('/mentions', function(req, res){
	res.json(me.mentions);
})

app.post('/mentions', function(req, res){
	me.mentions.push(req.body);
	res.json(me.mentions);
})

app.post('/references', function(req, res){
	me.references.push(req.body);
	res.json(me.references);
})

app.get('/skills', function(req, res){
	var skillSet = [];
	var skillSorter = function(level){
		for (var i = 0; i < skills.length; i++) {
			if (me.skills[i].experience === level) {
				skillset.push(me.skills[i]);
			}
		}
	return skillSet;

	};

	if (req.query.experience === 'Intermediate'){
		var getSkills = skillSorter('Intermediate');
		res.json(getSkills);
	}

	if (req.query.experience === 'Beginner'){
		var getSkills = skillSorter('Beginner');
		res.json(getSkills);
	}
	if(req.query.experience === 'Advanced'){
		var getSills = skillSorter('Advanced');
		res.json(getSkills);
	}
});

app.post('/skills', function(req, res){
	me.push.skills(req.body);
	res.json(me.skills);
})







