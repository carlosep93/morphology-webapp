var express = require("express");
var app = express();
var controller = require("./controller");

app.use(express.static('public'));

app.get('/',function (req, res) {
	res.sendFile( __dirname + '/index.html');
});


app.post('/translate', function(req, res) {
	console.log("Funciona la ruta");
	response = {'translation' : 'Respuesta de prueba'};
	res.send(JSON.stringify(response));
});


var server = app.listen(8888, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http//%s:s", host, port);
})




