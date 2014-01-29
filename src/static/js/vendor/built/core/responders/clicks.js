define(function (require, exports, module) {

var $ = require('jquery');
var _ = require('underscore');
var marionette = require('marionette');
var helpers = require('built/core/utils/helpers');

var ClickTestResponder = marionette.Controller.extend({

    initialize: function(options){
        _.bindAll(this, 'onWindowPress', 'initializeWindowListener');
        this.$el = helpers.registerElement(options.el);

        // We defer this here because if the ClickTestResponder
        // is initilized during click event handling, the
        // $(window).on('click') will receive the click event
        // and we basically don't care until the *next* click.
        _.defer(this.initializeWindowListener);

        this.clickInside    = options.clickInside  || this.clickInside;
        this.clickOutside   = options.clickOutside || this.clickOutside;
    },

    initializeWindowListener: function(){
        $(window).on('click', this.onWindowPress);
    },

    onWindowPress: function(e){
        var isChild = this.targetIsChild($(e.target));

        if(isChild){
            this.clickInside(this, e);
            return;
        }

        this.clickOutside(this, e);
    },

    targetIsChild: function($el){
        return this.$el.has($el).length > 0;
    },

    clickInside: function(responder, e){
        // noop
    },

    clickOutside: function(responder, e){
        // noop
    },

    onClose: function(){
        $(window).off('click', this.onWindowPress);
    }


});

exports.ClickTestResponder = ClickTestResponder;

});
