define(function(require, exports, module) {

var ApplicationDelegate = require('./delegate').ApplicationDelegate;

function main(options){
    var app = this;

    app.addRegions({
        window: '#window',
        modal: '#modal',
        activity: '#activity'
    });

    new ApplicationDelegate({app: app});
}

exports.main = main;
});