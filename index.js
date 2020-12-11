// https://www.a-mean-blog.com/ko/blog/Node-JS-%EC%B2%AB%EA%B1%B8%EC%9D%8C/Hello-World/Static-%ED%8F%B4%EB%8D%94-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0

var express = require('express');
var app = express();

// 정적 페이지 연결
app.use(express.static(__dirname + '/public'));

/*
app.get('/', function(req, res) { // req: HTTP request header, url, cookies, query, body
                                    // res: HTTP response header, cookies, HTTP code
    res.send('Hello Wisestone!');
});  // event listener
*/

var port = 3000;
app.listen(port, function() {
    console.log('server on! http://localhost:3000');
});

