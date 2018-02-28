var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
    app.use(express.static('src'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.set('views', __dirname  + '/src');   
    app.set('view engine', 'html');
    app.engine('html', require('ejs').renderFile);    
    app.post('/ajax', function(req,res){
     res.setTimeout(3000, function(){
        res.send({"return_json_function_name": "ZWEB_PS_MYINFO","ENAME":"나구엽","JIKWIDUNG":"E06","ORGEH":"50051121", "TABLE":[{"test":"1234", "test2":"2121"},{"test3":"12343", "test4":"eefe"}]});
     });
    });
    app.get('/css', function(req,res){
      res.render('css.html');
    });
    app.get('/js', function(req,res){
      res.render('js.html');
    });
    app.get('/css/grazioso-1.0.0.css', function(req,res){
      res.render('/css/grazioso-1.0.0.css');
    });
    app.get('/js/grazioso-1.5.0.js', function(req,res){
      res.render('/js/grazioso-1.5.0.js');
    });

var server = app.listen(process.env.PORT || 8081, function(){
    console.log('Running Web server on 8081 port');
});