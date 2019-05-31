
var MAINAPP = MAINAPP || {};

let $ = (function (app) {

    var privateProperty = false;
    var privateProperty2 = [1, 2, 3];
    var publicProperty = "Helllloooo";

    function privateFunction() {
        console.log(privateProperty)
    }

     let publicMethod = function() {
        console.log(privateProperty2)
    }

    app.publicMethod = publicMethod;
    app.publicProperty = publicProperty;

    return app;

}) (MAINAPP)