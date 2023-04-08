const host = 'localhost';
const port = 8000;
const http = require("http");
var express=require("express");

var app=express();
app.use(express.static('static'));
app.use('/css',express.static('static/styles.css'));
app.use('/tsx',express.static('static'));
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function (request, response) {
        response.sendFile(__dirname+"/index.html")
});

app.post('/login' , function(request , response){
  console.log(request.body)
  response.json(request.body)
})
/*

const requestListener = function(req,res){
	res.writeHead(200);
	const fs=require("fs").promises;
	fs.readFile("D:/Github/clicking_contest/static/index.html");
	return;
};
const server = http.createServer(requestListener);
*/

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
