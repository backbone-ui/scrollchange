# Backbone UI: Scrollchange

Monitoring scroll position to update element classes.

## Install

Using bower:
```
bower install backbone.ui.scrollchange
```

## Dependencies

* [Backbone](http://backbonejs.org/)
* [Underscore](http://underscorejs.org/)
* [jQuery](http://jquery.com/) (or alternative event handler)

Note that the plugin uses APP.View from [Backbone APP](http://github.com/makesites/backbone-app) if available, but falls back gracefully if you prefer using custom render logic.


## Usage

```
var view = new Backbone.UI.Scrollchange({
		el : "#menu"
});
view.render();
```


## Options

A more detailed list of all the available options.

* ***offset***: number of pixels off the top of the screen - default: 0
* ***item***: selector for the individual item - default: "li a"


## Examples

* [Static example](http://rawgithub.com/backbone-ui/scrollchange/master/examples/static.html)


## Credits

Initiated by Makis Tracend ( [@tracend](http://github.com/tracend) )

Distributed through [Makesites.org](http://makesites.org/)

Released under the [MIT license](http://makesites.org/licenses/MIT)

