// Source: https://www.sitepoint.com/getting-started-slack-bots/

var helloworldbot = require('./helloworldbot');
app.post('/helloworld', helloworldbot);

var express = require('express');
var bodyParser = require('body-parser');
var application = express();
var port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true}));

// test route
app.get('/', function(req, res){
    res.status(200).send('Hello World')
});
// error handler
app.use(function(err, req, res,next)){
    console.error(err.stack);
    res.status(400).send(err.message);
});

// Server listening
app.listen(port, function() {
           console.log('Slack bot listening on port' + port)
});