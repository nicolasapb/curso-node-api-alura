var app = require('./config/custom-express')();

var PORT = '3000';

app.listen(PORT, function(){

    console.log('Server is running at port ' + PORT);
});
