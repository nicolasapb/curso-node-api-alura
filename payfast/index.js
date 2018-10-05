var express = require('express');
var app = express();

var PORT = '3000';

app.listen(PORT, function(){

    console.log('Server is running at port ' + PORT);
});

app.get('/teste', function(req, res) {
    console.log('recebida requisição de teste');
    res.send('OK.');
});
