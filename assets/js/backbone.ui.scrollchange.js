/* Backbone UI: Scrollchange
 * Source: https://github.com/backbone-ui/scrollchange
 * Copyright © Makesites.org
 *
 * Initiated by Makis Tracend (@tracend)
 * Distributed through [Makesites.org](http://makesites.org)
 * Released under the [MIT license](http://makesites.org/licenses/MIT)
 */

(function($, _, Backbone, APP) {

	// support for Backbone APP() view if available...
	var View = ( typeof APP != "undefined" && typeof APP.View != "undefined" ) ? APP.View : Backbone.View;

	var Scrollchange = View.extend({
		// default options
		options: {
			item : "li a",
			offset: 0,
			refresh: 100,
			className: "active"
		},

		events : {

		},

		timer: false,

		initialize: function(){
			var self = this;
			_.bindAll(this, "onScroll", "updateItems");
			window.addEventListener('scroll', _.bind(this.onScroll, this), false);
			// trigger onload
			this.updateItems();
			return View.prototype.initialize.apply(this, arguments );
		},

		onScroll: function() {
			if(this.timer) return;
			// enable after .1 seconds, update by using a custom 'refresh' option
			this.timer = setTimeout(this.updateItems, this.options.refresh);
		},

		updateItems: function(){
			//console.log("update!!");
			var self = this;
			// find the items
			var scroll = $("body").scrollTop();
			var height = $(window).height();
			// the bounderies of the 'active' area

			var min = scroll - .5 * height + this.options.offset;
			var max = scroll + .5 * height + this.options.offset;
			$(this.options.item).each(function(){
				var el = $(this).attr("data-target") || $(this).attr("href");
				// get the position of the item target - use vanilla js instead?
				var pos = $(el).offset().top;
				if( min <= pos && max > pos ){
					$(this).parent().addClass( self.options.className );
				} else {
					$(this).parent().removeClass( self.options.className );
				}

			});
			// reset timer
			clearTimeout(this.timer);
			this.timer = false;
		}
		// default render - may be overriden if postRender is included
		/*
		render: function(){
			if(APP) {
				return View.prototype.render.call(this);
			} else {
				this.preRender();
				this.postRender();
			}
		},

		preRender: function(){

		},

		postRender: function(){

		},
		*/

	});

	// fallbacks
	if( _.isUndefined( Backbone.UI ) ) Backbone.UI = {};
	Backbone.UI.Scrollchange = Scrollchange;

	// Support module loaders
	if ( typeof module === "object" && module && typeof module.exports === "object" ) {
		// Expose as module.exports in loaders that implement CommonJS module pattern.
		module.exports = Scrollchange;
	} else {
		// Register as a named AMD module, used in Require.js
		if ( typeof define === "function" && define.amd ) {
			//define( "backbone.ui.scrollchange", [], function () { return Scrollchange; } );
			//define( ['jquery', 'underscore', 'backbone'], function () { return Scrollchange; } );
			define( [], function () { return Scrollchange; } );
		}
	}
	// If there is a window object, that at least has a document property
	if ( typeof window === "object" && typeof window.document === "object" ) {
		window.Backbone = Backbone;
		// update APP namespace
		if( typeof APP != "undefined" && (_.isUndefined( APP.UI ) || _.isUndefined( APP.UI.Scrollchange ) ) ){
			APP.UI = APP.UI || {};
			APP.UI.Scrollchange = Backbone.UI.Scrollchange;
			window.APP = APP;
		}
	}


})(this.jQuery, this._, this.Backbone, this.APP);