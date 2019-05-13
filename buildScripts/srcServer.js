import express   from  'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
/* eslint-disable no-console */
var port =  3000;
var app = express();
const compiler = webpack(config);

//webpack 
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
 

// main route
app.get('/', function(req, resp ){
    resp.sendFile(path.join(__dirname, '../src/index.html'));
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

