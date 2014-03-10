window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},  
  initialize: function() {
    this.router = new this.Routers.Main();
    Backbone.history.start({pushState: true});

    App.autocompleter = new Autocompleter();
    var ws = new WebSocket('ws://' + window.location.host + window.location.pathname);
    ws.onmessage = function(m) { 
      autocompleter.add(m.data); 
    };

    App.Routers.Main = Backbone.Router.extend({
      routes: {
        "" : "index"
      }
  }
    })
  }
};
$(document).ready(function(){
  App.initialize();
});

