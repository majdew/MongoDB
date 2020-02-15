var express = require('express');
var ejs = require('ejs');
var bodyparser = require('body-parser');
var DB = require("./modules/dbconnection");


var app = express();
const PORT = 3005;
var urlEncodedParser = bodyparser.urlencoded({extended:false})
app.set('view engine' , 'ejs');

app.use(express.static('assets'))

var server = app.listen(PORT, (result) => {
	console.log(`you are now listening to port ${PORT}`);
});

DB.createCollection();

app.get('/', (req, res) => {
	res.render('index');
});

DB.find();

app.post('/' , urlEncodedParser, (req , res)=>{
	console.log(req.body);
	DB.insertElement(req.body);
	res.render('employee' , {person :req.body});
})

//DB.deleteAll();