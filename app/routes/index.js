//routes/index.js

const noteRoutes = require('./note_routes')

module.exports = function(app, db) {
	noteRoutes(app, db)
	//Other route groups can go here, reminds me of the way I route groups in laravel or slim 
}
