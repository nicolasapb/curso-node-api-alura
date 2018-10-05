module.exports = function(app) {
    app.get('/pagamentos', function(req, res) {
        console.log('recebida requisição de teste');
        res.send('OK.');
    });
};

