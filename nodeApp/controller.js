

function controller() {
	function getTranslation(req, res) {
		//This is a mock function until having an API
		console.log('getTranslation');
		response = {'translation' : 'Respuesta de prueba'};
		res.send(Json.stringify(response));
	}	
}

exports.controller = controller;


