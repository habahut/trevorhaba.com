var express = require('express'),
    app = express(),
    path = require('path'),
    fs = require('fs');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + "/public/main.html"));
})

app.get('/parallax', function(req, res) {
    res.sendFile(path.resolve(__dirname + "/public/parallax.html"));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
