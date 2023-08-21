const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});  

app.get('/', function(req, res){
    res.sendFile(__dirname + '/home.html')
})

app.get('/home', function(req, res){
    res.sendFile(__dirname + '/home.html');
})

app.get('/chat', function(req, res){
    res.sendFile(__dirname + '/chat.html');
})

app.get('/menu', function(req, res){
    res.sendFile(__dirname + '/menu.html');
})

app.get('/chat_Man_T', function(req, res){
    res.sendFile(__dirname + '/chat_Man_T.html');
})

app.get('/chat_Man_F', function(req, res){
    res.sendFile(__dirname + '/chat_Man_F.html');
})

app.get('/chat_Woman_T', function(req, res){
    res.sendFile(__dirname + '/chat_Woman_T.html');
})

app.get('/chat_Woman_F', function(req, res){
    res.sendFile(__dirname + '/chat_Woman_F.html');
})

app.get('/about', function(req, res){
    res.sendFile(__dirname + '/about.html');
})
