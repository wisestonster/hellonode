var express = require('express');
var app = express();

app.get('/', function(req, res) { // req: HTTP request header, url, cookies, query, body
                                    // res: HTTP response header, cookies, HTTP code
    res.send('Hello Wisestone!');
});  // event listener

var port = 3000;
app.listen(port, function() {
    console.log('server on! http://localhost:3000');
});

