import express   from  'express';
import path from 'path';
import open from 'open'; 
import compression from 'compression';
/* eslint-disable no-console */
var port =  3000;
var app = express(); 
 
app.use(compression());
app.use(express.static('dist'));

// main route
app.get('/', function(req, resp ){
    resp.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, resp){ 
    resp.json([
            {"userId": 1, "firstName": "Bob", "lastName": "Smith", "email": "aaaa@asd.com"},
            {"userId": 2, "firstName": "Tammy", "lastName": "Norton", "email": "bbba@asd.com"},
            {"userId": 3, "firstName": "Tina", "lastName": "Lee", "email": "bbba@asd.com"}
        ]);
});

// app start up
app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
})

