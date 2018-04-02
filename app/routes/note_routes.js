//notes routes

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

	app.get('/notes/:id', (req,res) => {
	
		var id = '5ac28363a7b62c21fc6122e6';
		var details = { '_id': new ObjectID(id) };	

	    db.collection('notes').find(details).toArray( (err, result) => {
	      	if (err) {
	        	res.send({'error':'An error has occurred'});
	      	} else {
	      		res.send(result);
	      	}
		});
	});

	app.post('/notes', (req,res) => {

		var note = { text: req.body.body, title: req.body.title };
	    
	    db.collection('notes').insert(note, (err, result) => {
	      	if (err) { 
	        	res.send({ 'error': 'An error has occurred' }); 
	      	} else {
	        	res.send(result.ops[0]);
	      	}
	    });
	})
};
