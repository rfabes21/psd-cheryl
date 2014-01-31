define(function(require, exports, module) {

var ApplicationDelegate = require('./delegate').ApplicationDelegate;

function main(options){
    var app = this;

    app.addRegions({

    });

    new ApplicationDelegate({app: app});
}

exports.main = main;
});
