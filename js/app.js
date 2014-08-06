//http://www.williamhart.info/an-emberjs-beginners-tutorial.html

var Roller = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_VERSION: true,
    debugMode: true
});

//model
Roller.Roll = Ember.Object.extend({
  
    
});




//create a route for roll
Roller.Router.map(function () { 
    this.resource("contact");
});

Roller.Router.map(function () { 
    this.resource("about");
});


// //remove to see index route
// Roller.IndexRoute = Ember.Route.extend({
    // redirect: function () {
        // this.transitionTo("roll");
    // }
// });




