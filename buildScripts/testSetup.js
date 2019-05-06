//This file is not tranpiled, so must use commonJS and ES5
//Register babel to tranpile before oir test run.
require('babel-register')();
//disable mocha webpack feature that mocha doesnt understand
require.extensions['.css'] =  function(){};
