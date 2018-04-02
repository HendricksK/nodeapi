//notes routes

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

	//GET
	app.get('/notes/:id', (req,res) => {
	
		var id = req.params.id;
		var details = { '_id': new ObjectID(id) };	

	    db.collection('notes').find(details).toArray( (err, result) => {
	      	if (err) {
	        	res.send({'error':'An error has occurred'});
	      	} else {
	      		res.send(result);
	      	}
		});
	});

	//POST
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

	//DELETE
	app.delete('/notes/:id', (req, res) => {

    	var id = req.params.id;
    	var details = { '_id': new ObjectID(id) };

	    db.collection('notes').remove(details, (err, item) => {
	      	if (err) {
	        	res.send({'error':'An error has occurred'});
	      	} else {
	        	res.send('Note ' + id + ' deleted!');
	      	} 
    	});
  	});

	//PUT also known as UPDATE
  	app.put('/notes/:id', (req, res) => {

    	var id = req.params.id;
    	var details = { '_id': new ObjectID(id) };
    	var note = { text: req.body.body, title: req.body.title };
		    
		db.collection('notes').update(details, note, (err, result) => {
		    if (err) {
		        res.send({'error':'An error has occurred'});
		    } else {
		        res.send(note);
		    } 
		});
  });


};
